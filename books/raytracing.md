# Ray-tracing Black Holes from Scratch

## Introduction

- [ ] syntax highlighting
- [ ] make the code collapsible
- [ ] make the actual introduction separate and above, and INCLUDE AN INLINE IMAGE showing progression (like phong sphere to black hole)

**WRITING TODOS**

- [ ] ms paint descriptions of stuff (motivate shooting light rays out of our eyes better)
- [ ] separate the raytracing basics and motivation into separate sections, and build it up from first principles
- [ ] make the introduction a little more attention-grabby, _somehow_. eg. remove "vast ocean" crap
- [ ] when describing raytracing, talk more about like "raytracing is a model based in real-world physics" ie. physically based, and try to use the word "photorealistic"

> This project was inspired by [this video](https://www.youtube.com/watch?v=8-B6ryuBkCM), and this article is inspired by [Ray Tracing in One Weekend](https://raytracing.github.io/books/RayTracingInOneWeekend.html).

In my final year of university, I thought it would be fun to render a black hole. Little did I know, the field of computer graphics is a vast ocean of accumulated knowledge, and the rickety little bachelor's degree sailboat I embarked on this journey with was in for a rough ride.

In this article, I break things down into bite-sized pieces, so **you don't need any technical knowledge**. I want you to enjoy your time reading, so I'll avoid deep-diving into technical details, and instead focus on making the high-level concepts intuitively and visually clear. This is a layman's voyage from drawing circles to raytracing a black hole.

That said, I've made all code used to render these images public [here on GitHub](https://github.com/plettj/raytracer). The code is self-contained, so anyone can download it and generate their own images with essentially zero setup.

IMAGE 1: Showcase image.

## Drawing our first objects

### Introduction to Ray tracing

In computer graphics, there are two main ways of rendering, a.k.a. turning a 3D scene into a 2D image. They are **Rasterization** and **Ray Tracing**.

**Rasterization** is a rendering model that takes all of the objects (usually triangles) that make up the 3D scene, and shoving them through a series of math operations involving linear algebra that directly converts them into a 2D image. The problem is, linear algebra is _linear_, and drawing black holes will need to account for non-linear light paths as they bend around black holes.

**Ray Tracing**, on the other hand, is a model based on real-world physics. It involves simulating light rays as they bounce around the shapes in a scene, and into a camera. In contrast to rasterization, ray tracing is a fairly accurate model of real light, capable of producing photorealistic results.

Because of its foundation in physics, we will be using ray tracing to render our black holes. Before we get there, I'll walk you through the basics of ray tracing, [lighting](#lighting-things-up), [reflection](#reflection-and-transmission), and some cool features like [defocus blur](#depth-of-field-blur), to build your understanding. After these mini-lessons, we'll be equipped to tackle the rendering of black holes.

> If you only care about the relativistic ray tracing necessary for black holes, you can jump ahead to [5. Rendering a Black Hole](#rendering-a-black-hole).

### Rays and the camera

Ray tracing is the idea of following light rays as they move through a scene.

To simulate light efficiently, we tell the computer to send rays _from_ our eyes, rather than looking for rays that come _into_ our eyes. Doing this allows us to ignore all light that would not have reached our eyes or our camera lense. All we need to do is check what each outgoing ray hits: if it hits a blue object, that ray should be blue!

The idea of sending rays outward is the core of our "raytracer." We send one ray per pixel of our image, and set the colour of that pixel based on what shapes and materials the ray hits in the scene. It's as if we're sampling the light that hits every pixel of the image.

I've written some `C++`-like pseudocode setting up this basic raytracer. Don't worry if you don't understand it; it's just here to keep the programmers among you engaged. :-]

```c++
using vec3 = number[3];
using color = number[3];

// Represents a light ray, at "origin" pointing in "direction."
struct Ray {
  vec3 origin;
  vec3 direction;

  color color = (0, 0, 0);
}

// Produces an image with dimensions "width" and "height."
Image renderImage(int width, int height) {
  const vec3 cameraPosition = (0, 0, 1);
  const vec3 cameraDirection = (0, 0, -1);

  // Image class for holding pixel colours and saving to png.
  Image image;

  for (int x = 0; x < width, x++) {
    for (int y = 0; y < height, y++) {
      const rayX = cameraPosition[0] + x / width - 0.5;
      const rayY = cameraPosition[1] + y / height - 0.5;

      Ray ray = new Ray(cameraPosition, cameraDirection);

      // TODO: Does the ray hit anything in the scene??

      image.pixels[y][x] = ray.colour;
    }
  }

  return image;
}

const Image image = renderImage(2048, 1365);
image.savePng();
```

Behold, a black rectangle. For my money, that's the most realistic rendering of a black hole on the internet.

<img src="/images/raytracing/image02-black.png" alt="A pure black rectangle." width="2048" height="1365" data-location="Basic raytracer" data-year="Fig 2." />

### Intersecting with Things

Intersecting with things like spheres, cubes, discs, and torii, and depth testing.

<img src="/images/raytracing/test2.png" alt="Example image 2" width="4096" height="2304" data-location="Infinite Earths" data-year="16 samples" />

### Lighting Things Up

Phong illumination model basics, covering diffuse and specular, and then linking to further resources (PBRT? RTIOW?) like BRDF.

TO BE WRITTEN IN FUTURE

### Casting Shadows

Simply expand on the idea that now that we can shoot rays, we can shoot rays _from anywhere_.

When a ray hits any material that involves lighting equations, a shadow ray is cast from that point to all lights. If a hit occurs at a t-value smaller than the distance to the light, there is a shadow. These shadow rays also take into account the alpha of textures.

## More Basic Features

Supersampling, environment maps, multithreading, DOF.

### Supersampling

Talk about the various types: uniform, random, jittered, adaptive progressive, touch on Sobol sequences.

The antialiasing implementation uses jittered stochastic sampling (Cook) and adaptive refinement (Painter). A weakness of adaptive refinement is worth noting: if all probe rays miss a high-energy path, the algorithm "prematurely commits," causing dark fireflies. In PBRT and in other literature, there are various solutions like checking a 3x3 pixel square or using a better averaging algorithm.

### Environment Maps

Environment maps, or skyboxes, are what rays that miss everything hit. Mention how hdr and exr are different from png.

TO BE WRITTEN IN FUTURE

### Easy Performance Gains

Multithreading.

There are a few big time saves and lots of small ones: multithreading (`7x`), adaptive-step ray marching (`~15x`), ray-black-hole escape radius (`2x`), mesh BVH (`~20x`), scene-level BVH (`1.5x`), adaptive refinement (`2.5x`), caching operations and avoiding division (`IDKx`).

### Depth of Field Blur

Depth of Field, or Defocus Blur, blah blah blah thin lense approximation.

The Thin Lense Approximation is the standard approach, as described in both PBRT and Ray Tracing in One Weekend.

## Intermediate Features

BVH, texture mapping, reflection and transmission, path tracing.

### Bounding Volume Hierarchies

TO BE WRITTEN IN FUTURE Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Texture Mapping

I implemented texture mapping on non-mesh geometries (including rings and torii), using the standard UV texture mapping procedure in the literature.

I also wanted to implement an alpha component in my textures. So, I added additional logic to my Phong material code to allow rays to have a chance of continuing past the mesh, based on the returned alpha, but this produced two unexpected hurdles. First, shadows were still solid, so I made shadow rays respect the uv -> sample -> chance to continue pipeline. Second, I needed less noise in my image, so I replaced the Monte-Carlo-like sampling with a simple probabilistic blend, to increase convergence.

### Reflection and Transmission

I implemented reflection and transmission with the standard methods, including Beer attenuation. I used Snell's law for refraction angles, with probabilistic reflection based off the Fresnel Equations. I did implement Schlick's approximation, but it caused some unrealistic reflection at low IORs, so I reverted it and simply used the Fresnel Equations in my final engine.

Notably, when I introduced Monte-Carlo importance sampling to simulate dielectrics, a weakness of adaptive refinement was highlighted. Put simply, if all probe rays miss a high-energy path, the algorithm "prematurely commits," causing dark fireflies. In PBRT and in other literature, there are various solutions like checking a 3x3 pixel square or using a better averaging algorithm.

### Path Tracing

My engine supports full Monte-Carlo path tracing, with emissive materials and dielectrics. It was not showcased in my animation due to the sheer time it takes to converge, which certainly wouldn't have been helped by the need for relativistic ray marching.

## Rendering a Black Hole

Ray marching, newtonian curves, euler stepping, general relativity curves, RK4 stepping, adaptive step sizes, perlin noise, alpha intersections.

### Ray Marching

I wanted to implement relativistic ray marching. Newtonian marching wasn't enough, because light couldn't orbit any objects. Luckily, I happened upon a super crisp derivation of the solution to the Schwarzchild geodesics of a non-rotating black hole at the origin. This derivation doesn't use a variation on polar coordinates like most solutions; it uses Kerr-Schild (Eddington) coordinates, which map one-to-one to world-space coordinates.

### Newtonian Gravity Curves

TO BE WRITTEN IN FUTURE Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### General Relativistic Light Bending

Euler is never accurate enough with relativity, so I implemented RK4 for derivative evaluation. My intersection code still involved straight lines though, so I added a ~5% distance buffer on these to ensure I never missed a slightly offset intersection, which also improved jaggies.

### RK4 Stepping

Another hurdle was jaggies behind transparent meshes. These were not caused by floating point precision errors, nor could they be fixed by intersection bisection (as PBRT describes, for more accurate intersections). Instead, the passing through of a texture with an alpha component was causing the actual steps of my ray marching to become out of phase. I solved this by, instead of re-initializing a ray at the alpha texture contact point every time, I used the original ray, and just shifted the `tMin` up past that intersection for the next cast.

### Adaptive Step Sizes

I got a lot of jagged edges close to the black hole, and this was fixed with adaptive stepping (step by `1 / r^2 * bh_mass`), which improved accuracy while giving a ~15x speedup.

### Accretion Disk and Noise

**Perlin Noise Texturing:** To simulate accretion discs, I didn't want to compute a billion photons over a billion years, so I (naturally) just used perlin noise. Some stretching and attenuation based on UV values here, a splash of colour smoothing there, and HDR ranges with greater-than-1 luminosity to top it off, and I was off to the races.

**Torus Spiral Texturing:** All this took was generating a striped pattern, and map that onto my torus primitive. I used luminosity _below_ one as a way to blend the texture with the underlying phong diffuse coefficient.

## Other Topics in Raytracing

Hierarchical modeling, animation, working with blender, cloud compute.

### Hierarchical Modeling

TO BE WRITTEN IN FUTURE Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Animation

I implemented Catmull-Rom spline interpolation, which, while confidently owning the disadvantage of discontinuous acceleration, also has the huge benefit of only requiring me to specify the points I want things to be at, and nothing more.

### Working with Blender

All of the triangle meshes in my scene besides the exclamation point are based on CC-BY-4.0-licensed models from SketchFab, and I heavily modified most of those.

I wrote a few blender python scripts to help with my mesh exporting. One exports all meshes in a scene, grouped and partitioned by their materials, and constructs a `.lua` file to reference them all. Another exports empty items from a scene, which I used to gather a series of points for my animation keyframes.

### Cloud Compute

TO BE WRITTEN IN FUTURE Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
