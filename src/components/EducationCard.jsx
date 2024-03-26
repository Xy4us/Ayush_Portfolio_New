import React, { useState } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const EducationCard = ({ date, name, education, points, logo }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#ffffff00",
        boxShadow: "1px 4px 4px 1px #9d59ef",
        borderRadius: "10px",
      }}
      contentArrowStyle={{ borderRight: "7.5px solid #9d59ef" }}
      date={date}
      iconStyle={{ background: logo, boxShadow: "0px 2px 2px 0px #9d59ef" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img alt="" src={logo} className="w-[60%] h-[60%] object-contain`" />
        </div>
      }
    >
      <h1 className="custom-text-color text-2xl font-custom1 font-semibold tracking-wider leading-4">
        {name}
      </h1>
      <p className="font-semibold ">{education}</p>
      {readMore ? null : (
        <button
          className="p-1 px-4 cursor-pointer shadow-custom-color rounded-md mt-2"
          onClick={() => setReadMore(true)}
        >
          {" "}
          Read More{" "}
        </button>
      )}
      {readMore && (
        <ul className="flex flex-col items-start p-2 gap-y-2">
          {points.map((point, index) => (
            <li key={index} className="font-semibold">
              {point}
            </li>
          ))}
          <button
            className="p-1 px-4 cursor-pointer shadow-custom-color rounded-md mt-2"
            onClick={() => setReadMore(false)}
          >
            {" "}
            Show less
          </button>
        </ul>
      )}
    </VerticalTimelineElement>
  );
};

export default EducationCard;
