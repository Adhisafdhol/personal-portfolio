import styles from "./MainContent.module.css";

function MainContent() {
  return (
    <main className={styles.main}>
      <section className={styles.aboutMeContainer}>
        <h1 className={styles.heading}>About me</h1>
        <p className={styles.text}>
          A self-taught fullstack web developer with passion in design and
          programming. Two years ago I stumbled into the Odin project website
          when I was searching about how to program, and I have been learning
          about programming ever since. I love creating and designing web
          application and I always putting an effort to become a better
          developer.
        </p>
      </section>
      <div className={styles.projectContainer}>
        <h2 className={styles.heading}>Projects</h2>
        <ul className={styles.projectList}>
          <li className={styles.projectItem}>
            <h3>Project name</h3>
            <p>Details</p>
          </li>
          <li className={styles.projectItem}>
            <h3>Project name</h3>
            <p>Details</p>
          </li>
          <li className={styles.projectItem}>
            <h3>Project name</h3>
            <p>Details</p>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default MainContent;
