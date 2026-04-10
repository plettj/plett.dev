import { ChapterData, TOCData } from "@/components/common/book/bookTypes";
import { PATH_RAYTRACING_IMAGES } from "@/lib/constants";

export const raytracingTOC: TOCData[] = [
  {
    title: "Raytracing in a Nutshell",
    hash: "in-a-nutshell",
  },
  {
    title: "A Working Raytracer",
    hash: "core-features",
    children: [
      {
        title: "Rays and the Camera",
        hash: "rays-and-camera",
      },
      {
        title: "Intersecting with Things",
        hash: "intersecting", // Should include depth testing
      },
      {
        title: "Lighting Things Up",
        hash: "phong-illumination",
      },
      {
        title: "Casting Shadows",
        hash: "shadows",
      },
    ],
  },
  {
    title: "More Basic Features",
    hash: "basics",
    children: [], // Supersampling, environment maps, multithreading, DOF
  },
  {
    title: "Intermediate Features",
    hash: "intermediate",
    children: [], // BVH, texture mapping, reflection and transmission, path tracing
  },
  {
    title: "Rendering a Black Hole",
    hash: "relativistic-raytracing",
    children: [], // Ray marching, newtonian curves, euler stepping, general relativity curves, RK4 stepping, adaptive step sizes, perlin noise, alpha intersections
  },
  {
    title: "Other Topics in Raytracing",
    hash: "other-topics",
    children: [], // Hierarchical modeling, animation, working with blender, cloud compute
  },
];

export const raytracingBook: ChapterData[] = [
  {
    title: "Raytracing in a Nutshell",
    hash: "in-a-nutshell",
    content: (
      <>
        <p>Paragraph 1 test.</p>
        <p>Paragraph 2 test.</p>
        <code lang="cpp">Code block test</code>
      </>
    ),
    images: [
      {
        src: `${PATH_RAYTRACING_IMAGES}/test2.png`,
        alt: "A hilltop view above the fog of the sprawling French hills from Haut-Koenigsbourg Castle in Alsace",
        location: "Shadows",
        year: "16 samples",
        size: [4096, 2304],
      },
    ],
  },
  {
    title: "A Working Raytracer",
    hash: "core-features",
    content: (
      <>
        <p>
          Talking about a working raytracer. This is a longer sentence to test
          how sentence breaks work and whatever. I do hope it ends up feeling
          nice and smooth.
        </p>
        <p>SECOND paragraph, for testing :).</p>
      </>
    ),
    images: [
      {
        src: `${PATH_RAYTRACING_IMAGES}/test1.png`,
        alt: "test 1 image",
        location: "Phong Illumination",
        year: "16 samples",
        size: [707, 672],
      },
      {
        src: `${PATH_RAYTRACING_IMAGES}/test2.png`,
        alt: "A hilltop view above the fog of the sprawling French hills from Haut-Koenigsbourg Castle in Alsace",
        location: "Shadows",
        year: "16 samples",
        size: [4096, 2304],
      },
    ],
  },
];
