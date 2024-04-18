import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import "./index.css";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import MouseCursor from "./components/MouseCursor/MouseCursor";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ScrollUp />
      <MouseCursor />
    </div>
  );
}

export default App;
