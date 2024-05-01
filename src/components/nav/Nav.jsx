import styles from "./Nav.module.css";
import favicon from "/favicon.svg";

function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="/" aria-label="Home">
        <img src={favicon} width="100px" height="100px" alt="aadheuss" />
      </a>
    </nav>
  );
}

export default Nav;
