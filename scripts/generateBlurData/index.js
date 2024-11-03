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
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Copenhagen_Grundtvigs_Church.jpg`,
    alt: "The pristine Grundtvig's Church in Copenhagen",
    location: "Copenhagen",
    year: "2024",
    size: [2268, 4032],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Lund_Cathedral.jpg`,
    alt: "All Saints Church in Lund, Sweden is absolutely stunning",
    location: "Lund",
    year: "2024",
    size: [1280, 717],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Danish_Architecture_Museum_Chairs.jpg`,
    alt: "A wall display of beautifully sculpted chairs at the Danish Architecture Museum",
    location: "Copenhagen",
    year: "2024",
    size: [3980, 2239],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Louisiana_Art_Museum_Sea_Prints.jpg`,
    alt: "Three plain prints of the sky and the sea sit silently on a dimly lit wall",
    location: "Louisiana Art Museum",
    year: "2024",
    size: [2233, 3971],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Orestad_Street.jpg`,
    alt: "A man-made river runs through residential Zealand lined with obedient rows of trees",
    location: "Ørestad",
    year: "2024",
    size: [2268, 4032],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Paris_Eiffel_Tower.jpg`,
    alt: "The nighttime Eiffel Tower decorated with the Olympic Rings",
    location: "Paris",
    year: "2024",
    size: [1134, 2048],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Australia_Hiding_Snails.jpg`,
    alt: "Hiding rock snails on an Australian beach",
    location: "Great Ocean Road",
    year: "2018",
    size: [1280, 995],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Australia_Beach_Shell.jpg`,
    alt: "The perfect shell on a perfect sandy beach in Australia",
    location: "Great Ocean Road",
    year: "2018",
    size: [1280, 1755],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Australia_Beach_Shells.jpg`,
    alt: "Untouched shells arranged in perfect order on an Australian beach",
    location: "Great Ocean Road",
    year: "2018",
    size: [1280, 1734],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Australia_Cafe.jpg`,
    alt: "A cozy hot chocolate in a cafe in Melbourne",
    location: "Melbourne",
    year: "2018",
    size: [1280, 1755],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Paris_Museum.jpg`,
    alt: "A marble woman in drapes relaxes under a clean quartz arch",
    location: "Paris",
    year: "2024",
    size: [805, 2048],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Vancouver_Museum_Dress.jpg`,
    alt: "A black dress at the modern fashion display in Vancouver stands alone",
    location: "Vancouver",
    year: "2023",
    size: [805, 2048],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Cube_Flying.jpg`,
    alt: "A Rubik's cube flying above ",
    location: "Victoria",
    year: "2020",
    size: [1280, 1107],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Copenhagen_Canal_Buildings.jpg`,
    alt: "Scenic architecture on the canal in Nyhavn, Copenhagen",
    location: "Copenhagen",
    year: "2024",
    size: [1280, 703],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Copenhagen_Opera_House_Restaurant.jpg`,
    alt: "Copenhagen's Opera House restaurant internal staircase garden",
    location: "Copenhagen",
    year: "2024",
    size: [2268, 4032],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Food_Japanese_Curry.jpg`,
    alt: "Japanese curry on rice, plated artistically",
    location: "Kitchener-Waterloo",
    year: "2023",
    size: [1280, 715],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Food_Moms_Baking.jpg`,
    alt: "Macro shot of macarons, almond melt-away cookies, and other baking",
    location: "Victoria",
    year: "2022",
    size: [1280, 544],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Paris_Protesting_Locks.jpg`,
    alt: "Padlocks from tourists accumulate like tumours on a Paris walkway",
    location: "Paris",
    year: "2024",
    size: [1153, 2004],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Frederiksborg_Tree.jpg`,
    alt: "A very wide tree stretches in front of a wall at Frederiksborg Castle",
    location: "Frederiksborg",
    year: "2024",
    size: [3746, 2114],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Harrison_Hot_Springs_Sunset.jpg`,
    alt: "A piercingly pink sky lights the steaming seagull-covered lakes at Harrison Hot Springs",
    location: "Harrison Hot Springs",
    year: "2019",
    size: [1280, 685],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Lyngby_DTU_Residence.jpg`,
    alt: "A residential building at Denmark Technical University stands vast over the rest of campus",
    location: "Lyngby",
    year: "2024",
    size: [1280, 713],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Food_Salmon.jpg`,
    alt: "Seasoned rice with a seared cut of salmon from the East coast",
    location: "Kitchener-Waterloo",
    year: "2023",
    size: [1280, 715],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/New_Zealand_Hobbit_Hills.jpg`,
    alt: "A dragon lantern stands over the original Hobbit Hills in New Zealand",
    location: "New Zealand",
    year: "2018",
    size: [1280, 1280],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Malmo_Intercity_Tree.jpg`,
    alt: "A tree hidden between buildings at the end of an alley in Malmö",
    location: "Malmö",
    year: "2024",
    size: [1151, 1754],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Malmo_Skyline.jpg`,
    alt: "The clean Malmö skyline from the central canal",
    location: "Copenhagen",
    year: "2024",
    size: [1280, 704],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Orestad_Residential_Building.jpg`,
    alt: "Peak Danish architecture is on display in rural Ørestad",
    location: "Ørestad",
    year: "2024",
    size: [4032, 2268],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Ottawa_Scaffolding.jpg`,
    alt: "The fire escape on the side of a decrepit building in Ottawa shows old meeting new",
    location: "Ottawa",
    year: "2023",
    size: [1280, 713],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Australia_Silhouetted_Tree.jpg`,
    alt: "Silhouetted tree on an Australian beach",
    location: "Great Ocean Road",
    year: "2018",
    size: [4032, 3024],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Australia_Tide_Plants.jpg`,
    alt: "Obscure macro of wobbling tidal plants on an Australian beach",
    location: "Auckland",
    year: "2018",
    size: [1280, 1010],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Ottawa_Street_House.jpg`,
    alt: "Traffic lights are attached to a grandfathered residence in Ottawa",
    location: "Ottawa",
    year: "2023",
    size: [1280, 712],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Paris_Louvre.jpg`,
    alt: "The iconic Louvre Pyramid from below",
    location: "Paris",
    year: "2024",
    size: [1280, 713],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/San_Francisco_Google.jpg`,
    alt: "Roofs converge at many angles at the Google Headquarters in San Francisco",
    location: "San Francisco",
    year: "2023",
    size: [1134, 2048],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Victoria_Street_Art.jpg`,
    alt: "A small abstract canvas in a run-down part of town brings a glimmer of hope",
    location: "Victoria",
    year: "2021",
    size: [1280, 2225],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/San_Francisco_Transcendence.jpg`,
    alt: "The Transcendence monument's dark surface reflects American high rises at midday",
    location: "San Francisco",
    year: "2023",
    size: [1280, 716],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/San_Francisco_UC_Berkeley_Residence.jpg`,
    alt: "A long residence sits atop a steep hill on University of California Berkeley campus",
    location: "San Francisco",
    year: "2024",
    size: [1134, 2048],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Victoria_Breakwater_Corrosion.jpg`,
    alt: "Corrosion on a drainage pipe at the Victoria Breakwater",
    location: "Victoria",
    year: "2017",
    size: [1280, 1007],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Victoria_Butchart_Gardens_Flower.jpg`,
    alt: "Macro of a perfect violet flower feeling small inside the largest garden in Canada",
    location: "Victoria",
    year: "2023",
    size: [1152, 946],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Victoria_Garden_Walkway.jpg`,
    alt: "A perfect garden walkway in downtown Victoria",
    location: "Victoria",
    year: "2023",
    size: [1280, 505],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Victoria_Hatley_Castle_Japanese_Black_Pine.jpg`,
    alt: "A trimmed Japanese Black Pine is center stage at Hatley Castle's Japanese gardens",
    location: "Victoria",
    year: "2023",
    size: [4032, 2268],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Malmo_Chameleon.jpg`,
    alt: "A chameleon looks us in the eye at the Malmö Natural History Museum",
    location: "Malmö",
    year: "2024",
    size: [1280, 685],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Victoria_Skytop_Macro.jpg`,
    alt: "Metal extrusions on a skyscraper in Victoria look out onto the city",
    location: "Victoria",
    year: "2017",
    size: [1280, 708],
  },
  {
    src: `${PATH_PHOTOGRAPHY_IMAGES}/Victoria_Sprout_On_Lake.jpg`,
    alt: "A sprouting plant hogs the view of Vancouver Island's many hills and lakes",
    location: "Victoria",
    year: "2020",
    size: [4032, 2268],
  },
];

addBlurDataURLs();
