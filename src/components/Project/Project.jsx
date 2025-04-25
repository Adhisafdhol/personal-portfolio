import styles from "./Project.module.css";
import PropTypes from "prop-types";
import StackList from "../StackList/StackList";

const Project = ({ project }) => {
  return (
    <div className={styles["container" + project.heading]}>
      <article className={styles.articleContainer}>
        <div className={styles.sectionOne}>
          <h2 className={styles.heading}>{project.heading}</h2>
          <p className={styles.description}>{project.description}</p>
          <ul className={styles.list}>
            <h3 className={styles.h3}>Features</h3>
            {project.features.map((feature, index) => {
              console.log(styles[`li${project.heading}`]);
              return (
                <li key={index} className={styles[`li${project.heading}`]}>
                  {feature}
                </li>
              );
            })}
          </ul>
          <div className={styles.imageContainer}>
            <img
              className={styles.thumbnail}
              src={project.thumbnail}
              alt="Octoconvo application screenshots"
            />
          </div>
        </div>
        <div className={styles.sectionTwo}>
          <StackList stackList={project.stack} />
          <ul className={styles.linkContainer}>
            {project.links.map((link, index) => {
              if (link.url) {
                return (
                  <li key={index} className={styles.linkLi}>
                    <a className={styles.link} href={link.url}>
                      {link.icon && (
                        <img
                          className={styles.icon}
                          src={link.icon}
                          alt={link.name}
                        />
                      )}
                      {link.name}
                    </a>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </article>
    </div>
  );
};

Project.propTypes = {
  project: {
    heading: PropTypes.string,
    description: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string),
    thumbnail: PropTypes.string,
    stack: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        icon: PropTypes.string,
      })
    ),
    colour: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string,
        icon: PropTypes.string,
      })
    ),
  },
};

export default Project;
