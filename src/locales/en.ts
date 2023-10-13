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
  projects_portfolio1:
    "First version of my <strong>personal portfolio</strong> created in Vanilla JS.",
  projects_portfolio2:
    "Second version of my <strong>personal portfolio</strong> created with <strong>modern technologies</strong>.",
  projects_elecciones:
    "This <strong>personal project</strong> was developed with the purpose of practicing <strong>new technologies</strong> and providing a tool that facilitates the understanding of the extensive <strong>electoral calendar</strong>. In the future, I believe it would be enriching to incorporate new features related to our <strong>democracy</strong>, such as the structure of the different branches of government and other relevant data.",
  projects_movie_place:
    "This <strong>personal project</strong> originated from another one of my interests: cinema. Its central idea is to provide a reliable resource for finding <strong>recommendations</strong> when you're unsure about which <strong>movie</strong> to watch.",
};

const experiences = {
  experiences_title: "Experiences",
  experiences_stail:
    "<strong>Website</strong> made during the development of the <strong>Coderhouse</strong> Web Development course.",
  experiences_mil_pelis:
    "<strong>Website</strong> made during the development of the <strong>Coderhouse</strong> JavaScript course.",
  experiences_basics_store:
    "<strong>E-commerce</strong> made during the development of the <strong>Coderhouse</strong> React JS course.",
  experiences_mi_tienda:
    "<strong>E-commerce</strong> made during the development of the <strong>Coderhouse</strong> Backend Programming course.",
  experiences_ser_galgos:
    "Creation of a <strong>website</strong> for <strong>Ser Galgos</strong> as part of the <strong>Real Projects</strong> program at <strong>Coderhouse</strong>.",
  experiences_pcentrix:
    "Creation of a <strong>landing page</strong> for <strong>Pcentrix</strong> as part of the <strong>Real Projects</strong> program at <strong>Coderhouse</strong>.",
  experiences_healthy:
    "<strong>Web app</strong> developed as a team during a workplace simulation at <strong>NoCountry</strong>.",
  experiences_digichanges:
    "As a <strong>Frontend Developer</strong> at <strong>Digichanges</strong>, I have been involved in the development of attractive and functional <strong>websites</strong> and <strong>mobile applications</strong>, as well as conducting <strong>code reviews</strong> to ensure the quality of our projects. Working under the agile <strong>Scrum</strong> methodology, we have achieved effective collaboration in diverse teams, and the remote mode has strengthened my <strong>time management</strong> and <strong>communication</strong> skills.",
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
