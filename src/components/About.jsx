import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideInFromBottom, slideInFromRight } from "../utils/motion.ts";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Change to false if you want to trigger every time it comes into view
  });

  return (
    <div className="mt-20 w-full flex flex-col items-center justify-center">
      <motion.h1
        className="font-serif text-6xl font-bold text-primary p-2"
        variants={slideInFromRight(0.5)}
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        About
      </motion.h1>
      <motion.p
        variants={slideInFromBottom(0.5)}
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="custom-text-color font-custom2 font-semibold text-2xl p-2 "
      >
        My Introduction
      </motion.p>
      <div className="flex w-[90%] flex-col">
        <motion.div className="w-[50%]"></motion.div>
      </div>
    </div>
  );
};

export default About;
