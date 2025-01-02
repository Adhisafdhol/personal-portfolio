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
          I am Adhis. I&#039;m a full-stack developer who is passionate about
          art and technology. I love challenges and am always on a mission to
          constantly grow my skills and expertise in the software development
          industry. I am a driven and ambitious individual who loves tackling
          multitudes of complex programming problems. It is an essential goal
          for me to continuously discover new ways to improve my abilities in
          solving real-world issues through software development.
        </p>
      </div>
      <div>
        <img className={styles.logo} src={logo} alt="Aadheuss logo"></img>
      </div>
    </header>
  );
}

export default Header;
