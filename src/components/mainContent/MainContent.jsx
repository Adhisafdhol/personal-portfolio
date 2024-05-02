import styles from "./MainContent.module.css";

function MainContent() {
  return (
    <main className={styles.main}>
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
