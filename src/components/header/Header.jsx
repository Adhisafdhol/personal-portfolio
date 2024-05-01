import styles from "./Header.module.css";
import Nav from "../nav/Nav";

function Header() {
  return (
    <header className={styles.header}>
      <Nav />
      <div className={styles.headerItem}>
        <h1 className={styles.h1}>
          Hello, I am <span className={styles.ad}>Aadheuss</span>. Nice to meet
          you!
        </h1>
        <p className={styles.intro}>
          I am a self-taught fullstack developer who likes designing and
          learning new things.
        </p>
      </div>
    </header>
  );
}

export default Header;
