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
  faC,
  faCss3Alt,
  faNode,
  faFoursquare,
  faGitAlt,
  faGithub,
  faFigma,
  faNpm,
  faSquareGooglePlus,
} from "@fortawesome/free-brands-svg-icons";
import Bradford from "../utils/assets/Bradford.png";
import GlBajaj from "../utils/assets/GlBajaj.png";

const importAll = (r) => {
  return r.keys().map(r);
};

const images = importAll(
  require.context("./assets/Tech", false, /\.(png|jpe?g|svg)$/)
);

export const Technologies = [
  {
    icon: images[0],
  },
  {
    icon: images[1],
  },
  {
    icon: images[2],
  },
  {
    icon: images[3],
  },
  {
    icon: images[4],
  },
  {
    icon: images[5],
  },
  {
    icon: images[6],
  },
  {
    icon: images[7],
  },
  {
    icon: images[8],
  },
  {
    icon: images[9],
  },
  {
    icon: images[10],
  },
  {
    icon: images[11],
  },
];

export const Skills = [
  "React,",
  "Firebase,",
  "3-D Modeling,",
  "Three js,",
  "Redux,",
  "Java,",
  "Framer Motion,",
  "Tailwind CSS,",
  "Material-UI,",
  "C++,",
  "C.",
];

export const contentSkills = [
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

export const contentEducation = [
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

export const codingLanguages = [
  {
    icon: faJava,
    name: "Java",
    percentage: 70,
  },
  {
    icon: faJs,
    name: "JavaScript",
    percentage: 95,
  },
  {
    icon: faPython,
    name: "Python",
    percentage: 75,
  },
  {
    icon: faC,
    name: "C/C++",
    percentage: 90,
  },
  {
    icon: faCss3Alt,
    name: "CSS3",
    percentage: 99,
  },
  {
    icon: faHtml5,
    name: "HTML5",
    percentage: 99,
  },
];

export const libraries = [
  {
    icon: faReact,
    name: "React Js",
    percentage: 95,
  },
  {
    icon: null,
    name: "Redux Js",
    percentage: 95,
  },
  {
    icon: faNode,
    name: "Node Js",
    percentage: 50,
  },
  {
    icon: null,
    name: "Tailwind Css",
    percentage: 99,
  },
  {
    icon: null,
    name: "Next Js",
    percentage: 50,
  },
  {
    icon: null,
    name: "MongoDB",
    percentage: 40,
  },
  {
    icon: faJs,
    name: "Three Js",
    percentage: 80,
  },
  {
    icon: faFoursquare,
    name: "Framer Js",
    percentage: 80,
  },
];

export const tools = [
  {
    icon: faGitAlt,
    name: "Git",
    percentage: 90,
  },
  {
    icon: faGithub,
    name: "GitHub",
    percentage: 99,
  },
  {
    icon: faFigma,
    name: "Figma",
    percentage: 60,
  },
  {
    icon: null,
    name: "Netlify",
    percentage: 99,
  },
  {
    icon: faNpm,
    name: "Npm",
    percentage: 90,
  },
  {
    icon: faSquareGooglePlus,
    name: "Google Firebase",
    percentage: 75,
  },
  {
    icon: null,
    name: "Spline 3-D",
    percentage: 75,
  },
  {
    icon: null,
    name: "Blender",
    percentage: 40,
  },
  {
    icon: null,
    name: "VS Code",
    percentage: 99,
  },
  {
    icon: null,
    name: "SketchFab",
    percentage: 60,
  },
];
