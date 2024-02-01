import { FaSearch } from "react-icons/fa";

import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.searchBox}>
      <input className={styles.searchInput} type="text" placeholder="Search" />
      <button className={styles.searchButton} href="#">
        <FaSearch className={styles.icon} />
      </button>
    </div>
  );
}

export default SearchBar;
