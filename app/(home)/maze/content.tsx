import { MasonryImage } from "@/components/layouts/MasonryLayout";
import { PATH_MAZE_IMAGES } from "@/lib/constants";

const templateImages: MasonryImage[] = [
  {
    src: `${PATH_MAZE_IMAGES}/4D_Maze_A.jpg`,
    alt: "Section A of 4D Maze",
    location: "Section A",
    year: "2021",
    size: [5100, 6600],
  },
  {
    src: `${PATH_MAZE_IMAGES}/4D_Maze_B.jpg`,
    alt: "Section B of 4D Maze",
    location: "Section B",
    year: "2021",
    size: [5100, 6600],
  },
  {
    src: `${PATH_MAZE_IMAGES}/4D_Maze_C.jpg`,
    alt: "Section C of 4D Maze",
    location: "Section C",
    year: "2021",
    size: [5100, 6600],
  },
  {
    src: `${PATH_MAZE_IMAGES}/4D_Maze_D.jpg`,
    alt: "Section D of 4D Maze",
    location: "Section D",
    year: "2021",
    size: [5100, 6600],
  },
];

const photo: MasonryImage = {
  src: `${PATH_MAZE_IMAGES}/4D_Maze_Photo.jpg`,
  alt: "Photo of assembled 4D Maze",
  location: "4D Maze",
  year: "2021",
  size: [986, 986],
};

export { templateImages, photo };
