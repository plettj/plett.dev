# Writing a Raytracer

- Core Features: Rays & Camera, primitives, depth testing, phong illumination, shadows.
- Basic Features: Supersampling, Environment maps, multithreading, DOF.
- Intermediate Features: BVH, texture mapping, reflection and transmission, path tracing.

- Other: Hierarchical modeling, animation, working with blender.

# Writing a Relativistic Raytracer

- Black hole: Ray marching, newtonian curves, euler stepping, general relativity curves, RK4 stepping, adaptive step sizes, perlin noise, alpha intersections.

2. [Features and Techniques](#features-and-techniques)
   - [Texture Mapping](#texture-mapping)
   - [Reflection and Transmission](#reflection-and-transmission)
   - [Shadows](#shadows)
   - [Primitives Interacting](#primitives-interacting)
   - [Depth of Field](#depth-of-field)
   - [Sound](#sound)
   - [Animation](#animation)
3. [Additional Features](#additional-features)
   - [Relativistic Ray Marching](#relativistic-ray-marching)
   - [Custom Texturing](#custom-texturing)
   - [Path Tracing](#path-tracing)
   - [Working with Blender](#working-with-blender)
   - [Efficiency](#efficiency)
4. [Conclusion](#conclusion)

5. [Introduction](#introduction)
6. [Core Ray Tracing](#core-ray-tracing)
   - [Primary Rays and Image Output](#primary-rays-and-image-output)
   - [Primitives](#primitives)
   - [Depth Testing](#depth-testing)
   - [Phong Illumination](#phong-illumination)
   - [Shadows](#shadows)
7. [Scene Structure](#scene-structure)
   - [Hierarchical Transformations](#hierarchical-transformations)
   - [Instancing](#instancing)
   - [Non-Axis-Aligned Cameras](#non-axis-aligned-cameras)
8. [Acceleration Structures](#acceleration-structures)
   - [Bounding Volume Hierarchy](#bounding-volume-hierarchy)
   - [Multithreading](#multithreading)
   - [Intensity Thresholds](#intensity-thresholds)
9. [Antialiasing](#antialiasing)
   - [Stochastic Super-Sampling](#stochastic-super-sampling)
   - [Adaptive-Progressive Refinement](#adaptive-progressive-refinement)
10. [Materials and Appearance](#materials-and-appearance)
    - [Texture Mapping](#texture-mapping)
    - [Reflection and Transmission](#reflection-and-transmission)
    - [Emissive Materials](#emissive-materials)
    - [Environment Maps](#environment-maps)
11. [Camera Effects](#camera-effects)
    - [Depth of Field](#depth-of-field)
    - [Non-Axis-Aligned Cameras](#non-axis-aligned-cameras)
12. [Animation](#animation)
    - [Multi-Frame Rendering](#multi-frame-rendering)
    - [Cubic Spline Camera Movement](#cubic-spline-camera-movement)
    - [Per-Frame Settings Modulation](#per-frame-settings-modulation)
13. [Sound](#sound)
14. [Additional Features](#additional-features)
    - [Monte-Carlo Path Tracing](#monte-carlo-path-tracing)
    - [Relativistic Ray Marching](#relativistic-ray-marching)
    - [Accretion Disk Simulation](#accretion-disk-simulation)
    - [Custom Texturing with Perlin Noise](#custom-texturing-with-perlin-noise)
    - [Working with Blender](#working-with-blender)
