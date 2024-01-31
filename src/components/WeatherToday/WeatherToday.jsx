import styles from "./WeatherToday.module.css";

function WeatherToday() {
  return (
    <div className={styles.app}>
      <p className={styles.heading}>
        Check Out Today's Weather Information for{" "}
        <span className={styles.bold}>Delhi, IN</span>
      </p>
      <div className={styles.ui}>
        <div className={styles.image}>image</div>
        <div className={styles.details}>
          <div className={styles.temp}>
            23<span className={styles.degree}>°C</span>
          </div>
          <div className={styles.desc}>Rain</div>
        </div>
        <div className={styles.sun}>
          <div className={styles.minmax}>
            <p>
              <span className={styles.bold}>Max:</span> 24°C
            </p>
          </div>
          <div className={styles.minmax}>
            <p>
              <span className={styles.bold}>Min:</span> 22°C
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherToday;
