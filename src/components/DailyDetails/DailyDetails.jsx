import { MdSunny } from "react-icons/md";
import styles from "./DailyDetails.module.css";

function HourlyDetails() {
  return (
    <div className={styles.app}>
      <p className={styles.heading}>Daily Details of Upcoming Days</p>
      <div className={styles.ui}>
        <div className={styles.box}>
          <div className={`${styles.icon} ${styles.sunrise}`}>
            <MdSunny />
          </div>
          <div className={styles.day}>Monday</div>
          <div className={styles.weather}>light rain</div>
          <div className={styles.temp}>23°C / 25°C</div>
        </div>
        <div className={styles.box}>
          <div className={`${styles.icon} ${styles.sunrise}`}>
            <MdSunny />
          </div>
          <div className={styles.day}>Monday</div>
          <div className={styles.weather}>light rain</div>
          <div className={styles.temp}>23°C / 25°C</div>
        </div>
        <div className={styles.box}>
          <div className={`${styles.icon} ${styles.sunrise}`}>
            <MdSunny />
          </div>
          <div className={styles.day}>Monday</div>
          <div className={styles.weather}>light rain</div>
          <div className={styles.temp}>23°C / 25°C</div>
        </div>
        <div className={styles.box}>
          <div className={`${styles.icon} ${styles.sunrise}`}>
            <MdSunny />
          </div>
          <div className={styles.day}>Monday</div>
          <div className={styles.weather}>light rain</div>
          <div className={styles.temp}>23°C / 25°C</div>
        </div>
        <div className={styles.box}>
          <div className={`${styles.icon} ${styles.sunrise}`}>
            <MdSunny />
          </div>
          <div className={styles.day}>Monday</div>
          <div className={styles.weather}>light rain</div>
          <div className={styles.temp}>23°C / 25°C</div>
        </div>
        <div className={styles.box}>
          <div className={`${styles.icon} ${styles.sunrise}`}>
            <MdSunny />
          </div>
          <div className={styles.day}>Monday</div>
          <div className={styles.weather}>light rain</div>
          <div className={styles.temp}>23°C / 25°C</div>
        </div>
      </div>
    </div>
  );
}

export default HourlyDetails;
