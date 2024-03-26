import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "../utils/motion.ts";
import { useInView } from "react-intersection-observer";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const SkillsCard = ({ icon, percentage, name, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  return (
    <motion.div
      variants={slideInFromLeft(index * 0.45)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={ref}
      transition={{ delay: index * 0.5 }}
      className="w-[20%] flex flex-col gap-y-4"
    >
      <div className="w-full flex items-center justify-between px-4 hover:scale-105 duration-200 ease-in-out select-none">
        <FontAwesomeIcon
          icon={icon ? icon : faCode}
          className="text-fifth text-3xl font-extrabold"
        />
        <p>{name}</p>
        <p className="text-sm text-tertiary">{percentage}%</p>
      </div>

      <div className="w-full h-2 bg-primary relative rounded-lg">
        <div
          style={{ width: `${percentage}%` }}
          className="absolute left-0 top-0 h-2 bg-ninth rounded-lg"
        ></div>
      </div>
    </motion.div>
  );
};

export default SkillsCard;
