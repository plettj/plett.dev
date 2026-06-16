---
title: "A Layman's Guide to Ray Tracing (feat. Black Holes)"
subtitle: ""
preview: "A layman's voyage through computer graphics, from drawing basic circles to rendering black holes."
date: "2026-05-07T00:51:48Z"
readingTime: 35
coverImage: "idk/what/to/put/here/yet"
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

**_NOTE: This book is a work-in-progress, and will be finished by late July, 2026. Consider setting a reminder to check back then._**

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

It would be nice if there were objects in our scene, so something interesting can appear on screen. Luckily, that isn't too hard.

Our rays are straight lines represented by numbers, so we can use math — specifically, linear algebra — to calculate if a ray is hitting an object. If we have the equation that represents a sphere, and the equation for our ray, setting them equal to each other will give us all intersections.

_Sphere intersection pseudocode goes here_.

With the sphere intersection points in hand, we can give any rays that hit the sphere a colour. We still don't have a system for lighting, so our sphere will look like a flat circle for the time being.

**[FIGURE 4: Blue sphere]**

Just like there is an equation that represents a sphere, there are equations for cubes, donuts, and many other shapes.

**[FIGURE 5: Blue sphere, purple stretched cube, green torus, teal stellated dodecahedron]**

### Lighting Things Up

_Coming soon, by the end of July 2026._

### Casting Shadows

_Coming soon, by the end of July 2026._

## More Basic Features

_Coming soon, by the end of July 2026._

### Supersampling

_Coming soon, by the end of July 2026._

### Environment Maps

_Coming soon, by the end of July 2026._

### Easy Performance Gains

_Coming soon, by the end of July 2026._

### Depth of Field Blur

_Coming soon, by the end of July 2026._

## Intermediate Features

_Coming soon, by the end of July 2026._

### Bounding Volume Hierarchies

_Coming soon, by the end of July 2026._

### Texture Mapping

_Coming soon, by the end of July 2026._

### Reflection and Transmission

_Coming soon, by the end of July 2026._

### Path Tracing

_Coming soon, by the end of July 2026._

## Rendering a Black Hole

_Coming soon, by the end of July 2026._

### Ray Marching

_Coming soon, by the end of July 2026._

### Newtonian Gravity Curves

_Coming soon, by the end of July 2026._

### General Relativistic Light Bending

_Coming soon, by the end of July 2026._

### RK4 Stepping

_Coming soon, by the end of July 2026._

### Adaptive Step Sizes

_Coming soon, by the end of July 2026._

### Accretion Disk and Noise

_Coming soon, by the end of July 2026._

## Other Topics in Raytracing

_Coming soon, by the end of July 2026._

### Hierarchical Modeling

_Coming soon, by the end of July 2026._

### Animation

_Coming soon, by the end of July 2026._

### Working with Blender

_Coming soon, by the end of July 2026._

### Cloud Compute

_Coming soon, by the end of July 2026._

## Credits

The basis for this project was built as part of University of Waterloo's [CS488: Introduction to Computer Graphics](https://student.cs.uwaterloo.ca/~cs488/index.html) course. The goal of simulating black holes was inspired by [this video](https://www.youtube.com/watch?v=8-B6ryuBkCM), and this article is inspired by [Ray Tracing in One Weekend](https://raytracing.github.io/books/RayTracingInOneWeekend.html).

Special thanks to [Gladimir Baranoski](https://www.npsg.uwaterloo.ca/people/gladimir/) for teaching me most of what this raytracer does. Thank you to [Owen Gallagher](https://owengames.com/) and [Wasay Saeed](https://www.wasaysaeed.com/) for joining me on the wild journey of building a graphics engine. Lastly, thank you to all the generous souls on the internet like [Jacco Bikker](https://www.linkedin.com/in/jacco-bikker-40816b1/) who have worked so hard to put world-class materials at my fingertips.
