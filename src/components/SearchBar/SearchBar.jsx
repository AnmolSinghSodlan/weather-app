import { FaSearch } from "react-icons/fa";

import { useWeather } from "../../contexts/WeatherContext";
import styles from "./SearchBar.module.css";

function SearchBar() {
  const { query, handleKeyDown, handleSearch } = useWeather();

  return (
    <div className={styles.searchBox}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search"
        value={query.q}
        onKeyDown={handleKeyDown}
      />
      <button className={styles.searchButton} onClick={handleSearch}>
        <FaSearch className={styles.icon} />
      </button>
    </div>
  );
}

export default SearchBar;
