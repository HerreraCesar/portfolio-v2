import { Dictionary } from "~/interfaces";

const navbar = {
  home: "Inicio",
  about: "Sobre mí",
  projects: "Proyectos",
  experience: "Experiencia",
  contact: "Contacto",
  logo: "Elecciones Argentina",
  spanish: "Español",
  english: "Inglés",
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
  projects_portfolio1:
    "Primera versión de mi <strong>portfolio personal</strong> realizado en JS Vanilla.",
  projects_portfolio2:
    "Segunda versión de mi <strong>portfolio personal</strong> realizado con <strong>tecnologías modernas</strong>.",
  projects_elecciones:
    "Este <strong>proyecto personal</strong> fue desarrollado con el propósito de practicar <strong>nuevas tecnologías</strong> y brindar una herramienta que facilite comprender el extenso <strong>calendario electoral</strong>. En el futuro creo que sería enriquecedor incorporar novedades relacionadas con nuestra <strong>democracia</strong>, como la estructura de los distintos poderes del Estado y otros datos relevantes.",
  projects_movie_place:
    "Este <strong>proyecto personal</strong> se originó a partir de otro de mis intereses: el cine. Su idea central es ofrecer un recurso confiable para encontrar <strong>recomendaciones</strong> cuando no estás seguro de qué <strong>película</strong> ver.",
};

const experiences = {
  experiences_title: "Experiencias",
  experiences_stail:
    "<strong>Sitio web</strong> realizado durante el desarrollo del curso Desarrollo Web de <strong>Coderhouse</strong>.",
  experiences_mil_pelis:
    "<strong>Sitio web</strong> realizado durante el desarrollo del curso JavaScript de <strong>Coderhouse</strong>.",
  experiences_basics_store:
    "<strong>E-commerce</strong> realizado durante el desarrollo del curso React JS de <strong>Coderhouse</strong>.",
  experiences_mi_tienda:
    "<strong>E-commerce</strong> realizado durante el desarrollo del curso Programación Backend de <strong>Coderhouse</strong>.",
  experiences_ser_galgos:
    "Realización de <strong>sitio web</strong> para <strong>Ser Galgos</strong> como parte del programa <strong>Proyectos Reales</strong> de <strong>Coderhouse</strong>.",
  experiences_pcentrix:
    "Realización de <strong>landing page</strong> para <strong>Pcentrix</strong> como parte del programa <strong>Proyectos Reales</strong> de <strong>Coderhouse</strong>.",
  experiences_healthy:
    "<strong>Aplicación web</strong> realizada en equipo durante una simulación de entorno laboral en <strong>NoCountry</strong>.",
  experiences_digichanges:
    "Como <strong>Frontend Developer</strong> en <strong>Digichanges</strong>, he participado en el desarrollo de <strong>sitios web</strong> y <strong>aplicaciones móviles</strong> atractivas y funcionales, además de realizar <strong>revisiones de código</strong> para garantizar la calidad de nuestros proyectos. Trabajando bajo la metodología ágil <strong>Scrum</strong>, hemos logrado una colaboración efectiva en equipos diversos mientras que la modalidad remota fortaleció mis habilidades de <strong>gestión del tiempo</strong> y <strong>comunicación</strong>.",
};

const about = {
  about_title: "Sobre mí",
  about_name: "César Herrera",
  about_description:
    'Soy un <strong>desarrollador frontend</strong> al que le encanta <strong>resolver problemas</strong> de forma creativa con <strong>diseño</strong> y <strong>atención al detalle</strong>. Me caracterizan mi <strong>templanza</strong> y <strong>predisposición</strong> para ayudar a otros y <strong>trabajar en equipo</strong>. Entre mis pasiones se encuentran el cine, la estadística y la economía. Mi lema rector es <i>"Lo que no se mide no puede mejorarse"</i>.',
  about_resume: "Ver currículum",
  about_nationality: "Argentino",
  about_movie: "Jurassic Park",
  about_spanish: "Español nativo",
  about_english: "Inglés básico",
  about_drink: "Mate",
};

const es: Dictionary = {
  ...navbar,
  ...home,
  ...timeline,
  ...footer,
  ...contact,
  ...projects,
  ...experiences,
  ...about,
};

export default es;
