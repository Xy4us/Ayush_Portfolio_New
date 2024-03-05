import React from "react";
import BlackHoleSource from "../utils/assets/blackhole.webm";

const BlackHole = () => {
  return (
    <div className="w-full">
      <div className="z-[-40] flex items-center mx-auto w-[50%]">
        <video
          autoPlay
          muted
          loop
          className="rotate-180 z-[-40] bg-transparent w-full h-full object-cover scale-[0.65]"
        >
          <source src={BlackHoleSource} type="video/webm" />
        </video>
      </div>
    </div>
  );
};

export default BlackHole;
