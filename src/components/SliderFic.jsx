import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contentSkills } from "../utils/constants";
import { contentEducation } from "../utils/constants";

const SliderFic = () => {
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
        modules={[Autoplay]}
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
                className="text-fifth text-3xl cursor-pointer font-extrabold"
              />
              <h1 className="text-2xl font-custom1 text-primary">
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
        modules={[Autoplay]}
        direction="vertical"
      >
        {contentEducation.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-start justify-between p-2 px-3 "
          >
            <div className="flex items-center justify-start gap-x-3">
              <img alt="" src={item.logo} height="30px" width="30px" />
              <h1 className="text-2xl font-custom1 text-sixth">{item.name}</h1>
            </div>

            <p className="font-medium text-tertiary font-custom2">
              {item.education}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderFic;
