import { motion, useSpring, useScroll } from "framer-motion";
import StarsCanvas from "./StarBackground";
import NavBar from "./NavBar";
import HomePage from "./HomePage.jsx";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="flex flex-col">
      <div className="h-1 w-1 p-1 absolute rounded-full top-[238px] left-[238px] bg-transparent z-[10] border-[0.25px] border-tertiary border-solid"></div>
      <motion.div
        className="absolute rounded-3xl top-60 left-60 origin-top h-screen w-1 bg-gradient-to-b from-black via-primary to-secondary"
        style={{ scaleY }}
      />
      <NavBar />
      <StarsCanvas />
      <HomePage />
    </div>
  );
};

export default Home;
