import { useRef } from "react";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Project";
import Skills from "./components/Skills/Skills";

function App() {
  const footerRef = useRef(null);

  const toggleContainerClass = (name) => {
    if (footerRef.current) {
      console.log(footerRef.current.classList);
      footerRef.current.classList.toggle(name);
    }
  };
  return (
    <>
      <Header />
      <main>
        <Skills />
        <Projects />
      </main>
      <footer className="footer" ref={footerRef}>
        <Contact toggleContainerClass={toggleContainerClass} />
        <p className="copyrightText">
          © Copyright Adhistira Afdhol 2024. All rights reserved
        </p>
      </footer>
    </>
  );
}

export default App;
