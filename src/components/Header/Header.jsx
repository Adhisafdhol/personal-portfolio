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
          if (entry.isIntersecting) {
            console.log({ entry });
            if (!entry.target.classList.contains("slide-down")) {
              entry.target.classList.add("slide-down");
            }
          } else {
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
          <p ref={introRef} className={styles.intro}>
            I&#039;m a full-stack developer who is passionate about art and
            technology. I love challenges and am always on a mission to
            constantly grow my skills and expertise in the software development
            industry. I am a driven and ambitious individual who loves tackling
            multitudes of complex programming problems. It is an essential goal
            for me to continuously discover new ways to improve my abilities in
            solving real-world issues through software development.
          </p>
        </div>
      </header>
    </div>
  );
}

export default Header;
