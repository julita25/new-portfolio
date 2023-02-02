// import components
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Awards from "./components/Awards";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import { useEffect } from "react";

// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

//styles
import './index.css';

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Awards />
      <Testimonials />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3 font-bold text-[#253D57] leading-8">JULIETTE MARTINEZ</h6>
      </footer>
    </div>
  );
};

export default App