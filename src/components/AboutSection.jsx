import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../utils/motion.ts";
import { useInView } from "react-intersection-observer";
import { Tilt } from "react-tilt";
import Ayush2 from "../utils/assets/Ayush2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  const skills = [
    "React,",
    "Firebase,",
    "3-D Modeling,",
    "Three js,",
    "Redux,",
    "Java,",
    "Framer Motion,",
    "Tailwind CSS,",
    "Material-UI,",
    "C++,",
    "C.",
  ];

  return (
    <div className="w-full flex items-center justify-center mt-20 flex-col gap-y-12">
      <div className="w-[65%] flex items-center justify-start">
        <motion.div
          variants={slideInFromLeft(1.9)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
          className="w-[50%] flex items-center justify-center"
        >
          <Tilt className="bg-gradient-to-br from-blue-500 to-green-500 h-[370px] w-[500] rounded-lg">
            <img alt="" className="w-full h-full" src={Ayush2} />
          </Tilt>
        </motion.div>
        <motion.div
          className="w-[50%] items-center justify-start flex flex-col h-full py-5 px-3 gap-y-3 text-xl text-justify"
          variants={slideInFromRight(2.2)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <p>
            {" "}
            Hello! I'm <span className=" custom-text-color">
              Ayush Kumar
            </span> a{" "}
            <span className=" text-tertiary">
              {new Date().getFullYear() - new Date("2004-01-13").getFullYear()}
            </span>
            -year-old CSE undergrad. I'm a skilled software developer with
            experience in{" "}
            {skills.map((item, index) => (
              <span key={index} className="text-tertiary">
                {" "}
                {item}{" "}
              </span>
            ))}
          </p>
          <p className="text-base">
            {" "}
            I'm quick learner and make sure to create efficient, scalable, and
            user-friendly solutions that solves real-world problems. I'm
            passionate about learning new technologies and frameworks and I'm
            always looking for new opportunities to learn and grow.
          </p>
          <p className="text-base">
            I'm also interested in open-source and have contributed to various
            projects. I'm also a competitive programmer and have a good
            understanding of data structures and algorithms and I'm always
            looking for new opportunities to learn and grow.
          </p>
        </motion.div>
      </div>
      <div className="cursor-pointer p-4 px-7 hover:scale-110 font-semibold duration-200 ease-in-out rounded-lg bg-transparent shadow-custom-color flex items-center gap-x-2">
        {" "}
        Resume
        <FontAwesomeIcon icon={faFileArrowDown} />
      </div>
    </div>
  );
};

export default AboutSection;
