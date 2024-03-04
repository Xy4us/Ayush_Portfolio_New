import React from "react";
import BlackHoleSource from "../utils/assets/blackhole.webm";

const BlackHole = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="z-[-40] mx-auto absolute top-28 justify-center w-[50%] h-[600px]">
        <video
          autoPlay
          muted
          loop
          className="rotate-180 z-[-40] bg-transparent w-full h-full object-cover"
        >
          <source src={BlackHoleSource} type="video/webm" />
        </video>
      </div>
    </div>
  );
};

export default BlackHole;
