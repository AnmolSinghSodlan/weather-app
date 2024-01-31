import Header from "./components/Header/Header";
import WeatherToday from "./components/WeatherToday/WeatherToday";
import MoreDetails from "./components/MoreDetails/MoreDetails";
import HourlyDetails from "./components/HourlyDetails/HourlyDetails";
import DailyDetails from "./components/DailyDetails/DailyDetails";
import "./App.css";

function App() {
  return (
    <main className="app">
      <Header />
      <WeatherToday />
      <MoreDetails />
      <HourlyDetails />
      <DailyDetails />
    </main>
  );
}

export default App;
