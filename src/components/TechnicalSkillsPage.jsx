import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideInFromRight } from "../utils/motion.ts";
import SkillsCard from "./SkillsCard.jsx";
import { codingLanguages, libraries, tools } from "../utils/constants.jsx";

const TechnicalSkillsPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Change to false if you want to trigger every time it comes into view
  });

  return (
    <div className="w-[75%] flex flex-col mt-10 mx-auto">
      <div
        className="w-[90%] flex-col flex justify-start mx-auto gap-y-7"
        ref={ref}
      >
        <motion.div
          variants={slideInFromRight(1.35)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="p-2 py-3 px-3 leading-3 tracking-wider gap-y-3 text-3xl font-bold flex flex-col items-start text-justify justify-between select-none "
        >
          Languages
          <p className="text-sm font-extralight text-[#a19fac]">
            Languages that I have learned over the years
          </p>
        </motion.div>

        <div className="w-full rounded-xl shadow-custom-color min-h-7 flex flex-wrap justify-center gap-8 py-6">
          {codingLanguages.map((item, index) => (
            <SkillsCard
              icon={item.icon}
              percentage={item.percentage}
              name={item.name}
              index={index}
              key={index}
            />
          ))}
        </div>

        <motion.div
          variants={slideInFromRight(1.35)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="p-2 py-3 px-3 leading-3 tracking-wider gap-y-3 text-3xl font-bold flex flex-col items-start text-justify justify-between select-none "
        >
          Libraries & Frameworks
          <p className="text-[#a19fac] text-sm font-extralight">
            Libraries and Frameworks that I prefer to work with
          </p>
        </motion.div>

        <div className="w-full rounded-xl shadow-custom-color min-h-7 flex flex-wrap justify-center gap-8 py-6">
          {libraries.map((item, index) => (
            <SkillsCard
              icon={item.icon}
              percentage={item.percentage}
              name={item.name}
              index={index}
              key={index}
            />
          ))}
        </div>

        <motion.div
          variants={slideInFromRight(1.35)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="p-2 py-3 px-3 leading-3 tracking-wider gap-y-3 text-3xl font-bold flex flex-col items-start text-justify justify-between select-none "
        >
          Tools
          <p className="text-[#a19fac] text-sm font-extralight">
            Tools that I know and use on a daily basis
          </p>
        </motion.div>

        <div className="w-full rounded-xl shadow-custom-color min-h-7 flex flex-wrap justify-center gap-8 py-6">
          {tools.map((item, index) => (
            <SkillsCard
              icon={item.icon}
              percentage={item.percentage}
              name={item.name}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkillsPage;
