import { TbSun, TbSunset2 } from "react-icons/tb";
import { MdOutlineVisibility } from "react-icons/md";
import { SlSpeedometer } from "react-icons/sl";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa6";

import styles from "./MoreDetails.module.css";

function MoreDetails() {
  return (
    <div className={styles.app}>
      <p className={styles.heading}>More Details of Today's Weather</p>
      <div className={styles.ui}>
        <div className={styles.box}>
          <div className={styles.text}>Sunrise</div>
          <div className={`${styles.icon} ${styles.sunrise}`}>
            <TbSun />
          </div>
          <div className={styles.value}>10:00 AM</div>
        </div>
        <div className={styles.box}>
          <div className={styles.text}>Sunset</div>
          <div className={`${styles.icon} ${styles.sunset}`}>
            <TbSunset2 />
          </div>
          <div className={styles.value}>10:00 AM</div>
        </div>
        <div className={styles.box}>
          <div className={styles.text}>Pressure</div>
          <div className={`${styles.icon} ${styles.pressure}`}>
            <SlSpeedometer />
          </div>
          <div className={styles.value}>1015 hPa</div>
        </div>
        <div className={styles.box}>
          <div className={styles.text}>Humidity</div>
          <div className={`${styles.icon} ${styles.humidity}`}>
            <WiHumidity />
          </div>
          <div className={styles.value}>94 %</div>
        </div>
        <div className={styles.box}>
          <div className={styles.text}>Visibility</div>
          <div className={`${styles.icon} ${styles.visibility}`}>
            <MdOutlineVisibility />
          </div>
          <div className={styles.value}>10 km</div>
        </div>
        <div className={styles.box}>
          <div className={styles.text}>Wind</div>
          <div className={`${styles.icon} ${styles.wind}`}>
            <FaWind />
          </div>
          <div className={styles.value}>2.06 kph</div>
        </div>
      </div>
    </div>
  );
}

export default MoreDetails;
