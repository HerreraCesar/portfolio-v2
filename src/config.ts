const github: string =
  import.meta.env.VITE_GITHUB_PROFILE ?? "https://github.com/HerreraCesar";
const linkedin: string =
  import.meta.env.VITE_LINKEDIN_PROFILE ??
  "https://www.linkedin.com/in/herrera-cesar";
const portfolio: string =
  import.meta.env.VITE_PORTFOLIO_URL ?? "https://herreracesar.com.ar";
const email: string =
  import.meta.env.VITE_EMAIL ?? "herrera.cesar.arg@gmail.com";

export const links = {
  github,
  linkedin,
  portfolio,
};

export const personal_data = {
  email,
};
