import nodejs from "../assets/images/nodejs-icon.svg";
import express from "../assets/images/express-icon.svg";
import postgresql from "../assets/images/postgresql-icon.svg";
import react from "../assets/images/react-icon.svg";
import figma from "../assets/images/figma-icon.svg";
import inkscape from "../assets/images/inkscape-icon.svg";
import git from "../assets/images/git-icon.svg";
import jest from "../assets/images/jest-icon.svg";
import socketIO from "../assets/images/socketio-icon.svg";
import prisma from "../assets/images/prisma-icon.svg";
import nextJS from "../assets/images/nextjs-icon.svg";
import tailwindCSS from "../assets/images/tailwindcss-icon.svg";
import supabase from "../assets/images/supabase-icon.svg";
import javascript from "../assets/images/javascript-icon.svg";
import typescript from "../assets/images/typescript-icon.svg";
import github from "../assets/images/github-black-icon.svg";
import octoconvoThumbnail from "../assets/images/octoconvo-thumbnail.png";
import jyronueThumbnail from "../assets/images/jyronue-thumbnail-1.png";
import battleshipThumbnail from "../assets/images/battleship-thumbnail-1.png";
import live from "../assets/images/live-icon.svg";

const skills = {
  socketIO: {
    name: "Socket.IO",
    icon: socketIO,
  },
  supabase: {
    name: "Supabase",
    icon: supabase,
  },
  nodeJS: {
    name: "Node.JS",
    icon: nodejs,
  },
  express: {
    name: "Express",
    icon: express,
  },
  postgreSQL: {
    name: "PostgreSQL",
    icon: postgresql,
  },
  prisma: {
    name: "Prisma",
    icon: prisma,
  },
  react: {
    name: "React",
    icon: react,
  },
  nextJS: {
    name: "Next.JS",
    icon: nextJS,
  },
  tailwindCSS: {
    name: "Tailwind.CSS",
    icon: tailwindCSS,
  },
  jest: {
    name: "Jest",
    icon: jest,
  },
  figma: {
    name: "Figma",
    icon: figma,
  },
  inkscape: {
    name: "Inkscape",
    icon: inkscape,
  },
  git: {
    name: "Git",
    icon: git,
  },
  javascript: {
    name: "Javascript",
    icon: javascript,
  },
  typescript: {
    name: "Typescript",
    icon: typescript,
  },
};

const projects = [
  {
    heading: "Octoconvo",
    description:
      "A social chatting web application with minimalistic playful design" +
      " where users can hang out and chat with their friends. Octoconvo is" +
      " built using Socket.IO for real time messages, community creation," +
      " and users connectivity with friend system.",
    features: [
      "User authentication, create account and login.",
      "Community creation, search, update, and deletion",
      "Real-time profile update.",
      "Real-time messages.",
      "Share images.",
    ],
    thumbnail: octoconvoThumbnail,
    stack: [
      skills.typescript,
      skills.socketIO,
      skills.supabase,
      skills.nodeJS,
      skills.express,
      skills.postgreSQL,
      skills.prisma,
      skills.react,
      skills.nextJS,
      skills.tailwindCSS,
      skills.jest,
      skills.figma,
      skills.inkscape,
      skills.git,
    ],
    colour: "#440099",
    links: [
      { name: "Live", url: "", icon: "" },
      {
        name: "Github",
        url: "https://github.com/Adhisafdhol/octoconvo",
        icon: github,
      },
      { name: "Case Study", url: "", icon: "" },
    ],
  },
  {
    heading: "Jyronue",
    description:
      "A ful-stack image-sharing social media application with modern minimalistic responsive design.",
    features: [
      "User authentication, create account and login.",
      "Create posts, comments, like posts, like comments, and follow other users.",
      "Personalized feed that shows your followed users.",
      "Explore latest posts on explore page.",
      "Share images in a post up to ten images a post.",
    ],
    thumbnail: jyronueThumbnail,
    stack: [
      skills.javascript,
      skills.typescript,
      skills.supabase,
      skills.nodeJS,
      skills.express,
      skills.postgreSQL,
      skills.prisma,
      skills.react,
      skills.jest,
      skills.figma,
      skills.inkscape,
      skills.git,
    ],
    colour: "#51B7E6",
    links: [
      { name: "Live", url: "", icon: "" },
      {
        name: "Frontend",
        url: "https://github.com/Adhisafdhol/jyronue",
        icon: github,
      },
      {
        name: "Backend",
        url: "https://github.com/Adhisafdhol/jyronue-backend",
        icon: github,
      },
      { name: "Case Study", url: "", icon: "" },
    ],
  },
  {
    heading: "Battleship",
    description:
      "Battleship is a web game application created fully with vanilla Javascript." +
      "It is developed with TDD architecture.",
    features: [
      "Play against AI.",
      "Drag and drop API implementation to let players place their ships.",
      "Double click to rotate the ships.",
    ],
    thumbnail: battleshipThumbnail,
    stack: [skills.javascript, skills.git],
    colour: "#E71A1A",
    links: [
      {
        name: "Live",
        url: "https://adhisafdhol.github.io/battleship/",
        icon: live,
      },
      {
        name: "Github",
        url: "https://github.com/Adhisafdhol/battleship",
        icon: github,
      },
      { name: "Case Study", url: "", icon: "" },
    ],
  },
];

export default projects;
