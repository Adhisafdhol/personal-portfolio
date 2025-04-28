import { useEffect, useRef } from "react";
import styles from "./Header.module.css";

function Header() {
  const headingRef = useRef(null);
  const roleRef = useRef(null);
  const introRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry.intersectionRatio);
          if (entry.isIntersecting && entry.intersectionRatio > 0.11) {
            if (!entry.target.classList.contains("slide-down")) {
              entry.target.classList.add("slide-down");
            }
          }

          if (!entry.isIntersecting && entry.intersectionRatio < 1) {
            if (entry.target.classList.contains("slide-down")) {
              entry.target.classList.remove("slide-down");
            }
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const heading = headingRef.current;
    const intro = introRef.current;
    const role = roleRef.current;

    const addObserver = (el) => {
      if (el) {
        observer.observe(el);
      }
    };

    const removeObserver = (el) => {
      if (el) {
        observer.unobserve(el);
      }
    };

    addObserver(heading);
    addObserver(intro);
    addObserver(role);

    return () => {
      removeObserver(heading);
      removeObserver(role);
      removeObserver(intro);
    };
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerIntro}>
          <div>
            <h1 ref={headingRef} className={styles.h1}>
              Adhistira
              <span className={styles.highlight}> Afdhol</span>
            </h1>
            <p ref={roleRef} className={styles.role}>
              Fullstack Developer
            </p>
          </div>
          <div ref={introRef} className={styles.introContainer}>
            <p className={styles.intro}>
              &emsp; A Developer who combines creativity with pragmatism, design
              beautiful efficient software that works well and is pleasing to
              the eyes.
            </p>
            <p className={styles.intro}>
              I am a fullstack developer who focuses on creating clean
              maintainable code with robust testing and seamless user
              experience. My philosophy is to built software that solve users’
              needs, provide great user experience, and built software that is
              accessible, well-designed, and efficient.
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
