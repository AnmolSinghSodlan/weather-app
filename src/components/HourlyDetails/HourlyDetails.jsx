import { MdSunny } from "react-icons/md";
import styles from "./HourlyDetails.module.css";

function HourlyDetails() {
  return (
    <div className={styles.app}>
      <p className={styles.heading}>Hourly Details of Today's Weather</p>
      <div className={styles.ui}>
        <div className={styles.box}>
          <div className={styles.time}>10:00</div>
          <div className={`${styles.icon} ${styles.sunrise}`}>
            <MdSunny />
          </div>
          <div className={styles.temp}>23°C</div>
        </div>
        <div className={styles.box}>
          <div className={styles.time}>10:00</div>
          <div className={`${styles.icon} ${styles.sunrise}`}>
            <MdSunny />
          </div>
          <div className={styles.temp}>23°C</div>
        </div>
        <div className={styles.box}>
          <div className={styles.time}>10:00</div>
          <div className={`${styles.icon} ${styles.sunrise}`}>
            <MdSunny />
          </div>
          <div className={styles.temp}>23°C</div>
        </div>
        <div className={styles.box}>
          <div className={styles.time}>10:00</div>
          <div className={`${styles.icon} ${styles.sunrise}`}>
            <MdSunny />
          </div>
          <div className={styles.temp}>23°C</div>
        </div>
        <div className={styles.box}>
          <div className={styles.time}>10:00</div>
          <div className={`${styles.icon} ${styles.sunrise}`}>
            <MdSunny />
          </div>
          <div className={styles.temp}>23°C</div>
        </div>
        <div className={styles.box}>
          <div className={styles.time}>10:00</div>
          <div className={`${styles.icon} ${styles.sunrise}`}>
            <MdSunny />
          </div>
          <div className={styles.temp}>23°C</div>
        </div>
      </div>
    </div>
  );
}

export default HourlyDetails;
