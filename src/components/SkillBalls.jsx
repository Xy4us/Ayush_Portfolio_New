import React from "react";
import { Technologies } from "../utils/constants";
import Balls from "./Balls";

const SkillBalls = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10 w-[90%] mx-auto">
      {Technologies.map((item, index) => (
        <div key={index} className="w-28 h-28">
          <Balls icon={item.icon} />
        </div>
      ))}
    </div>
  );
};

export default SkillBalls;
