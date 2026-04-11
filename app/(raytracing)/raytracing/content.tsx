import { ChapterData } from "@/components/common/book/bookTypes";
import { PATH_RAYTRACING_IMAGES } from "@/lib/constants";

const raytracingTOC = [
  {
    title: "Raytracing in a Nutshell",
    hash: "in-a-nutshell",
  },
  {
    title: "The Bare Minimum",
    hash: "bare-minimum",
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
    title: "The Bare Minimum",
    hash: "bare-minimum",
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
    children: [
      {
        title: "Rays and the Camera",
        hash: "rays-and-camera",
        content: (
          <>
            <p>Talk about rays and the camera, I guess!</p>
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
        title: "Intersecting with Things",
        hash: "intersecting", // Should include depth testing
        content: (
          <>
            <p>
              Intersecting with things like spheres, cubes, discs, and torii,
              and depth testing.
            </p>
          </>
        ),
      },
      {
        title: "Lighting Things Up",
        hash: "phong-illumination",
        content: (
          <>
            <p>
              Phong illumination model basics, covering diffuse and specular,
              and then linking to further resources (PBRT? RTIOW?) like BRDF.
            </p>
          </>
        ),
      },
      {
        title: "Casting Shadows",
        hash: "shadows",
        content: (
          <>
            <p>
              Simply expand on the idea that now that we can shoot rays, we can
              shoot rays <i>from anywhere</i>.
            </p>
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
    ],
  },
  {
    title: "More Basic Features",
    hash: "basics",
    content: (
      <>
        <p>Supersampling, environment maps, multithreading, DOF</p>
      </>
    ),
    children: [
      {
        title: "Supersampling",
        hash: "supersampling",
        content: (
          <>
            <p>
              Talk about the various types: uniform, random, jittered, adaptive
              progressive, touch on Sobol sequences.
            </p>
          </>
        ),
      },
      {
        title: "Environment Maps",
        hash: "environment-maps",
        content: (
          <>
            <p>
              Environment maps, or skyboxes, are what rays that miss everything
              hit. Mention how hdr and exr are different from png.
            </p>
          </>
        ),
      },
      {
        title: "Easy Performance Gains",
        hash: "easy-performance-gains",
        content: (
          <>
            <p>Multithreading</p>
          </>
        ),
      },
      {
        title: "Depth of Field Blur",
        hash: "dof",
        content: (
          <>
            <p>
              Depth of Field, or Defocus Blur, blah blah blah thin lense
              approximation.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Intermediate Features",
    hash: "intermediate",
    content: (
      <>
        <p>BVH, texture mapping, reflection and transmission, path tracing</p>
      </>
    ),
    children: [],
  },
];
