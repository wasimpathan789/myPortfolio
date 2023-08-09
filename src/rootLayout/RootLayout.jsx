import "./RootLayout.css";
import About from "../components/about/About";
import Education from "../components/education/Education";
import Skills from "../components/skills/Skills";
import Experience from "../components/experience/Experience";
import Testomonials from "../components/testomonials/Testomonials";
import Hero from "../components/hero/Hero";
import TestSlider from "../components/testomonials/TestSlider";

const RootLayout = () => {
  return (
    <div>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      {/* <Testomonials /> */}
      <TestSlider />
    </div>
  );
};

export default RootLayout;
