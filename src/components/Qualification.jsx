import React from "react";
import { Tilt } from "react-tilt";
import robo1 from "../utils/assets/robo1.png";
import star2 from "../utils/assets/star2.png";
import QualificationPage from "./QualificationPage";

const Qualification = () => {
  return (
    <div
      className=" w-full flex min-h-screen  flex-col items-center justify-start"
      id="qualification"
    >
      <Tilt className="w-[140px] h-[140px] absolute right-52 rounded-full ">
        <img
          alt="image"
          src={star2}
          loading="lazy"
          decoding="async"
          height="140"
          width="140"
          aria-hidden="true"
          className="image-animate rotate-90 rounded-full shadow-lg shadow-[#815ac0]/40 p-2 "
        />
      </Tilt>
      <Tilt className="absolute left-52 h-[200px] w-[200px]">
        <img
          alt="image"
          src={robo1}
          loading="lazy"
          decoding="async"
          height="200"
          width="200"
          aria-hidden="true"
          className="image-animate rounded-full shadow-lg shadow-[#815ac0]/40 p-1"
        />
      </Tilt>
      <QualificationPage />
    </div>
  );
};

export default Qualification;
