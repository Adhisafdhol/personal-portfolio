import styles from "./Projects.module.css";
import battleshipImgOne from "../../assets/images/battleship-thumbnail.png";
import battleshipImgTwo from "../../assets/images/battleship-thumbnail-2.png";
import jyronueThumbnailOne from "../../assets/images/jyronue-thumbnail.png";
import jyronueThumbnailtwo from "../../assets/images/jyronue-thumbnail-2.png";
import jyronueThumbnailthree from "../../assets/images/jyronue-thumbnail-3.png";

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h2 className={styles.projectsHeading}>Projects</h2>
      <div className={styles.projectList}>
        <div className={styles.battleshipContainer}>
          <article className={styles.battleship}>
            <h2 className={styles.battleshipHeading}>Battleship</h2>
            <p className={styles.projectDescription}>
              Battleship is a classic two players game where the first player to
              sink all the other player&#39;s ships wins.
            </p>
            <div className={styles.battleshipImageContainer}>
              <div className={styles.imageItem}>
                <img
                  className={styles.img}
                  src={battleshipImgOne}
                  alt="a screenshot of Battleship homepage"
                />
              </div>
              <div className={styles.battleshipImageItemTwo}>
                <img
                  className={styles.img}
                  src={battleshipImgTwo}
                  alt="a screenshot of Battleship boards"
                />
              </div>
            </div>
          </article>
        </div>
        <div className={styles.jyronueContainer}>
          <article className={styles.jyronue}>
            <h2 className={styles.jyronueHeading}>Jyronue</h2>
            <p className={styles.projectDescription}>
              Jyronue is an image-sharing social media application.
            </p>
            <div className={styles.jyronueImageContainer}>
              <div className={styles.jyronueImageItem}>
                <img
                  className={styles.img}
                  src={jyronueThumbnailOne}
                  alt="a screenshot of jyronue homepage"
                />
              </div>
              <div className={styles.jyronueImageItemTwo}>
                <img
                  className={styles.img}
                  src={jyronueThumbnailtwo}
                  alt="a screenshot of jyronue login page"
                />
              </div>
              <div className={styles.jyronueImageItemThree}>
                <img
                  className={styles.img}
                  src={jyronueThumbnailthree}
                  alt="a screenshot of jyronue profile page"
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Projects;
