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
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Yosemite_Valley.jpg`,
    alt: "Half Dome overlooks the iconic valley of Yosemite National Park",
    location: "Yosemite Valley, USA",
    year: "2024",
    size: [3879, 2178],
  },
];

addBlurDataURLs();
