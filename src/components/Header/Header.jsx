import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import ViewMode from "../ViewMode/ViewMode";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <SearchBar />
      <ViewMode />
    </header>
  );
}

export default Header;
