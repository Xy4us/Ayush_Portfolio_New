import { motion } from "framer-motion";
import { slideInFromInside, slideInFromLeft } from "../utils/motion.ts";
import { useInView } from "react-intersection-observer";
import TechnicalSkillsPage from "./TechnicalSkillsPage.jsx";

const SkillsPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Change to false if you want to trigger every time it comes into view
  });

  return (
    <div className="w-full h-full flex flex-col items-center gap-y-2" ref={ref}>
      <motion.h1
        variants={slideInFromInside(0.9)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className=" text-7xl font-bold text-primary p-2"
      >
        Skills
      </motion.h1>
      <motion.p
        variants={slideInFromLeft(1.25)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-fifth font-custom2 font-semibold text-3xl p-2"
      >
        My Skills
      </motion.p>

      <div className="w-full">
        <TechnicalSkillsPage />
      </div>
    </div>
  );
};

export default SkillsPage;
