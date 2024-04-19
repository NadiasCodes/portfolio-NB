import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import MouseCursor from "./components/MouseCursor/MouseCursor";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./index.css";

function App() {
  return (
    <div>
      <MouseCursor />
      <ScrollUp />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
