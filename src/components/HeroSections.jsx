// import { motion, useAnimation, useInView, useMotionValue } from "framer-motion";
// import { slideInFromLeft, slideInFromTop } from "../utils/motion.ts";
// import Ayush from "../utils/assets/Ayush.png";
// import { ReactTyped } from "react-typed";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faInstagram,
//   faGithub,
//   faDiscord,
//   faLinkedinIn,
//   faReact,
// } from "@fortawesome/free-brands-svg-icons";
// import { useEffect, useRef, useState } from "react";

// const HeroSections = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: false });

//   const [isHovered, setIsHovered] = useState(false);
//   const [rect, setRect] = useState({ width: 0, height: 0 }); // Add this line
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const handleMouseMove = (event) => {
//     const rect = event.currentTarget.getBoundingClientRect();
//     setRect(rect); // Add this line
//     const x = (event.clientX - rect.left) / rect.width;
//     const y = (event.clientY - rect.top) / rect.height;
//     mouseX.set(event.clientX - rect.left);
//     mouseY.set(event.clientY - rect.top);
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   const content = [
//     { icon: faReact, details: "I am very Good at React" },
//     { icon: faReact, details: "I am very Good at React" },
//     { icon: faReact, details: "I am very Good at React" },
//     { icon: faReact, details: "I am very Good at React" },
//   ]; // Replace with your content
//   const duplicatedContent = [...content, ...content]; // Duplicate the content
//   const controls = useAnimation();

//   useEffect(() => {
//     const cycleAnimation = async () => {
//       await controls.start({
//         y: "-100%",
//         transition: { duration: 3, ease: "linear" },
//       });
//       controls.set({ y: "0%" });
//       cycleAnimation();
//     };
//     cycleAnimation();
//   }, [controls]);
//   // Duplicate the content
//   // Replace with your content

//   return (
//     <div className="card w-full flex items-start justify-center" ref={ref}>
//       <motion.div
//         className="w-[90%] yourComponentClass rounded-xl flex items-center justify-between"
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         variants={slideInFromLeft(0.25)}
//         initial="hidden"
//         animate="visible"
//         style={{
//           backgroundPosition: isHovered
//             ? `${mouseX.get()}px ${mouseY.get()}px`
//             : "center",
//           transformOrigin: "center",
//           transform: isHovered
//             ? `perspective(300px) rotateY(${
//                 (mouseX.get() / rect.width - 0.5) * 3
//               }deg) rotateX(${(mouseY.get() / rect.height - 0.5) * 3}deg)`
//             : "none",
//           background: isHovered
//             ? "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)"
//             : "",
//           boxShadow: isHovered
//             ? "0 0 0 1px rgba(0, 0, 0, 0.05), 0 3px 6px 0 rgba(0, 0, 0, 0.1)"
//             : "",
//           transition: "all 0.2s ease-in-out",
//         }}
//       >
//         <motion.div
//           className="w-full flex justify-evenly items-center"
//           variants={slideInFromTop(0.25)}
//           initial="hidden"
//           animate="visible"
//         >
//           <ul className="flex items-center justify-between flex-col-reverse gap-y-5">
//             <li>
//               <FontAwesomeIcon
//                 className="text-[#bd5c7b] text-xl cursor-pointer"
//                 icon={faInstagram}
//               />
//             </li>
//             <li>
//               <FontAwesomeIcon
//                 className="text-[#bd5c7b] text-xl cursor-pointer"
//                 icon={faDiscord}
//               />
//             </li>
//             <li>
//               <FontAwesomeIcon
//                 className="text-[#bd5c7b] text-xl cursor-pointer"
//                 icon={faGithub}
//               />
//             </li>
//             <li>
//               <FontAwesomeIcon
//                 className="text-[#bd5c7b] text-xl cursor-pointer"
//                 icon={faLinkedinIn}
//               />
//             </li>
//           </ul>
//           <img alt="Ayush" src={Ayush} height="150px" width="150px" />
//           <div className="flex flex-col items-start justify-between gap-y-3 ">
//             <p className="text-6xl font-bold">
//               Hi<span className="custom-text-color">!</span> I Am{" "}
//               <span
//                 style={{
//                   transform: isInView ? "none" : "translateX(-200px)",
//                   opacity: isInView ? 1 : 0,
//                   transition: "all 7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
//                 }}
//                 className="font-custom1 custom-text-color"
//               >
//                 Ayush Kumar
//               </span>{" "}
//             </p>
//             <p className="text-3xl">
//               I'm a{" "}
//               <span>
//                 <ReactTyped
//                   strings={[
//                     "Full Stack Developer",
//                     "Web Developer",
//                     "UI-UX Developer",
//                     "Backend Developer",
//                     "3-D Model Designer",
//                   ]}
//                   typeSpeed={18}
//                   backSpeed={30}
//                   loop
//                   className="text-3xl font-bold custom-text-color font-custom2"
//                 />
//               </span>{" "}
//             </p>
//           </div>
//         </motion.div>

//         <motion.div
//           className="flex flex-col items-center justify-center w-full "
//           animate={controls}
//         >
//           {duplicatedContent.map((item, index) => (
//             <div key={index} className="flex flex-col">
//               <div className="p-3">
//                 <FontAwesomeIcon icon={item.icon} />
//               </div>
//               <p>{item.details}</p>
//             </div>
//           ))}
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default HeroSections;
