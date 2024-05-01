import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <a className={styles.icon} href="/" aria-label="Home"></a>
      <a href="*">Contact</a>
    </nav>
  );
}

export default Nav;
