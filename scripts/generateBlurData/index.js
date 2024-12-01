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
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Sigriswil_Panorama_Bridge.jpg`,
    alt: "The extremely fogged Sigriswil Panorama Bridge from the show Crash Landing on You in Interlaken, Switzerland",
    location: "Sigriswil, Switzerland",
    year: "2024",
    size: [2268, 4032],
  },

  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Alsace_Haut-Koenigsbourg_Castle.jpg`,
    alt: "A hilltop view above the fog of the sprawling French hills from Haut-Koenigsbourg Castle in Alsace",
    location: "Alsace, France",
    year: "2024",
    size: [2863, 1606],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Lauterbrunnen_Jungfrau_Peak_View.jpg`,
    alt: "Snow-capped peaks, viewed from the top of Jungfrau in the Swiss Alps at Lauterbrunnen",
    location: "Lauterbrunnen, Switzerland",
    year: "2024",
    size: [4032, 2268],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Lauterbrunnen_Valley_Fog.jpg`,
    alt: "The Lauterbrunnen Valley with sun-kissed fog in the Swiss Alps",
    location: "Lauterbrunnen, Switzerland",
    year: "2024",
    size: [2268, 3376],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Ribeauville_Alley.jpg`,
    alt: "A mild but posh residential alleyway in Ribeauvillé, Alsace",
    location: "Ribeauvillé, France",
    year: "2024",
    size: [2268, 3818],
  },
];

addBlurDataURLs();
