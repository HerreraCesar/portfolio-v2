import { logos } from "~/assets/icons";
import { images } from "~/assets/images";

export const translations = [
  "WELCOME",
  "BIENVENIDO",
  "BEM-VINDO",
  "BENVENUTO",
  "BIENVENUE",
  "WILLKOMMEN",
];

export const INITIAL_LANGUAGE = "en";

export const INITIAL_THEME = "dark";

export const INITIAL_COLOR = "#5e28ed";

export const INITIAL_TYPOGRAPHY = "Bricolage Grotesque";

export const projects = [
  {
    title: "Portfolio V2",
    background: images.portfolio2,
    url: "https://herreracesar.com.ar/",
    repository: "https://github.com/HerreraCesar/portfolio-v2",
    stack: [
      "solid-start",
      "sass",
      "vite",
      "typescript",
      "pnpm",
      "git",
      "github",
      "vercel",
    ],
    description: "projects_portfolio2",
  },
  {
    title: "Elecciones Argentina",
    background: images.eleccionesargentina,
    url: "https://elecciones-argentina.vercel.app/",
    repository: "https://github.com/HerreraCesar/elecciones-argentina",
    stack: [
      "solid-start",
      "sass",
      "vite",
      "typescript",
      "pnpm",
      "strapi",
      "git",
      "github",
      "vercel",
    ],
    description: "projects_elecciones",
  },
  {
    title: "The Movie Place",
    background: images.themovieplace,
    url: "https://themovieplace.com.ar/",
    repository: "https://github.com/HerreraCesar/the-movie-place-front",
    stack: [
      "react",
      "redux",
      "sass",
      "motion",
      "typescript",
      "vite",
      "axios",
      "apollo",
      "graphql",
      "node",
      "yarn",
      "express",
      "mongo",
      "jwt",
      "git",
      "github",
      "netlify",
    ],
    description: "projects_movie_place",
  },
  {
    title: "Portfolio V1",
    background: images.portfolio1,
    url: "https://herreracesar.netlify.app/",
    repository: "https://github.com/HerreraCesar/portfolio",
    stack: ["html", "css", "javascript", "git", "github", "netlify", "gitlab"],
    description: "projects_portfolio1",
  },
  {
    title: "Portfolio V2",
    background: images.portfolio2,
    url: "https://herreracesar.com.ar/",
    repository: "https://github.com/HerreraCesar/portfolio-v2",
    stack: [
      "solid-start",
      "sass",
      "vite",
      "typescript",
      "pnpm",
      "git",
      "github",
      "vercel",
    ],
    description: "projects_portfolio2",
  },
  {
    title: "Elecciones Argentina",
    background: images.eleccionesargentina,
    url: "https://elecciones-argentina.vercel.app/",
    repository: "https://github.com/HerreraCesar/elecciones-argentina",
    stack: [
      "solid-start",
      "sass",
      "vite",
      "typescript",
      "pnpm",
      "strapi",
      "git",
      "github",
      "vercel",
    ],
    description: "projects_elecciones",
  },
  {
    title: "The Movie Place",
    background: images.themovieplace,
    url: "https://themovieplace.com.ar/",
    repository: "https://github.com/HerreraCesar/the-movie-place-front",
    stack: [
      "react",
      "redux",
      "sass",
      "motion",
      "typescript",
      "vite",
      "axios",
      "apollo",
      "graphql",
      "node",
      "yarn",
      "express",
      "mongo",
      "jwt",
      "git",
      "github",
      "netlify",
    ],
    description: "projects_movie_place",
  },
  {
    title: "Portfolio V1",
    background: images.portfolio1,
    url: "https://herreracesar.netlify.app/",
    repository: "https://github.com/HerreraCesar/portfolio",
    stack: ["html", "css", "javascript", "git", "github", "netlify"],
    description: "projects_portfolio1",
  },
];

export const experiences = [
  {
    title: "Stail Iluminación",
    background: images.staililuminacion,
    url: "https://stail.netlify.app/",
    repository: "https://github.com/HerreraCesar/lighting-store",
    stack: ["html", "css", "git"],
    description: "experiences_stail",
  },
  {
    title: "1000 Pelis",
    background: images.milpelis,
    url: "https://milpelis.netlify.app/",
    repository: "https://github.com/HerreraCesar/movies-website",
    stack: ["html", "sass", "javascript", "git"],
    description: "experiences_mil_pelis",
  },
  {
    title: "Basics Store",
    background: images.basicsstore,
    url: "https://basics-store.netlify.app/",
    repository: "https://github.com/HerreraCesar/basics-store",
    stack: ["react", "sass", "git", "firebase", "photoshop"],
    description: "experiences_basics_store",
  },
  {
    title: "Mi tienda",
    background: images.mitienda,
    url: "https://ecommerce-mitienda.netlify.app/",
    repository: "https://github.com/HerreraCesar/ecommerce-front",
    stack: ["react", "sass", "node", "mongo", "express", "git"],
    description: "experiences_mi_tienda",
  },
  {
    title: "Ser Galgos",
    background: images.sergalgos,
    url: "https://sergalgos.netlify.app/",
    repository: "https://github.com/HerreraCesar/ser-galgos",
    stack: ["html", "css", "javascript", "git"],
    description: "experiences_ser_galgos",
  },
  {
    title: "Pcentrix",
    background: images.pcentrix,
    url: "https://pcentrix.netlify.app/",
    repository: "https://github.com/HerreraCesar/pcentrix",
    stack: ["html", "sass", "javascript", "git"],
    description: "experiences_pcentrix",
  },
  {
    title: "Healthy Life",
    background: images.healthylife,
    url: "https://healthy-life-front.vercel.app/",
    repository: "https://github.com/HerreraCesar/healthy-life",
    stack: ["react"],
    description: "experiences_healthy",
  },
];

