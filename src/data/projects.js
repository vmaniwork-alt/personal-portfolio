import bulkmail from "../assets/projects/bulkmail.png";
import weatherImg from "../assets/projects/weather.png";
import netflixImg from "../assets/projects/netflix login.png";
import appleUI from "../assets/projects/apple ui.png";
import nostra from "../assets/projects/nostra.png";
import taskmanage  from "../assets/projects/taskmanage.png";


const projectsData = [
  {
    id: 1,
    image: bulkmail,
    title: "Bulkmail Sender",
    description:
    "A web app for sending bulk emails with a modern React interface and responsive design. Built using React and Tailwind CSS with backend email logic.",
  tech: ["React vite | TailwindCSS | API Axios | Nodejs | Expressjs | MongoDB | NodeMailer"],
    live: "https://bulkmail-weld.vercel.app/",
    github: "https://github.com/vmaniwork-alt/Bulkmail",
  },
 
   {
    id: 2,
    image: netflixImg,
    title: "Netflix Login Page",
   description:
    "A Netflix-style login page clone built with React and Tailwind CSS. It features a responsive design, clean UI, and interactive form elements that replicate the Netflix login experience.",
  tech: ["React | TailwindCSS | API Axios | Expressjs | Nodejs | MongoDB"],
    live: "https://frontend-netflix-login.vercel.app/",
    github: "https://github.com/vmaniwork-alt/Frontend-Netflix-login",
  },
   {
    id: 3,
    image: weatherImg,
    title: "Weather Info",
     description:
    "A responsive weather application that fetches real-time weather data from a public API and displays it with clean UI using React and Tailwind CSS.",
  tech: ["React vite | Tailwind CSS  | API Axios"],
    live: "https://weather-app-seven-tau-95.vercel.app/",
    github: "https://github.com/vmaniwork-alt/Weather-App",
  },
   {
    id: 4,
    image: taskmanage,
    title: "Taskmanager",
     description:
    "A task management web app built with React and Tailwind CSS that lets users add, view, edit, and delete tasks. It features user-friendly UI for organizing your daily to‑dos and boosting productivity.",
  tech: ["React vite | TailwindCSS | JavaScript"],
    live: "https://task-manager-app-ebon-nu.vercel.app/",
    github: "https://github.com/vmaniwork-alt/Task-manager-app",
  },
   {
    id: 5,
    image: appleUI,
    title: "Apple inspired Home Page",
    description:
    "A responsive clone of the Apple website UI built with modern frontend tools. The project replicates Apple’s clean layout and design elements, focusing on pixel‑perfect sections, smooth user experience, and responsive behavior across different screen sizes.",
  tech: ["React vite | Tailwind CSS |  | JavaScript"],
    live: "https://apple-clone-ui-website.vercel.app/",
    github: "https://github.com/vmaniwork-alt/Apple-clone-UI-website",
  },
   {
    id: 6,
    image: nostra,
    title: "Nostra E-commerce",
    description:
    "A responsive e‑commerce website UI built with modern frontend technologies. It features product sections, brand showcases, promotional offers, and newsletter signup, all with a clean and engaging shopping layout.",
  tech: ["HTML | Tailwind CSS | JavaScript"],
    live: "https://vmaniwork-alt.github.io/Nostra-project/",
    github: "https://github.com/vmaniwork-alt/Nostra-project",
},
];

export default projectsData;