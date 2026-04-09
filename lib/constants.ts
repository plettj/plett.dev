import { isProd } from "./utils";

export const BASE_URL = isProd()
  ? "https://plett.dev"
  : "http://localhost:3000";

export const PATH_HOME = "/";
export const PATH_ABOUT = "/about";
export const PATH_WRITING = "/posts";
export const PATH_NOTES = "/notes";
export const PATH_PHOTOGRAPHY = "/photography";
export const PATH_PHOTOGRAPHY_IMAGES = "/images/photography";
export const PATH_RAYTRACING = "/raytracing";
export const PATH_RAYTRACING_IMAGES = "/images/raytracing";
export const PATH_CV = "/cv";
export const PATH_CV_STATIC = "/cv/Josiah_Plett_CV_2025.pdf";
export const PATH_PFP_LIGHT = "/images/home/Profile_Light.jpg";
export const PATH_PFP_DARK = "/images/home/Profile_Dark.jpg";
export const PATH_MAZE = "/maze";
export const PATH_MAZE_IMAGES = "/images/home";

export const URL_MY_OLD_SITE = "https://old.plett.dev";
export const URL_MY_LINKEDIN = "https://www.linkedin.com/in/josiahplett/";
export const URL_MY_GITHUB = "https://github.com/plettj";
export const URL_MY_GAMES = "https://plett.fun";
export const URL_WEBRING = `https://cs.uwatering.com/#${BASE_URL}`;

export const COPYRIGHT_STRING = `© ${new Date().getFullYear()} Josiah Plett`;

export const VISITOR_EXPIRATION = 60 * 60 * 24; // Visits are considered unique again after 24 hours.
export const FALLBACK_TOTAL_VISITORS = 18836;

export const META_TITLE_HOME = "Josiah Plett";
export const META_DESCRIPTION_HOME =
  "My personal website, covering my professional interests, hobbies, games, writing, and photography.";
export const META_DESCRIPTION_NOTES =
  "Josiah's university course notes. Distribute freely, with attribution.";
export const META_DESCRIPTION_PHOTOGRAPHY = "Some of my favourite photos.";
export const META_DESCRIPTION_RAYTRACING =
  "Josiah's page for all things graphics, including a fast relativistic raytracer.";
export const META_DESCRIPTION_MAZE =
  "My 4-dimensional maze, an original design you can download and build yourself.";

export const THEME_BACKGROUND = "#FFFFFF";
export const THEME_LIGHT_PRIMARY = "#1C1917";
export const THEME_LIGHT_MUTED = "#78716C";
export const THEME_DARK_PRIMARY = "#FAFAF9";
export const THEME_DARK_MUTED = "#A8A29E";
