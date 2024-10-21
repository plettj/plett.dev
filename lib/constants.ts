export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://plett.dev"
    : "http://localhost:3000";

export const URL_HOME = "/";
export const URL_WRITING = "/posts";
export const URL_PHOTOGRAPHY = "/photography";
export const URL_MEDIA = "/media";
export const URL_CV = "/cv";
