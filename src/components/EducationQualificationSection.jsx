import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { contentEducation } from "../utils/constants";
import "react-vertical-timeline-component/style.min.css";
import EducationCard from "./EducationCard";

const EducationQualificationSection = () => {
  return (
    <div className="w-[75%] flex flex-col mt-10 mx-auto">
      <div className="w-[90%] flex-col flex justify-start mx-auto gap-y-7">
        <VerticalTimeline lineColor="#dd524b">
          {contentEducation.map((item, index) => (
            <EducationCard
              key={index}
              logo={item.logo}
              name={item.name}
              education={item.education}
              date={item.date}
              alternate={index % 2 !== 0}
              points={item.points}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default EducationQualificationSection;
