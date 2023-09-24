import { Dictionary } from "~/interfaces";

const navbar = {
  home: "Home",
  about: "About me",
  projects: "Projects",
  experience: "Experience",
  contact: "Contact",
  logo: "Argentine Elections",
  spanish: "Spanish",
  english: "English",
  dark: "Dark",
  light: "Light",
  color: "Color:",
  typography: "Typography:",
};

const home = {
  coming_soon: "Site under construction",
  contact_link: "Talk to support",
  home_title: "My portfolio",
  home_name: "César Herrera",
  home_subtitle: "Frontend developer",
  home_button: "Let's talk!",
  home_button_slogan: "CLICK HERE",
};

const footer = {
  author: "Website made by",
};

const timeline = {
  functionality_soon: "Functionality in construction, try again later",
  timeline_title: "Electoral schedule",
  source: "Source:",
};

const contact = {
  contact_title: "Do you have a question or suggestion?",
  contact_us: "Contact me",
  copied_mail: "E-mail copied to clipboard",
};

const projects = {
  projects_title: "Projects",
  projects_demo: "Deployment",
  projects_code: "Repository",
  projects_info: "Information",
  projects_portfolio1: "",
  projects_portfolio2: "",
  projects_elecciones: "",
  projects_movie_place: "",
};

const experiences = {
  experiences_title: "Experiences",
  experiences_stail:
    "Website made during the development of the Coderhouse Web Development course.",
  experiences_mil_pelis:
    "Website made during the development of the Coderhouse JavaScript course.",
  experiences_basics_store:
    "E-commerce made during the development of the Coderhouse React JS course.",
  experiences_mi_tienda:
    "E-commerce made during the development of the Coderhouse Backend Programming course.",
  experiences_ser_galgos:
    "Realization of website with HTML, CSS and JavaScript Vanilla for Ser Galgos.",
  experiences_pcentrix:
    "Realization of landing page with HTML, SASS and JavaScript Vanilla for Pcentrix.",
  experiences_healthy: "",
};

const en: Dictionary = {
  ...navbar,
  ...home,
  ...timeline,
  ...footer,
  ...contact,
  ...projects,
  ...experiences,
};

export default en;
