import "./App.css";
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
      </main>
    </>
  );
}

export default App;
