import { createContext, useContext, useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getFormattedWeatherData } from "../services/weatherServices";

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [query, setQuery] = useState({ q: "delhi" });
  const [weather, setWeather] = useState(null);

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
  // if (weather) {
  //   const { weatherToday, moreDetails, hourlyDetails, dailyDetails } = weather;
  // }

  return (
    <WeatherContext.Provider value={{ query, setQuery, weather }}>
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
