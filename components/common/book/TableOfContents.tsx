type TOC = {
  displayText: string;
  hashText: string;
  children?: TOC[];
};

const testTOC: TOC[] = [
  {
    displayText: "Raytracing in a Nutshell",
    hashText: "in-a-nutshell",
  },
  {
    displayText: "A Working Raytracer",
    hashText: "core-features",
    children: [
      {
        displayText: "Rays and the Camera",
        hashText: "rays-and-camera",
      },
      {
        displayText: "Intersecting with Things",
        hashText: "intersecting", // Should include depth testing
      },
      {
        displayText: "Lighting Things Up",
        hashText: "phong-illumination",
      },
      {
        displayText: "Casting Shadows",
        hashText: "shadows",
      },
    ],
  },
  {
    displayText: "More Basic Features",
    hashText: "basics",
    children: [], // Supersampling, environment maps, multithreading, DOF
  },
  {
    displayText: "Intermediate Features",
    hashText: "basics",
    children: [], // BVH, texture mapping, reflection and transmission, path tracing
  },
  {
    displayText: "Rendering a Black Hole",
    hashText: "relativistic-raytracing",
    children: [], // Ray marching, newtonian curves, euler stepping, general relativity curves, RK4 stepping, adaptive step sizes, perlin noise, alpha intersections
  },
  {
    displayText: "Other Topics in Raytracing",
    hashText: "other-topics",
    children: [], // Hierarchical modeling, animation, working with blender, cloud compute
  },
];

export default function TableOfContents() {
  return (
    <div className="w-full bg-blue-300">
      {testTOC.map((content) => {
        return <div className="bg-green-300">{content.displayText}</div>;
      })}
    </div>
  );
}
