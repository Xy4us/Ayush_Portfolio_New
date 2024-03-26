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
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";
import Bradford from "../utils/assets/Bradford.png";
import GlBajaj from "../utils/assets/GlBajaj.png";
import Infant from "../utils/assets/Infant.png";

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
  "3-D Designing,",
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
    name: "Bradford International School",
    education: "11 & 12th - (PCM)",
    date: "04/2020 - 04/2020",
    points: [
      "I took admission in this junior college in 2020",
      "I took PCM as my subjects",
      "I scored 80% in my 12th board exams",
      "I scored 85% in my 11th board exams",
    ],
  },
  {
    logo: GlBajaj,
    name: "GL Bajaj Institute of Technology and Management",
    education: "B.Tech - Computer Science - Airtificial Intelligence",
    date: "11/2022 - Present",
    points: [
      "I took admission in this college in 2022",
      "I took Computer Science as my branch",
      "I am currently studying Airtificial Intelligence",
      "I am currently in my 2nd year",
    ],
  },
  {
    logo: Infant,
    name: "Infant Jesus' School",
    education: "10th",
    date: "04/2019 - 04/2020",
    points: [
      "I took admission in this school in 2019",
      "I scored 90% in my 10th board exams",
      "I was the class topper in my 10th board exams",
      "I was the class topper in my 9th board exams",
    ],
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
    percentage: 95,
  },
  {
    icon: faGithub,
    name: "GitHub",
    percentage: 99,
  },
  {
    icon: faFigma,
    name: "Figma",
    percentage: 70,
  },
  {
    icon: null,
    name: "Netlify",
    percentage: 99,
  },
  {
    icon: faNpm,
    name: "Npm",
    percentage: 99,
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
  {
    icon: faGitlab,
    name: "Git Lab",
    percentage: 75,
  },
];

export const technicalQualifications = [
  {
    logo: images[5],
    name: "Java",
    points: [
      "I have been learning Java since 2021",
      "I have made many projects in Java",
      "I have made many games in Java",
      "I have made many applications in Java",
    ],
    date: "2021 - Present",
    desc: "Java is a high-level, object-oriented programming language known for its platform independence and robustness.",
  },
  {
    logo: images[1],
    name: "C",
    points: [
      "I have been learning C since 2020",
      "I have made many projects in C",
      "I have made many games in C",
      "I have made many applications in C",
    ],
    date: "2020 - Present",
    desc: "C is a general-purpose, procedural computer programming language supporting structured programming.",
  },
  {
    logo: images[2],
    name: "C++",
    points: [
      "I have been learning C++ since 2020",
      "I have made many projects in C++",
      "I have made many games in C++",
      "I have made many applications in C++",
    ],
    date: "2020 - Present",
    desc: "C++ is a general-purpose programming language created as an extension of the C programming language.",
  },
  {
    logo: images[8],
    name: "HTML5",
    points: [
      "I have been learning HTML5 since 2019",
      "I have made many projects in HTML5",
      "I have made many games in HTML5",
      "I have made many applications in HTML5",
    ],
    date: "2019 - Present",
    desc: "HTML5 is a markup language used for structuring and presenting content on the World Wide Web.",
  },
  {
    logo: images[3],
    name: "CSS3",
    points: [
      "I have been learning CSS3 since 2019",
      "I have made many projects in CSS3",
      "I have made many games in CSS3",
      "I have made many applications in CSS3",
    ],
    date: "2019 - Present",
    desc: "CSS3 is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.",
  },
  {
    logo: images[15],
    name: "Tailwind CSS",
    points: [
      "I have been learning Tailwind CSS since 2021",
      "I have made many projects in Tailwind CSS",
      "I have made many games in Tailwind CSS",
      "I have made many applications in Tailwind CSS",
    ],
    date: "2021 - Present",
    desc: "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.",
  },
  {
    logo: images[10],
    name: "JavaScript",
    points: [
      "I have been learning JavaScript since 2020",
      "I have made many projects in JavaScript",
      "I have made many games in JavaScript",
      "I have made many applications in JavaScript",
    ],
    date: "2020 - Present",
    desc: "JavaScript is a programming language that conforms to the ECMAScript specification.",
  },
  {
    logo: images[13],
    name: "React Js",
    points: [
      "I have been learning React Js since 2020",
      "I have made many projects in React Js",
      "I have made many games in React Js",
      "I have made many applications in React Js",
    ],
    date: "2020 - Present",
    desc: "React is an open-source, front end, JavaScript library for building user interfaces or UI components.",
  },
  {
    logo: images[14],
    name: "Redux Js",
    points: [
      "I have been learning Redux Js since 2021",
      "I have made many projects in Redux Js",
      "I have made many games in Redux Js",
      "I have made many applications in Redux Js",
    ],
    date: "2021 - Present",
    desc: "Redux is an open-source JavaScript library for managing application state.",
  },
];

export const AUTH_TOKEN = "nfp_zaQQUZSG8h1wN4EXbVUF6SuFuo2atkcn9b8b";
