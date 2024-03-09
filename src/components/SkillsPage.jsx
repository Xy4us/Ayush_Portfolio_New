import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  slideInFromInside,
  slideInFromLeft,
  slideInFromTop,
} from "../utils/motion.ts";
import { useInView } from "react-intersection-observer";
import TechnicalSkillsPage from "./TechnicalSkillsPage.jsx";
import CommunicationSkillsPage from "./CommunicationSkillsPage.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faCode } from "@fortawesome/free-solid-svg-icons";

const SkillsPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Change to false if you want to trigger every time it comes into view
  });

  const [showTechnicalSkills, setShowTechnicalSkills] = useState(true);

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
        className="custom-text-color font-custom2 font-semibold text-3xl p-2"
      >
        My Skills
      </motion.p>

      <div className="w-[45%] flex items-center justify-between">
        <motion.button
          className={`text-xl py-2 font-semibold tracking-wider leading-4 ${
            showTechnicalSkills ? "text-tertiary" : ""
          }`}
          onClick={() => setShowTechnicalSkills(true)}
          variants={slideInFromTop(1.5)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <FontAwesomeIcon icon={faCode} /> Technical Skills
        </motion.button>
        <motion.button
          className={`text-xl py-2 font-semibold tracking-wider leading-4 ${
            showTechnicalSkills ? "" : "text-tertiary"
          }`}
          onClick={() => setShowTechnicalSkills(false)}
          variants={slideInFromTop(1.5)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <FontAwesomeIcon icon={faComment} /> Communication Skills
        </motion.button>
      </div>
      <div className="w-full">
        {showTechnicalSkills ? (
          <TechnicalSkillsPage />
        ) : (
          <CommunicationSkillsPage />
        )}
      </div>
    </div>
  );
};

export default SkillsPage;
