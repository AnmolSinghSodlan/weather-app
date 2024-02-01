import { MdSunny } from "react-icons/md";

import { useWeather } from "../../contexts/WeatherContext";
import styles from "./WeatherToday.module.css";

function WeatherToday() {
  const { weather } = useWeather();
  let weatherToday;

  if (weather) {
    weatherToday = weather.weatherToday;
  }

  return (
    <div className={styles.app}>
      {weatherToday && (
        <>
          <p className={styles.heading}>
            Check Out Today's Weather Information for{" "}
            <span className={styles.bold}>
              {weatherToday.name}, {weatherToday.country}
            </span>
          </p>
          <div className={styles.ui}>
            <div className={styles.image}>
              <MdSunny />
            </div>
            <div className={styles.details}>
              <div className={styles.temp}>
                {weatherToday.temp}
                <span className={styles.degree}>°C</span>
              </div>
              <div className={styles.desc}>{weatherToday.main}</div>
            </div>
            <div className={styles.sun}>
              <div className={styles.minmax}>
                <p>
                  <span className={styles.bold}>Max:</span>{" "}
                  {weatherToday.temp_max}°C
                </p>
              </div>
              <div className={styles.minmax}>
                <p>
                  <span className={styles.bold}>Min:</span>{" "}
                  {weatherToday.temp_min}°C
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default WeatherToday;
