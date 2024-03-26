import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { technicalQualifications } from "../utils/constants";
import TechnicalCard from "./TechnicalCard";

const TechnicalQualificationSection = () => {
  return (
    <div className="w-[75%] flex flex-col mt-10 mx-auto">
      <div className="w-[90%] flex-col flex justify-start mx-auto gap-y-7">
        <VerticalTimeline lineColor="#00ff3c61">
          {technicalQualifications.map((item, index) => (
            <TechnicalCard
              key={index}
              name={item.name}
              desc={item.desc}
              points={item.points}
              logo={item.logo}
              date={item.date}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default TechnicalQualificationSection;
