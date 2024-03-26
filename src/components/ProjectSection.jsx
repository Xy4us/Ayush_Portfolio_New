import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";
import { slideInFromBottom } from "../utils/motion.ts";

const ProjectSection = () => {
  const projects = useSelector((state) => state.projects.projects);
  console.log(projects);

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const [hovered, setHovered] = useState(false);

  const [formattedName, setFormattedName] = useState("");

  useEffect(() => {
    if (projects) {
      const newFormattedNames = projects.map((project) => {
        let nameWithoutDashes = project.name.replace(/-/g, " ");
        nameWithoutDashes = nameWithoutDashes.replace(/by ayush/i, "");
        const nameCapitalized = nameWithoutDashes.toUpperCase();
        return nameCapitalized;
      });
      setFormattedName(newFormattedNames);
    }
  }, [projects]);
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[75%] flex items-center justify-center">
        <div className="w-[90%] mx-auto">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
          >
            {projects &&
              projects.map((item, index) => (
                <SwiperSlide
                  className="w-full h-full group"
                  key={index}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <img
                    alt=""
                    src={item.screenshot_url}
                    className="z-[-10] w-full bg-cover opacity-75 duration-200 ease-linear   bg-no-repeat  h-[500px] object-cover rounded-xl group-hover:opacity-50 "
                  />
                  <motion.div
                    className="z-[10] absolute bg-gradient-to-b from-black/35 top-[30%] p-3 w-full "
                    initial="hidden"
                    animate={hovered ? "visible" : "hidden"}
                    variants={slideInFromBottom(0.35)}
                  >
                    <h1 className="opacity-0 ease-in-out duration-200  group-hover:opacity-100  text-seventh text-5xl font-bold font-custom1 ">
                      {formattedName[index]}
                    </h1>
                  </motion.div>
                </SwiperSlide>
              ))}
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
