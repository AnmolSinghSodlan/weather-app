import { RiCelsiusFill, RiFahrenheitFill } from "react-icons/ri";

import styles from "./DegreeMode.module.css";

function ViewMode() {
  return (
    <div className={styles.mode}>
      <input
        type="checkbox"
        className={styles.checkbox}
        id="fahrenheit-checkbox"
        // onChange={toggleFahrenheit}
      />
      <label htmlFor="fahrenheit-checkbox" className={styles.label}>
        <RiCelsiusFill />
        <RiFahrenheitFill />
        <div className={styles.ball} />
      </label>
    </div>
  );
}

export default ViewMode;
