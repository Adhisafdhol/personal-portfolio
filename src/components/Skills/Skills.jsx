import styles from "./Skills.module.css";
import skills from "../../contents/skills";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <h2 className={styles.mainSkillHeading}>Skills</h2>
      <div className={styles.mainSkill}>
        <div className={styles.mainSkillItem}>
          <div className={styles.skillIconContainer}>
            <div className={styles.html}></div>
          </div>

          <p className={styles.mainSkillText}>HTML</p>
        </div>
        <div className={styles.mainSkillItem}>
          <div className={styles.skillIconContainer}>
            <div className={styles.css}></div>
          </div>
          <p className={styles.mainSkillText}>CSS</p>
        </div>
        <div className={styles.mainSkillItem}>
          <div className={styles.skillIconContainer}>
            <div className={styles.javascript}></div>
          </div>
          <p className={styles.mainSkillText}>Javascript</p>
        </div>
        <div className={styles.mainSkillItem}>
          <div className={styles.skillIconContainer}>
            <div className={styles.typescript}></div>
          </div>
          <p className={styles.mainSkillText}>Typescript</p>
        </div>
      </div>
      <ul className={styles.skillListContainer}>
        {skills.map((skill) => {
          return (
            <li className={styles.skillItem} key={skill.name}>
              <img
                className={styles.icon}
                src={skill.icon}
                alt={`${skill.name} Icon`}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skills;
