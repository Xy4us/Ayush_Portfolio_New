import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJava,
  faJs,
  faSquareGit,
  faUnity,
  faGoogle,
  faPython,
  faCss3,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import Bradford from "../utils/assets/Bradford.png";
import GlBajaj from "../utils/assets/GlBajaj.png";
// import CIcon from "@coreui/icons-react";
// import {
//   cibCsswizardry,
//   cibJavascript,
//   cibNintendoGamecube,
//   cibGit,
//   cibFramer,
//   cibReact,
//   cibRedux,
//   cibFirebase,
//   cibTypescript,
//   cibHtml5,
// } from "@coreui/icons";

const SliderFic = () => {
  const contentSkills = [
    { icon: faReact, heading: "React", details: "I'm very Good at React" },
    { icon: faJava, heading: "Java", details: "I'm very good at java" },
    {
      icon: faGoogle,
      heading: "Google Firebase",
      details: "I'm very good at FireBase",
    },
    {
      icon: faJs,
      heading: "JavaScript",
      details: "I'm very good at java",
    },
    { icon: faSquareGit, heading: "Git", details: "I'm very good at java" },
    {
      icon: faUnity,
      heading: "3-D Desigining",
      details: "I'm very good at java",
    },
    // { icon: cibRedux, heading: "Python", details: "I'm very good at java" },
    { icon: faCss3, heading: "CSS3", details: "I'm very good at CSS" },
    { icon: faHtml5, heading: "HTML5", details: "I'm very good at HTLM5" },
    // {
    //   icon: cibTypescript,
    //   heading: "TypeScript",
    //   details: "I'm very good at TypeScript",
    // },
  ];

  const contentEducation = [
    {
      logo: Bradford,
      Name: "Bradford International School",
      Education: "12th - (PCM)",
    },
    {
      logo: GlBajaj,
      Name: "GL Bajaj Institute of Technology and Management",
      Education: "B.Tech - Computer Science - Airtificial Intelligence",
    },
  ];

  return (
    <div className="w-[90%] p-2 px-4 flex justify-between items-center">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        direction="vertical"
        className="max-h-[120px] w-[40%] p-2 rounded-xl overflow-hidden shadow-custom-color"
      >
        {contentSkills.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-start justify-between p-2 px-3 "
          >
            <div className="flex gap-x-3 items-center justify-start">
              <FontAwesomeIcon
                icon={item.icon}
                className="text-[#9d59ef] text-3xl cursor-pointer font-extrabold"
              />
              <h1 className="text-2xl font-custom1 custom-text-color">
                {item.heading}
              </h1>
            </div>

            <div className="border-b-2 border-[#222326] py-2 text-tertiary font-medium font-custom2">
              {item.details}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        className="max-h-[120px] w-[40%] p-2 rounded-xl overflow-hidden shadow-custom-color"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        direction="vertical"
      >
        {contentEducation.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-start justify-between p-2 px-3 "
          >
            <div className="flex items-center justify-start gap-x-3">
              <img alt="" src={item.logo} height="30px" width="30px" />
              <h1 className="text-2xl font-custom1 custom-text-color">
                {item.Name}
              </h1>
            </div>

            <p className="font-medium text-tertiary font-custom2">
              {item.Education}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderFic;
