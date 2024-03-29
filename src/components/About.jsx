import { Tilt } from "react-tilt";
import AboutPage from "./AboutPage";
import robo2 from "../utils/assets/robo2.png";
import star1 from "../utils/assets/star1.png";

const About = () => {
  return (
    <div
      className=" w-full flex  flex-col items-center justify-start"
      id="about"
    >
      <Tilt className="w-[200px] h-[200px] absolute right-52 rounded-full">
        <img
          alt="image"
          src={robo2}
          loading="lazy"
          decoding="async"
          height="200"
          width="200"
          aria-hidden="true"
          className="image-animate rounded-full shadow-lg shadow-[#815ac0]/40 "
        />
      </Tilt>
      <Tilt className="absolute left-52 h-[140px] w-[140px]">
        <img
          alt="image"
          src={star1}
          loading="lazy"
          decoding="async"
          height="140"
          width="140"
          aria-hidden="true"
          className="image-animate rounded-full shadow-lg shadow-[#815ac0]/40 p-2"
        />
      </Tilt>
      <AboutPage />
    </div>
  );
};

export default About;
