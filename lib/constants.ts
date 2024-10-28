import { inProd } from "./utils";

export const BASE_URL = inProd()
  ? "https://plett.dev"
  : "http://localhost:3000";

export const URL_HOME = "/";
export const URL_ABOUT = "/about";
export const URL_WRITING = "/posts";
export const URL_PHOTOGRAPHY = "/photography";
export const URL_CV = "/cv";

export const COPYRIGHT_STRING = `Copyright ${new Date().getFullYear()} © Josiah Plett`;

export const FALLBACK_TOTAL_VISITORS = 37; // NOTE: Old website had 1080 views as of 2024-10-28.
