import React from "react";
import SkillsPage from "./SkillsPage.jsx";

const Skills = () => {
  return (
    <div
      className=" w-full flex min-h-screen mt-5 flex-col items-center justify-start"
      id="skills"
    >
      <span className="w-1 min-h-16 bg-transparent">&nbsp;</span>
      <SkillsPage />
    </div>
  );
};

export default Skills;
