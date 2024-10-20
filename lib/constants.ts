export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://plett.dev"
    : "http://localhost:3000";

export const URL_HOME = "/";
export const URL_GAMES = "/games";
export const URL_WRITING = "/writing";
export const URL_PHOTOGRAPHY = "/photography";
export const URL_MEDIA = "/media";
export const URL_MISC = "/misc";
export const URL_LISTS = "/lists";
export const URL_CV = "/cv";

export const URL_TITLES_FROM_HREF: { [key: string]: string } = {
  [URL_HOME]: "Home",
  [URL_GAMES]: "Games",
  [URL_WRITING]: "Writing",
  [URL_PHOTOGRAPHY]: "Photography",
  [URL_MEDIA]: "Media",
  [URL_MISC]: "Miscellaneous",
  [URL_LISTS]: "Lists",
  [URL_CV]: "Resume",
};
