import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "../utils/motion.ts";
import { SparklesIcon } from "@heroicons/react/24/solid";
import StarsCanvas from "./StarBackground";
import BlackHole from "./BlackHole";
import NavBar from "./NavBar";
import Spline from "@splinetool/react-spline";

const Home = () => {
  return (
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   className="w-full min-h-screen"
    // >
    //   <motion.div variants={slideInFromTop}>
    //     <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 " />
    //     <h1 className="text-4xl font-bold">Welcome to your new app</h1>
    //   </motion.div>
    // </motion.div>

    <div className="flex flex-col">
      <NavBar />
      <StarsCanvas />
      {/* <div className="z-[30] absolute top-20 left-0">
        <Spline scene="https://prod.spline.design/LIY5q682aUCCvBJJ/scene.splinecode" />
      </div> */}
      <BlackHole />
    </div>
  );
};

export default Home;
