import styles from "./MoreDetails.module.css";

function MoreDetails() {
  return (
    <div className={styles.app}>
      <p className={styles.heading}>More Details of Today's Weather</p>
      <div className={styles.ui}>
        <div className={styles.box}>
          <div>Icon</div>
          <p>Sunrise</p>
          <p>10:00 AM</p>
        </div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
      </div>
    </div>
  );
}

export default MoreDetails;
