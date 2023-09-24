import { Dictionary } from "~/interfaces";

const navbar = {
  home: "Inicio",
  about: "Sobre mí",
  projects: "Proyectos",
  experience: "Experiencia",
  contact: "Contacto",
  logo: "Elecciones Argentina",
  spanish: "Español",
  english: "Ingles",
  dark: "Oscuro",
  light: "Claro",
  color: "Color:",
  typography: "Tipografía:",
};

const home = {
  coming_soon: "Sitio en construcción",
  contact_link: "Hablar con soporte",
  home_title: "Mi portafolio",
  home_name: "César Herrera",
  home_subtitle: "Desarrollador frontend",
  home_button: "¡Hablemos!",
  home_button_slogan: "CLICK AQUÍ",
};

const footer = {
  author: "Sitio web realizado por",
};

const timeline = {
  functionality_soon:
    "Funcionalidad en construcción, vuelve a intentarlo más tarde",
  timeline_title: "Calendario electoral",
  source: "Fuente:",
};

const contact = {
  contact_title: "¿Tienes alguna pregunta o sugerencia?",
  contact_us: "Contáctame",
  copied_mail: "Correo electrónico copiado al portapapeles",
};

const projects = {
  projects_title: "Proyectos",
  projects_demo: "Despliegue",
  projects_code: "Repositorio",
  projects_info: "Información",
  projects_portfolio1: "",
  projects_portfolio2: "",
  projects_elecciones: "",
  projects_movie_place: "",
};

const experiences = {
  experiences_title: "Experiencias",
  experiences_stail:
    "Sitio web realizado durante el desarrollo del curso Desarrollo Web de Coderhouse.",
  experiences_mil_pelis:
    "Sitio web realizado durante el desarrollo del curso JavaScript de Coderhouse.",
  experiences_basics_store:
    "E-commerce realizado durante el desarrollo del curso React JS de Coderhouse.",
  experiences_mi_tienda:
    "E-commerce realizado durante el desarrollo del curso Programación Backend de Coderhouse.",
  experiences_ser_galgos:
    "Realización de sitio web con HTML, CSS y JavaScript Vanilla para Ser Galgos.",
  experiences_pcentrix:
    "Realización de landing page con HTML, SASS y JavaScript Vanilla para Pcentrix.",
  experiences_healthy: "",
};

const es: Dictionary = {
  ...navbar,
  ...home,
  ...timeline,
  ...footer,
  ...contact,
  ...projects,
  ...experiences,
};

export default es;
