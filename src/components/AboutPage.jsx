import { useInView } from "react-intersection-observer";
import { slideInFromInside, slideInFromLeft } from "../utils/motion.ts";
import { motion } from "framer-motion";
import AboutSection from "./AboutSection.jsx";

const AboutPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Change to false if you want to trigger every time it comes into view
  });

  return (
    <div className="w-full h-full flex flex-col items-center" ref={ref}>
      <motion.h1
        className=" text-7xl font-bold text-primary p-2 "
        variants={slideInFromInside(0.9)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        About Me
      </motion.h1>
      <motion.p
        variants={slideInFromLeft(1.25)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-fifth font-custom2 font-semibold text-3xl p-2 "
      >
        My Introduction
      </motion.p>

      <AboutSection />
    </div>
  );
};

export default AboutPage;
