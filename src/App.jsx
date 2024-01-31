import Header from "./components/Header/Header";
import WeatherToday from "./components/WeatherToday/WeatherToday";
import "./App.css";
import MoreDetails from "./components/MoreDetails/MoreDetails";

function App() {
  return (
    <main className="app">
      <Header />
      <WeatherToday />
      <MoreDetails />
    </main>
  );
}

export default App;
