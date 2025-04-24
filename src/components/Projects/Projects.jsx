import styles from "./Projects.module.css";
import Project from "../Project/Project";
import projects from "../../contents/projects";

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h2 className={styles.projectsHeading}>Projects</h2>
      <div className={styles.projectList}>
        {projects.map((project, index) => {
          return <Project key={index + project.heading} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
