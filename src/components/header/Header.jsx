import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>
        Hello, I am <span className={styles.ad}>Aadheuss</span>. Nice to meet
        you!
      </h1>
      <p className={styles.intro}>
        I am a self-taught fullstack developer who likes designing and learning
        new things.
      </p>
    </header>
  );
}

export default Header;
