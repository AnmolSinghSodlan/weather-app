import { createContext, useContext, useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getFormattedWeatherData } from "../services/weatherServices";

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [query, setQuery] = useState({ q: "delhi" });
  const [weather, setWeather] = useState(null);
  const [celcius, setCelcius] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({ ...query }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query]);

  console.log(weather);

  const kelvinToCelsius = (kelvin) => {
    return Math.round(kelvin - 273.15);
  };

  const kelvinToFahrenheit = (kelvin) => {
    return Math.round((kelvin - 273.15) * (9 / 5) + 32);
  };

  const toggleDegree = () => {
    setCelcius((celcius) => !celcius);
  };

  const secondsToTime = (seconds) => {
    const date = new Date(seconds * 1000);

    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    const amPm = hours < 12 ? "AM" : "PM";

    return `${formattedHours}:${formattedMinutes} ${amPm}`;
  };

  const dateToTime = (dateString) => {
    const date = new Date(dateString);

    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    const amPm = hours < 12 ? "AM" : "PM";

    return `${formattedHours}:${formattedMinutes} ${amPm}`;
  };

  const dateToDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "short" };
    return date.toLocaleDateString("en-US", options);
  };

  const handleKeyDown = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      setQuery({
        q: e.target.value,
      });
    }
  };

  const handleSearch = () => {
    setQuery({
      q: document.querySelector("searchInput").value,
    });
  };

  return (
    <WeatherContext.Provider
      value={{
        query,
        weather,
        celcius,
        setQuery,
        toggleDegree,
        secondsToTime,
        dateToTime,
        dateToDate,
        handleKeyDown,
        handleSearch,
        kelvinToCelsius,
        kelvinToFahrenheit,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

function useWeather() {
  const context = useContext(WeatherContext);
  if (context === undefined)
    throw new Error("WeatherContext was used outside of the WeatherProvider");
  return context;
}

export { WeatherProvider, useWeather };
