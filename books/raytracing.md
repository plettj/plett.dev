## What is this book?

TO BE WRITTEN IN FUTURE!

Here's what I want to make clear to my reader in the initial section.

1. This is a high-level document, not one that will give you working code at the end. However, you can reference the working code [on github](https://github.com/plettj/raytracer).
2. It's a short, practical read, for people who are looking for a quick and easy way to get a working knowledge of computer graphics.
3. Also, there's black holes.

## Raytracing in a nutshell

Code blocks annotated with two different languages.

```cpp
#include <vector>

const int testInt = 1;
const vector<int> testVector{0.0f};
```

```ts
const testInt: int = 1;
let testArray: int[] = [0];
```

Further, there's other things that I need to test, like **bold** and _italics_ and **_bolded italics_**.

Lastly, I want to try a sub sub heading.

#### This shouldn't mess with anything.

Voila! And then an image to cap it off, which you should have seen on the right.

<img src="/images/raytracing/test1.png" alt="Test image alt text" width="707" height="672" data-location="Phong Illumination" data-year="16 samples" />
<img src="/images/raytracing/test2.png" alt="Example image 2" width="4096" height="2304" data-location="Infinite Earths" data-year="16 samples" />

## The Bare Minimum

Talking about a working raytracer. This is a longer sentence to test how sentence breaks work and whatever. I do hope it ends up feeling nice and smooth.

SECOND paragraph, for testing :).

### Rays and the Camera

Talk about rays and the camera, I guess!

TO BE WRITTEN IN FUTURE

### Intersecting with Things

Intersecting with things like spheres, cubes, discs, and torii, and depth testing.

TO BE WRITTEN IN FUTURE

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
