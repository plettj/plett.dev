import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Converts an image URL into a small, dynamically blurred data URL.
 *
 * @returns The new `blurDataURL`.
 */
async function generateBlurDataURL(imagePath) {
  const buffer = await sharp(imagePath).resize(12).toBuffer();
  return `data:image/jpeg;base64,${buffer.toString("base64")}`;
}

async function addBlurDataURLs() {
  const updatedPhotos = [];

  for (const photo of photos) {
    const imagePath = path.join(
      __dirname,
      "../../public",
      photo.src.replace("public/", "")
    );

    try {
      const blurDataURL = await generateBlurDataURL(imagePath);
      updatedPhotos.push({
        ...photo,
        blurDataURL,
      });
    } catch (error) {
      console.error(`Failed to process ${photo.src}:`, error);
    }
  }

  console.log(
    "\nconst photos: MasonryImage[] =",
    JSON.stringify(updatedPhotos, null, 2)
  );
  console.log(`\n\n${photos.length} photos successfully processed.\n`);
  console.log(
    "You can now paste it into `app/(photography)/photography/content.tsx`.\n"
  );
}

const PATH_PHOTOGRAPHY_IMAGES = "/images/photography";

const photos = [
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Andermatt_City_Outlook.jpg`,
    alt: "A bright little valley city in the middle of the snow-smothered Swiss Alps.",
    location: "Andermatt, Switzerland",
    year: "2024",
    size: [3494, 1964],
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAHAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQF/8QAIBAAAQMEAgMAAAAAAAAAAAAAAQIDBAAFEiERMQYTgf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAXEQADAQAAAAAAAAAAAAAAAAAAAQIS/9oADAMBAAIRAxEAPwCy3eaSblIQu+yovqc2Ww2vIa6IAx+g1oyWLYH1ZuvJUd4oA4HOx2mlKWrYGEf/2Q==",
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Chur_Panorama_Train_View.jpg`,
    alt: "A quaint bridge over a little valley in the frosted mountain forests of central Switzerland.",
    location: "Chur, Switzerland",
    year: "2024",
    size: [3658, 2191],
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAHAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUG/8QAIRAAAQMEAgMBAAAAAAAAAAAAAQIDEQAEBhIFITFBUZH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERQVH/2gAMAwEAAhEDEQA/AJWF49zToed4jlbi0ebTKxvAJImBH52PVax7JMrBSDfshQGqtxqZHR6SCPI+0pSK9CieH//Z",
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Zermatt_Matterhorn.jpg`,
    alt: "The iconic Matterhorn mountain peak, standing alone in the clouds.",
    location: "Zermatt, Switzerland",
    year: "2024",
    size: [4032, 1371],
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAEAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAYH/8QAHhAAAgICAgMAAAAAAAAAAAAAAQIAAwQFEVESITH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwDaLthk26+ktaQ1ihiR9BPUkK9tksbBYUcq5XyI9njviIlEBX//2Q==",
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Zurich_ETH_Staircase.jpg`,
    alt: "A little spiral of history in the heart of ETH Zürich University campus.",
    location: "Zürich, Switzerland",
    year: "2024",
    size: [2186, 2186],
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAMAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgQH/8QAIxAAAQQBAwQDAAAAAAAAAAAAAQIDBBEhAAUGEhMjMUFh4f/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAYEQEAAwEAAAAAAAAAAAAAAAABABESAv/aAAwDAQACEQMRAD8ApbgMuOS5u5dtTbKAt5T6iVKJyKr1+jGsu5vucOfySS9txDMSkhtDj60kYF4Fj3elPKXVbrAZekEpX2wPGSnFnBzn186BBa4w6GVdIJJNpBs2ReR9aF5w0MW9E//Z",
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Zurich_Skyline.jpg`,
    alt: "The Zürich cityscape, with its iconic church spires and vast mountain backdrop.",
    location: "Zürich, Switzerland",
    year: "2024",
    size: [2106, 3742],
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAVAAwDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAcCBAUI/8QAJBAAAgEDAwMFAAAAAAAAAAAAAQIDAAQFERIhBhNhBzFBUXH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAGhEBAAIDAQAAAAAAAAAAAAAAAQARAgNRIf/aAAwDAQACEQMRAD8A6Ykugo1NRF+tJy56+zEYkN1j7aLssHbtyiQeEPsQT+VQf1JyDbXVGAYa6JEGA8U1Y9he8i3xmNN50vPkY5zBJE2yQIOZND966jnn5rIGRu4UTs3Vyiuu7aJTxRRQalVGNmUFT//Z",
  },
];

addBlurDataURLs();
