import styles from "./Contact.module.css";
import { useRef } from "react";

const Contact = () => {
  const githubLinkRef = useRef(null);

  return (
    <section className={styles.contactContainer}>
      <div className={styles.contact}>
        <h2 className={styles.contactHeading}>
          I am currently available for hire
        </h2>
        <p className={styles.contactText}>
          If you’re looking for a developer let’s chat
        </p>
        <address className={styles.address}>
          <a className={styles.email} href="mailto:adhisafdhal@gmail.com">
            adhisafdhal@gmail.com
          </a>
        </address>
        <button
          className={styles.githubButton}
          type="button"
          onClick={() => {
            if (githubLinkRef.current) {
              githubLinkRef.current.click();
            }
          }}
        >
          <a
            ref={githubLinkRef}
            className={styles.githubLink}
            href="https://github.com/Adhisafdhol"
          >
            Check my work on Github
          </a>
          <span className={styles.githubLogo}></span>
        </button>
      </div>
    </section>
  );
};

export default Contact;
