---
title: "Ray Tracing Black Holes in C++"
preview: "A layman's voyage through computer graphics, from drawing basic circles to rendering black holes."
date: "2026-05-07T00:51:48Z"
tags:
  [
    "book",
    "main",
    "raytracing",
    "graphics",
    "cpp",
    "relativity",
    "education",
    "black holes",
  ]
---

In the final few months of my undergraduate degree, I decided I wanted to simulate and render black holes. In the process, I built a C++ graphics engine, and that process is what I'd like to share with you today.

**[FIGURE 0: INLINE IMAGE: PHONG -> BLACK HOLE]**

You don't need any technical knowledge to understand this article, although some programming knowledge couldn't hurt. This is meant as a fun, visual exploration of the high-level concepts involved in computer graphics, so I will focus on making the ideas intuitive while avoiding most technical details.

Join me on this layman's voyage from drawing basic circles, through the sea of computer graphics, to eventually rendering black holes.

> I've made all graphics engine code public [here on GitHub](https://github.com/plettj/raytracer). The code is self-contained and purely CPU-based, so anyone can download it and generate their own images with essentially zero setup.

## Introduction to Ray Tracing

### What is Ray Tracing?

In computer graphics, there are two main ways to draw, or render, 3D worlds onto a 2D screen: **rasterization** and **ray tracing**.

**Rasterization** is a rendering model that takes all the objects that make up a 3D scene, and shoves them through a series of math operations that directly converts them to a 2D image. The math involved is linear algebra, but the problem for us is that linear algebra is _linear_, or straight, but black holes actually _curve_ the space around them. So rasterization won't do.

**Ray tracing**, on the other hand, is a rendering model based on real-world physics, capable of producing photorealistic images. It does this by simulating rays of light as they bounce around the shapes on a scene, and into a camera, rather than trying to smush the 3D world into two dimensions like rasterization.

Because of its foundation in physics, we'll be using ray tracing to render our black holes. On our way there, I'll take you through the basics of ray tracing, [lighting](#lighting-things-up), [reflection](#reflection-and-transmission), and features like [defocus blur](#depth-of-field-blur) to build your intuition. After these mini-lessons, we'll finally be equipped to tackle black holes.

### How Light is Simulated

Ray tracing is the idea of simulating light, in the form of lines called “rays,” as they move through a scene. So, understanding the basics of how light works is very important.

In the real world, light emanates from sources like the sun, or a lightbulb. It travels in straight lines until it hits an object, which usually causes it to bounce off and scatter about. Objects have colour because some colours of light are absorbed while others are scattered. A banana looks yellow not because it _is_ yellow, per-se, but because it absorbs any non-yellow light, so when we look at it, only yellow light is bounced into our eyes.

**[FIGURE 1: how light actually bounces around the scene and hits a banana]**

Humans have known this about light for a while, so when we invented computers and gave them screens, some smart humans thought we could simulate this light behaviour using them. There was just one little issue: computers are really, _really_ slow. At least, compared to physical light.

Since it's impossible to simulate trillions of light rays hitting octillions of atoms every picosecond, those smart humans had to come up with a way to massively decrease the amount of computing the computers had to do to simulate the rays.

What they came up with is very simple and elegant. Instead of imagining light coming from light sources, bouncing around, and having a very small chance of landing in our camera lens, why not imagine light coming _out_ of the camera, bouncing around, and eventually hitting a light source? Pretending light travels from the viewer to the source keeps the physics essentially unchanged, while dramatically reducing any waste on light rays that don't arrive at our camera.

**[FIGURE 2: how light bounces around a scene in a ray tracer.]**

This idea of sending rays out from a camera lens into the world, like probes, is the foundation of our ray tracer. Everything else in this article will build on that core idea.

Let's dive in.

## Drawing our First Objects

### Rays and the Camera

Ray tracing involves following light rays as they move about a 3D scene.

Our camera will be the thing that sends rays outward, in straight lines, and we'll want to check what each outgoing ray hits. For now, if it hits a blue object, that ray should be blue. We will add more features as we go.

Since our camera represents our computer screen, you can think of it as a rectangle made of pixels, just like the screen itself. From each pixel, a ray is sent out into the scene, which bounces around and reports back to the camera the resulting colour. Finally, the camera sets each pixel colour to the colour of the corresponding ray.

With this, we are able to produce our very first rendered image.

<img src="/images/raytracing/image02-black.png" alt="A pure black rectangle." width="2048" height="1365" data-location="Basic raytracer" data-year="Fig. 3" />

Behold, a black rectangle. For my money, that's the most realistic rendering of a black hole on the internet.

### Intersecting with Objects

It would be nice if there were objects in our scene, so we could actually see something. Luckily, that isn't too hard.

Our rays are straight lines represented by numbers, so we can use math — specifically, linear algebra — to calculate if a ray is hitting an object. If we have the equation that represents a sphere, and the equation for our ray, setting them equal to each other will give us all intersections.

_Sphere intersection pseudocode goes here_.

With the sphere intersection points in hand, we can give any rays that hit the sphere a colour. We still don't have a system for lighting, so our sphere will look like a flat circle for the time being.

**[FIGURE 4: Blue sphere]**

Just like there is an equation that represents a sphere, there are equations for cubes, donuts, and many other shapes.

**[FIGURE 5: Blue sphere, purple stretched cube, green torus, teal stellated dodecahedron]**

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

## Credits

The basis for this project was built as part of University of Waterloo's [CS488: Introduction to Computer Graphics](https://student.cs.uwaterloo.ca/~cs488/index.html) course. The goal of simulating black holes was inspired by [this video](https://www.youtube.com/watch?v=8-B6ryuBkCM), and this article is inspired by [Ray Tracing in One Weekend](https://raytracing.github.io/books/RayTracingInOneWeekend.html).

Special thanks to [Gladimir Baranoski](https://www.npsg.uwaterloo.ca/people/gladimir/) for teaching me most of what this raytracer does. Thank you to [Owen Gallagher](https://owengames.com/) and [Wasay Saeed](https://www.wasaysaeed.com/) for joining me on the wild journey of building a graphics engine. Lastly, thank you to all the generous souls on the internet like [Jacco Bikker](https://www.linkedin.com/in/jacco-bikker-40816b1/) who have worked so hard to put world-class materials at my fingertips.
