import nikeShoe from "../assets/nike shoe.png"
import landingPage from "../assets/landing-page.png"
import Portfolio from "../assets/portfolio.jpg"
import SnakeGame from "../assets/Snake.png"
import drawImage from "../assets/drawing.jpeg"

export const ProjectList = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with React and Tailwind CSS.",
   img : Portfolio,
    tech_stack: ["React", "Tailwind CSS", "Framer Motion"],
    github_url: "https://github.com/Maheen5532/portfolio",
    demo_url: "https://maheen5532.github.io/portfolio/",
  },
  {
    title: "Nike Shoe Website",
    description: "A full-stack e-commerce platform with Stripe payments integration.",
    img: nikeShoe,
    tech_stack: ["Next.js", "Tailwind CSS", "Stripe API"],
    github_url: "https://github.com/Maheen5532/Landing_page_nike",
    demo_url: "https://maheen5532.github.io/Landing_page_nike/",
  },
  {
    title: "Landing Page",
    description: "I learned how the slider work through HTML CSS without JavaScript.",
    img: landingPage,
    tech_stack: ["HTML", "CSS"],
    github_url: "",
    demo_url: "https://maheen5532.github.io/asiignment_2/",
  },
  {
    title: "Snake Games",
    description: "A snake game for the fun and fun  ",
    img: SnakeGame,
    tech_stack: ["React", "Tailwind CSS", "javascript"],
    github_url: "https://github.com/Maheen5532/snake-game",
    demo_url: "https://maheen5532.github.io/snake-game/",
  },
  {
    title: "Drawing Website",
    description: "A real-time drawing dashboard.",
    img : drawImage,
    tech_stack: ["Vue.js", "Tailwind CSS", "CoinGecko API"],
    github_url: "https://github.com/Maheen5532/Dawing_web",
    demo_url: "https://maheen5532.github.io/Dawing_web/",
  },
];

import ReactIcon from "../assets/react.png";
import TailwindIcon from "../assets/tailwind.png";
import JsIcon from "../assets/Javascript.png";
import { img } from "framer-motion/client"

export const stackList = [
  { name: "React", img: ReactIcon },
  { name: "Tailwind CSS", img: TailwindIcon },
  { name: "JavaScript", img: JsIcon },
];

