import styles from "./Contact.module.css";
import { useRef } from "react";
import PropTypes from "prop-types";

const Contact = ({ toggleContainerClass }) => {
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
          onTouchStart={() => toggleContainerClass("gc-purple")}
          onTouchEnd={() => toggleContainerClass("gc-purple")}
          onMouseEnter={() => toggleContainerClass("gc-purple")}
          onMouseLeave={() => toggleContainerClass("gc-purple")}
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

Contact.propTypes = {
  toggleContainerClass: PropTypes.func,
};

export default Contact;
