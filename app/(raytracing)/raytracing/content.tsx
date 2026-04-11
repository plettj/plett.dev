import { ChapterData } from "@/components/book/bookTypes";
import { PATH_RAYTRACING_IMAGES } from "@/lib/constants";

export const raytracingBook: ChapterData[] = [
  {
    title: "Raytracing in a Nutshell",
    hash: "in-a-nutshell",
    content: (
      <>
        <p>Talk about .</p>
        <p>Paragraph 2 test.</p>
        <code lang="cpp">Code block test</code>
      </>
    ),
    images: [
      {
        src: `${PATH_RAYTRACING_IMAGES}/test2.png`,
        alt: "Alt text",
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
        alt: "Test image alt text",
        location: "Phong Illumination",
        year: "16 samples",
        size: [707, 672],
      },
      {
        src: `${PATH_RAYTRACING_IMAGES}/test2.png`,
        alt: "Alt text",
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
            alt: "Alt text",
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
        hash: "illumination",
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
            alt: "Alt text",
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
  {
    title: "Rendering a Black Hole",
    hash: "relativistic-raytracing",
    content: (
      <>
        <p>
          Ray marching, newtonian curves, euler stepping, general relativity
          curves, RK4 stepping, adaptive step sizes, perlin noise, alpha
          intersections.
        </p>
      </>
    ),
    children: [],
  },
  {
    title: "Other Topics in Raytracing",
    hash: "other-topics",
    content: (
      <>
        <p>
          Hierarchical modeling, animation, working with blender, cloud compute.
        </p>
      </>
    ),
    children: [],
  },
];
