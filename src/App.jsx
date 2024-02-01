import Header from "./components/Header/Header";
import WeatherToday from "./components/WeatherToday/WeatherToday";
import MoreDetails from "./components/MoreDetails/MoreDetails";
import HourlyDetails from "./components/HourlyDetails/HourlyDetails";
import DailyDetails from "./components/DailyDetails/DailyDetails";
import { WeatherProvider } from "./contexts/WeatherContext";

function App() {
  return (
    <main>
      <WeatherProvider>
        <Header />
        <WeatherToday />
        <MoreDetails />
        <HourlyDetails />
        <DailyDetails />
      </WeatherProvider>
    </main>
  );
}

export default App;
