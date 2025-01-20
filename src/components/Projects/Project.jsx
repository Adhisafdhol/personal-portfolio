import styles from "./Projects.module.css";
import battleshipImgOne from "../../assets/images/battleship-thumbnail.png";
import battleshipImgTwo from "../../assets/images/battleship-thumbnail-2.png";
import jyronueThumbnailOne from "../../assets/images/jyronue-thumbnail.png";
import jyronueThumbnailtwo from "../../assets/images/jyronue-thumbnail-2.png";
import jyronueThumbnailthree from "../../assets/images/jyronue-thumbnail-3.png";
import octoconvoThumbnail from "../../assets/images/octoconvo-thumbnail.png";

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h2 className={styles.projectsHeading}>Projects</h2>
      <div className={styles.projectList}>
        <div className={styles.battleshipContainer}>
          <article className={styles.battleship}>
            <h2 className={styles.battleshipHeading}>Battleship</h2>
            <p className={styles.projectDescription}>
              Battleship is a web game application created using{" "}
              <em>Javascript</em>, <em>HTML</em>, and <em>CSS</em> with{" "}
              <em>Webpack</em> as the module bundler. It is a classic two
              players game where the first player to sink all the other
              player&#39;s ships wins. <br></br> This application is developed
              with <em>TDD</em> approach using <em>Jest</em> for unit testing.
            </p>
            <ul className={styles.list}>
              <h3 className={styles.battleshipH3}>Features</h3>
              <li className={styles.battleshipLi}>Play against AI.</li>
              <li className={styles.battleshipLi}>
                Drag and drop API implementation to let players place their
                ships.
              </li>
              <li className={styles.battleshipLi}>
                Double click to rotate the ships.
              </li>
            </ul>

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
              Jyronue is a full-stack image-sharing social media application
              built using <em>Node.JS</em>, <em>Express</em>, <em>React</em>,{" "}
              <em>PostgreSQL</em>, and <em>Supabase</em>.<br></br>Jyronue is
              implemented with responsive design, allowing seamless user
              experience on different devices.
            </p>
            <ul className={styles.list}>
              <h3 className={styles.jyronueH3}>Features</h3>
              <li className={styles.jyronueLi}>
                User authentication, create account and login.
              </li>
              <li className={styles.jyronueLi}>
                Create posts, comments, like posts, like comments, and follow
                other users.
              </li>
              <li className={styles.jyronueLi}>
                Your main feed shows your followed users posts in chronological
                order.
              </li>
              <li className={styles.jyronueLi}>
                Discover latest posts on explore page.
              </li>
            </ul>
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
        <div className={styles.octoconvoContainer}>
          <article className={styles.octoconvo}>
            <h2 className={styles.octoconvoHeading}>Octoconvo</h2>
            <p className={styles.projectDescription}>
              Octoconvo is a full-stack messaging web app created with
              <em> Node.JS</em>, <em>Express</em>, <em>React</em>, and
              <em> MongoDB</em>.
            </p>
            <ul className={styles.list}>
              <h3 className={styles.octoconvoH3}>Features</h3>
              <li className={styles.li}>
                Backend API to create users and messages.
              </li>
              <li className={styles.li}>
                User Authentication using Passport.JS Local Strategy.
              </li>
            </ul>
            <div className={styles.octoconvoImageContainer}>
              <img
                className={styles.octoconvoImageItem}
                src={octoconvoThumbnail}
                alt="Octoconvo application screenshots"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Projects;
