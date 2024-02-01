import { MdSunny } from "react-icons/md";

import { useWeather } from "../../contexts/WeatherContext";
import styles from "./DailyDetails.module.css";

function HourlyDetails() {
  const { weather } = useWeather();
  let dailyDetails;

  if (weather) {
    dailyDetails = weather.dailyDetails;
  }

  return (
    <div className={styles.app}>
      {dailyDetails && (
        <>
          <p className={styles.heading}>Daily Details of Upcoming Days</p>
          <div className={styles.ui}>
            <div>
              {dailyDetails.map((dailyDetail, index) => (
                <div key={index} className={styles.box}>
                  <div className={`${styles.icon} ${styles.sunrise}`}>
                    <MdSunny />
                  </div>
                  <div className={styles.day}>{dailyDetail.time}</div>
                  <div className={styles.weather}>
                    {dailyDetail.description}
                  </div>
                  <div className={styles.temp}>
                    {dailyDetail.temp_min}°C / {dailyDetail.temp_max}°C
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default HourlyDetails;
