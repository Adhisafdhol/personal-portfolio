import styles from "./Contact.module.css";

const Contact = () => {
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
          <a className={styles.email} href="mailto:aadheuss@gmail.com">
            aadheuss@gmail.com
          </a>
        </address>
        <button className={styles.githubButton} type="button">
          <a className={styles.githubLink} href="https://github.com/Aadheuss">
            Check my work on Github
          </a>
          <span className={styles.githubLogo}></span>
        </button>
      </div>
    </section>
  );
};

export default Contact;
