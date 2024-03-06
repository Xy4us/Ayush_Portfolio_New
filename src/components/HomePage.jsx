import React from "react";
import HeroSection from "./HeroSection";
import HeroSections from "./HeroSections";
import Spline from "@splinetool/react-spline";
import DesignSectoin from "./DesignSectoin";

const HomePage = () => {
  return (
    <div className="w-full h-full flex flex-col items-center " id="home">
      <div className="z-[30] w-[500px] h-[300px] rounded-full">
        <Spline
          className="rounded-full"
          scene="https://prod.spline.design/8TlLhbgxOdvwHNhw/scene.splinecode"
        />
      </div>

      <HeroSection />
      <DesignSectoin />
    </div>
  );
};

export default HomePage;
