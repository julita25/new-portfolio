//logos
import figma from "../images/figma.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import react from "../images/react.jpg";
import next from "../images/nextjs.png";
import html from "../images/html.png"
import webflow from "../images/webflow.png"
import redux from "../images/redux.png"

//project covers
import analyticsWebsite from "../images/analytics-website.png";
import groceryStore from "../images/grocery-store.png";
import personalityTest from "../images/personality-website.png";
import recipeFinder from "../images/recipe-finder-website.png";
import shoppingCart from "../images/shopping-cart.png"
import searchFlights from "../images/flights-website.png"

//react icons
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const NavBarContent = [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
]


export const SkillsContent=  [
    {
      name: "Javascript",
      logo: javascript
    },
    {
      name: "React js",
      logo: react
    },
     {
      name: "Redux",
      logo: redux
    },
    {
      name: "Next js",
      logo: next
    },
    {
      name: "Figma",
      logo: figma
    },
    {
      name: "Webflow",
      logo: webflow
    },
    {
      name: "HTML",
      logo: html
    },
    {
      name: "CSS",
      logo: css
    },
  ]

export const ProjectContent = [
    {
    title: "Search flights website",
    img: searchFlights,
    tags: ["React.js", "Material UI"],
    txt: "This website connects with Sky Scrapper api so that you can query prices for real-time flights. You can also add filters to get the cheapest price, choose the cabin class, add number of passengers, etc!",
    link: "https://find-flights-website-dazl.vercel.app/"
  },
  {
    title: "Recipe finder",
    img: recipeFinder,
    tags: ["Next.js", "Rsuite", "Tailwind.css"],
    txt: "Search your favorite recipe, filter them by diet or set only for gluten free ones!. Click on details to check their nutrional value, ingredients.",
    link: "https://recipes-website-2.vercel.app/"
  },
  {
    title: "Online grocery store",
    img: groceryStore,
    tags: ["Next.js", "Redux", "Rsuite", "Tailwind.css"],
    txt: "Check my website simulator of an online grocery store. Add, delete products once your ready checkout!",
    link: "https://onlinegrocerystore.vercel.app/"
  },
  {
    title: "Company analytics website",
    img: analyticsWebsite,
    tags: ["Next.js", "Recharts.js", "Rsuite", "Tailwind.css"],
    txt: "This app uses recharts.js to display charts with mocked data about company sales, number of items sold etc. Apply filters to view the data by week or by month.",
    link: "https://yourcompanyanalytics.vercel.app/"
  },
  {
    title: "Personality test",
    img: personalityTest,
    tags: ["Next.js", "Rsuite", "Tailwind.css"],
    txt: "Answer four simple questions and get to know if you are more of an introvert or an extrovert",
    link: "https://personality-test-theta.vercel.app/"
  },
  {
    title: "Shopping cart app with Typescript",
    img: shoppingCart,
    tags: ["React", "Typescript", "Bootstrap", "React Context"],
    txt: "Simple app that calculates the price of items added to the shopping bag. Add, remove, increase or decrease the quantities of the item. Uses local storage.",
    link: "https://shopping-cart-typescript-smoky.vercel.app/"
  }
];

export const TestimonialsContent = [
  {
    review: "Juliette's quick intellect and thirst for self-improvement make her an outstanding employee. I always could rely on her to meet the deadlines and exceed our expectations",
    name: "Nicolo Manica, CEO uDroppy"
  },
  {
    review: "Working with Juliette has been an extraordinary experience. Her commitment to the team and the project has always been extraordinary. She never backs off when there is need to go for the extra mile to get tasks done",
    name: "Asdullah Siddique, CTO uDroppy"
  },
  {
    review: "Juliette really shines in her passion about engineering and willingness to learn. She is a quick-learner and is always motivated to be a better and better engineer!",
    name: "Dinny Peter, CTO Starlings Solutions"
  }
];
