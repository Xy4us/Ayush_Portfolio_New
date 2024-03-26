import { motion, useMotionValue } from "framer-motion";
import { slideInFromInside } from "../utils/motion.ts";
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
          className="w-[90%] rounded-3xl flex flex-col items-center justify-between p-2 px-8 hover:border-none  border-b-2 border-sixth ease-linear"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            background: isHovered
              ? `radial-gradient(circle at ${mouseX.get()}px ${mouseY.get()}px, rgb(222, 201, 233) 4%, rgba(255,255,255,0) 0%)`
              : "",
            transform: isHovered
              ? `perspective(300px) rotateY(${
                  (mouseX.get() / rect.width - 0.5) * 5
                }deg) rotateX(${(mouseY.get() / rect.height - 0.5) * 5}deg)`
              : "none",
            boxShadow: isHovered
              ? `${(mouseX.get() / rect.width - 0.5) * 9}px ${
                  (mouseY.get() / rect.height - 0.5) * 9
                }px 5px rgb(160, 108, 213)`
              : "none",
          }}
        >
          <motion.div
            className="w-full flex justify-between items-center"
            variants={slideInFromInside(0.5)}
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <ul className="flex items-center justify-between flex-col-reverse gap-y-5">
              <li>
                <a
                  href="http://www.instagram.com/xy4us"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="text-fifth hover:text-tenth ease-in-out duration-150 text-2xl cursor-pointer"
                    icon={faInstagram}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com/users/xy4us"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="text-fifth text-2xl hover:text-tenth  ease-in-out duration-150 cursor-pointer"
                    icon={faDiscord}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Xy4us"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="text-fifth hover:text-tenth  ease-in-out duration-150 text-2xl cursor-pointer"
                    icon={faGithub}
                  />
                </a>
              </li>
              <li>
                <a
                  href="www.linkedin.com/in/ayush-kumar-xy4us"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="text-fifth hover:text-tenth ease-in-out duration-150 text-2xl cursor-pointer"
                    icon={faLinkedinIn}
                  />
                </a>
              </li>
              {/* <li>
                <a
                  href="mailto:sanbhutnik@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="text-fifth hover:text-tenth  ease-in-out duration-150 text-2xl cursor-pointer"
                    icon={faSquareEnvelope}
                  />
                </a>
              </li> */}
            </ul>
            <img alt="Ayush" src={Ayush} height="400px" width="400px" />
            <div className="flex flex-col items-start justify-between gap-y-3 ">
              <p className="text-6xl font-bold cursor-default">
                Hi<span className="text-fifth">!</span> I Am{" "}
                <span
                  style={{
                    transform: inView ? "none" : "translateX(-200px)",
                    opacity: inView ? 1 : 0,
                    transition: "all 7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                  }}
                  className="font-custom1 text-fifth"
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
                    className="text-3xl font-bold text-fifth font-custom2"
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
