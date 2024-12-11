import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <h3 className={styles.mainSkillHeading}>Skills</h3>
      <div className={styles.mainSkill}>
        <div className={styles.mainSkillItem}>
          <div className={styles.skillIconContainer}>
            <div className={styles.html}></div>
          </div>

          <p className={styles.text}>HTML</p>
        </div>
        <div className={styles.mainSkillItem}>
          <div className={styles.skillIconContainer}>
            <div className={styles.css}></div>
          </div>
          <p className={styles.text}>CSS</p>
        </div>
        <div className={styles.mainSkillItem}>
          <div className={styles.skillIconContainer}>
            <div className={styles.javascript}></div>
          </div>
          <p className={styles.text}>Javascript</p>
        </div>
        <div className={styles.mainSkillItem}>
          <div className={styles.skillIconContainer}>
            <div className={styles.typescript}></div>
          </div>
          <p className={styles.text}>Typescript</p>
        </div>
      </div>
      <div className={styles.skillListContainer}>
        <div className={styles.skillListOne}>
          <ul className={styles.skillList}>
            <h4 className={styles.skillListHeading}>Backend</h4>
            <li className={styles.skillListText}>Javascript</li>
            <li className={styles.skillListText}>Node.js</li>
            <li className={styles.skillListText}>Express</li>
            <li className={styles.skillListText}>SQl</li>
            <li className={styles.skillListText}>Postgresql</li>
            <li className={styles.skillListText}>MongoDB</li>
          </ul>
          <ul className={styles.skillList}>
            <h4 className={styles.skillListHeading}>Frontend</h4>
            <li className={styles.skillListText}>HTML</li>
            <li className={styles.skillListText}>CSS</li>
            <li className={styles.skillListText}>Javascript</li>
            <li className={styles.skillListText}>typescript</li>
            <li className={styles.skillListText}>react</li>
          </ul>
        </div>
        <div className={styles.skillListTwo}>
          <ul className={styles.skillList}>
            <h4 className={styles.skillListHeading}>Design & Development</h4>
            <li className={styles.skillListText}>Figma</li>
            <li className={styles.skillListText}>Inkscape</li>
            <li className={styles.skillListText}>Git & Github</li>
          </ul>
          <ul className={styles.skillList}>
            <h4 className={styles.skillListHeading}>Testing</h4>
            <li className={styles.skillListText}>Jest</li>
            <li className={styles.skillListText}>Supertest</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
