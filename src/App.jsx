import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import "./index.css";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import MouseCursor from "./components/MouseCursor/MouseCursor";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <ScrollUp />
      <MouseCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />

      <Contact />
    </div>
  );
}

export default App;
