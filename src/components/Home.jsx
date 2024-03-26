import { motion, useSpring, useScroll } from "framer-motion";
import StarsCanvas from "./StarBackground";
import NavBar from "./NavBar";
import HomePage from "./HomePage.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Qualification from "./Qualification.jsx";
import Projects from "./Projects.jsx";
import useProjects from "../hooks/useProjects.jsx";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useProjects();

  return (
    <div className="flex flex-col h-full gap-y-20">
      {/* <div className="h-2 w-2 p-2 absolute rounded-full top-[238px] left-[234px] bg-primary z-[7]"></div> */}
      <motion.div
        className="absolute rounded-3xl top-60 left-60 h-[7000px] origin-top w-1 bg-gradient-to-b from-primary via-tertiary to-fifth"
        style={{ scaleY }}
      />
      <NavBar />
      <StarsCanvas />
      <HomePage />
      <About />
      <Skills />
      <Qualification />
      <Projects />
    </div>
  );
};

export default Home;