export const technologies = [
  {
    id: "solid-start",
    name: "Solid Start",
    icon: logos.solid,
    url: "https://start.solidjs.com/",
  },
  {
    id: "sass",
    name: "Sass",
    icon: logos.sass,
    url: "https://sass-lang.com/",
  },
  {
    id: "vercel",
    name: "Vercel",
    icon: logos.vercel,
    url: "https://vercel.com/",
  },
  {
    id: "strapi",
    name: "Strapi",
    icon: logos.strapi,
    url: "https://strapi.io/",
  },
  {
    id: "react",
    name: "React",
    icon: logos.react,
    url: "https://react.dev/",
  },
  {
    id: "react-native",
    name: "React Native",
    icon: logos.react,
    url: "https://reactnative.dev/",
  },
  {
    id: "flutter",
    name: "Flutter",
    icon: logos.flutter,
    url: "https://flutter.dev/",
  },
  {
    id: "graphql",
    name: "GraphQL",
    icon: logos.graphql,
    url: "https://graphql.org/",
  },
  {
    id: "netlify",
    name: "Netlify",
    icon: logos.netlify,
    url: "https://www.netlify.com/",
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: logos.javascript,
    url: "https://developer.mozilla.org/es/docs/Web/JavaScript",
  },
  {
    id: "css",
    name: "CSS",
    icon: logos.css,
    url: "https://developer.mozilla.org/es/docs/Web/CSS",
  },
  {
    id: "html",
    name: "HTML",
    icon: logos.html,
    url: "https://developer.mozilla.org/es/docs/Web/HTML",
  },
  {
    id: "git",
    name: "Git",
    icon: logos.git,
    url: "https://git-scm.com/",
  },
  {
    id: "express",
    name: "Express",
    icon: logos.express,
    url: "https://expressjs.com/",
  },
  {
    id: "node",
    name: "Node.js",
    icon: logos.node,
    url: "https://nodejs.org/",
  },
  {
    id: "mongo",
    name: "MongoDB",
    icon: logos.mongo,
    url: "https://www.mongodb.com/",
  },
  {
    id: "firebase",
    name: "Firebase",
    icon: logos.firebase,
    url: "https://firebase.google.com/",
  },
  {
    id: "photoshop",
    name: "Photoshop",
    icon: logos.photoshop,
    url: "https://www.adobe.com/products/photoshop.html",
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: logos.typescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    id: "axios",
    name: "Axios",
    icon: logos.axios,
    url: "https://axios-http.com/",
  },
  {
    id: "vite",
    name: "Vite",
    icon: logos.vite,
    url: "https://vitejs.dev/",
  },
  {
    id: "jwt",
    name: "JSON Web Tokens",
    icon: logos.jwt,
    url: "https://jwt.io/",
  },
  {
    id: "pnpm",
    name: "pnpm",
    icon: logos.pnpm,
    url: "https://pnpm.io/",
  },
  {
    id: "postman",
    name: "Postman",
    icon: logos.postman,
    url: "https://www.postman.com/",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: logos.tailwind,
    url: "https://tailwindcss.com/",
  },
  {
    id: "github",
    name: "GitHub",
    icon: logos.github,
    url: "https://github.com/",
  },
  {
    id: "motion",
    name: "Framer Motion",
    icon: logos.motion,
    url: "https://www.framer.com/motion/",
  },
  {
    id: "yarn",
    name: "Yarn",
    icon: logos.yarn,
    url: "https://yarnpkg.com/",
  },
  {
    id: "apollo",
    name: "Apollo",
    icon: logos.apollo,
    url: "https://new.apollographql.com/",
  },
  {
    id: "redux",
    name: "Redux",
    icon: logos.redux,
    url: "https://redux.js.org/",
  },
  {
    id: "gitlab",
    name: "GitLab",
    icon: logos.gitlab,
    url: "https://about.gitlab.com/",
  },
];
