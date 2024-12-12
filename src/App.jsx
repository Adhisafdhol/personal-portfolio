import "./App.css";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Project";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Header />
      <main>
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
