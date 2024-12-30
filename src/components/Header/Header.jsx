import styles from "./Header.module.css";
import logo from "../../assets/images/aadheuss-logo.svg";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerIntro}>
        <div>
          <h1 className={styles.h1}>
            Adhistira
            <span className={styles.highlight}> Afdhol</span>
          </h1>
          <p className={styles.role}>Fullstack Developer</p>
        </div>
        <p className={styles.intro}>
          As a kid solving puzzles and art has been my go to activity to spend
          my time on, so I was very intrigued to find out I can do both of that
          things in web development. I started learning programming since 2022
          and it was a whole different experience trying to taught myself how to
          program. The journey of learning and learning how to learn is such a
          never ending experience for me and I am having a blast doing it.
        </p>
      </div>
      <div>
        <img className={styles.logo} src={logo} alt="Aadheuss logo"></img>
      </div>
    </header>
  );
}

export default Header;
