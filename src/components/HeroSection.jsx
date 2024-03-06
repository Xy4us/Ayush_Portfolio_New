import { motion, useMotionValue } from "framer-motion";
import { slideInFromBottom } from "../utils/motion.ts";
import Ayush from "../utils/assets/Ayush.png";
import { ReactTyped } from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faDiscord,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react";
import SliderFic from "./SliderFic.jsx";
import { useInView } from "react-intersection-observer";

const HeroSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Change to false if you want to trigger every time it comes into view
  });

  const [isHovered, setIsHovered] = useState(false);
  const [rect, setRect] = useState({ width: 0, height: 0 }); // Add this line
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setRect(rect); // Add this line
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="w-full flex items-start justify-center">
      <div className="w-[75%] flex flex-col-reverse items-center justify-center gap-y-10">
        <SliderFic />
        <motion.div
          className="w-[90%] rounded-2xl flex flex-col items-center justify-between p-2 px-8 border-[0.5px] border-solid border-primary backdrop-blur-[3px]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            background: isHovered
              ? `radial-gradient(circle at ${mouseX.get()}px ${mouseY.get()}px, rgba(0, 251, 255, 0.451) 10%, rgba(255,255,255,0) 0%)`
              : "",
            transform: isHovered
              ? `perspective(300px) rotateY(${
                  (mouseX.get() / rect.width - 0.5) * 5
                }deg) rotateX(${(mouseY.get() / rect.height - 0.5) * 5}deg)`
              : "none",
            boxShadow: isHovered
              ? `${(mouseX.get() / rect.width - 0.5) * 20}px ${
                  (mouseY.get() / rect.height - 0.5) * 20
                }px 5px rgb(157, 89, 239)`
              : "none",
          }}
        >
          <motion.div
            className="w-full flex justify-between items-center"
            variants={slideInFromBottom(1.25)}
            ref={ref}
            initial="hidden"
            animate="visible"
          >
            <ul className="flex items-center justify-between flex-col-reverse gap-y-5">
              <li>
                <FontAwesomeIcon
                  className="text-[#bd5c7b] hover:text-black ease-in-out duration-150 text-xl cursor-pointer"
                  icon={faInstagram}
                />
              </li>
              <li>
                <FontAwesomeIcon
                  className="text-[#bd5c7b] text-xl hover:text-black ease-in-out duration-150 cursor-pointer"
                  icon={faDiscord}
                />
              </li>
              <li>
                <FontAwesomeIcon
                  className="text-[#bd5c7b] hover:text-black ease-in-out duration-150 text-xl cursor-pointer"
                  icon={faGithub}
                />
              </li>
              <li>
                <FontAwesomeIcon
                  className="text-[#bd5c7b] hover:text-black ease-in-out duration-150 text-xl cursor-pointer"
                  icon={faLinkedinIn}
                />
              </li>
            </ul>
            <img alt="Ayush" src={Ayush} height="400px" width="400px" />
            <div className="flex flex-col items-start justify-between gap-y-3 ">
              <p className="text-6xl font-bold cursor-default">
                Hi<span className="custom-text-color">!</span> I Am{" "}
                <span
                  style={{
                    transform: inView ? "none" : "translateX(-200px)",
                    opacity: inView ? 1 : 0,
                    transition: "all 7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                  }}
                  className="font-custom1 custom-text-color"
                >
                  Ayush Kumar
                </span>{" "}
              </p>
              <p className="text-3xl">
                I'm a{" "}
                <span className="cursor-default">
                  <ReactTyped
                    strings={[
                      "Full Stack Developer",
                      "Web Developer",
                      "UI-UX Developer",
                      "Backend Developer",
                      "3-D Model Designer",
                    ]}
                    typeSpeed={18}
                    backSpeed={30}
                    loop
                    className="text-3xl font-bold custom-text-color font-custom2"
                  />
                </span>{" "}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default React.memo(HeroSection);

// <Spline
// className=" w-full h-full"
// scene="https://prod.spline.design/uZlfzvIgOaMYiedx/scene.splinecode"
// />
