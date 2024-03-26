import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  slideInFromInside,
  slideInFromLeft,
  slideInFromTop,
} from "../utils/motion.ts";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import EducationQualificationSection from "./EducationQualificationSection.jsx";
import TechnicalQualificationSection from "./TechnicalQualificationSection.jsx";

const QualificationPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Change to false if you want to trigger every time it comes into view
  });

  const [coding, setCoding] = useState(true);

  return (
    <div className="w-full h-full flex flex-col items-center" ref={ref}>
      <motion.h1
        className=" text-7xl font-bold text-primary p-2"
        variants={slideInFromInside(0.9)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        Qualification
      </motion.h1>
      <motion.p
        variants={slideInFromLeft(1.25)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-fifth font-custom2 font-semibold text-3xl p-2 "
      >
        My Qualifications
      </motion.p>
      <div className="w-[30%] mt-7 p-3 flex items-center justify-between">
        <motion.button
          className={`text-xl py-2 hover:text-tertiary font-semibold tracking-wider leading-4 duration-200 ease-linear ${
            coding ? "text-ninth " : ""
          }`}
          onClick={() => setCoding(true)}
          variants={slideInFromTop(1.5)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <FontAwesomeIcon icon={faCode} /> Technical
        </motion.button>
        <motion.button
          className={`text-xl py-2 font-semibold hover:text-tertiary tracking-wider leading-4 duration-200 ease-linear ${
            coding ? "" : "text-ninth "
          }`}
          onClick={() => setCoding(false)}
          variants={slideInFromTop(1.5)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <FontAwesomeIcon icon={faGraduationCap} /> Education
        </motion.button>
      </div>

      {coding ? (
        <TechnicalQualificationSection />
      ) : (
        <EducationQualificationSection />
      )}
    </div>
  );
};

export default QualificationPage;
