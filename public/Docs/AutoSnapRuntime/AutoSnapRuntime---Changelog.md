# AutoSnap – Runtime Changelog

Track all major updates and improvements to the AutoSnap – Runtime plugin.

<div style="margin-top: 2rem;"></div>

## [1.0.3] – QoL + Added Settings & Bonus Features

#### Updates

- Adjusted Plugin files to show in Root Folder. Plugin Files are now in [ProjectFolder] -> Plugins -> Ghillie Studios -> AutoSnap Runtime
- Added New Setting `Enable Gizmo Align with Camera` Which will rotate the Gizmo at 90 Degree Steps based off the Camera's Rotation.
- Added New Settings `Snap Actor on Select` Which will snap the actor to the closest grid point on select. This gets rid of the Axis Colored Dashed Lines Bug (If bool is selected)
- Fixed Input Mapping Context Bug that flip flops the Horizontal and Vertical Movement inputs.
- Fixed The Camera Actor not being able to move through objects its looking at. Camera now uses `Set Actor Location` instead of `Add Movement Input` Nodes. Gravity is also disabled.
- Added Rotation Inputs to the Camera to show that the Gizmo Rotation works
- Made Horizontal and Vertical Movement inputs Relative to the Spring Arms World Rotation.
- `Grid Visualizer` is now fully dynamic based off the `Gizmo` Class' Orientation Whether `Enable Gizmo Align with Camera` is true or not.
- Fixed L_ExampleLevel to show simple setup of the `AutoSnapController`
- Temporarily Depreciated Arrow Hover Logic (Revamping this system)
- Added Logo to Plugin

<div style="margin-top: 2rem;"></div>

## [1.0.3] – Bug Fixes + Feature Adding

#### Updates

- Added if you click off while having an actor selected then the grid and gizmo will hide itself
- Made it so AutoSnapControllerComponent will not work on anything other than a parent class of type Character. Before doing this would crash the engine.
- Added a example map for devs to see how everything works together
- Added a very basic camera movement character system to the example map.
- Updated Fab Product page to show actual Docs page on new webiste

<div style="margin-top: 2rem;"></div>

## [1.0.2] – Documentation Standardization

### Updates

- Updated docs to a standardized template

<div style="margin-top: 2rem;"></div>

## [1.0.1] – Hotfixes + Bugs

### Updates

- Fixed Content folders not generating
- Fixed `AutoSnapControllerComponent` crashing engine if it is added to anything other than a character class.

## [1.0.0] – Initial Release

### Features

- Runtime snapping system using `AutoSnapControllerComponent`
- World-aligned grid with dynamic actor-following behavior
- Drag-and-drop movement along X, Y, Z axes
- Plane snapping (XY, XZ, YZ) supported for top-down and 3D workflows
- Adjustable grid size via exposed Blueprint variable
- Grid material with crosshair indicators and visual plane
- Actor filtering using tags (optional)
- Easy integration via Blueprint-only workflow
- Default Blueprint assets automatically loaded if none are provided
- Designed for Unreal Engine Enhanced Input
- Fully compatible with packaged builds

### Modular Components

- `ARuntimeGizmoActor`: Handles snapping and visual drag logic
- `AGridVisualizerActor`: Projects world-space grid visuals
- `UAutoSnapControllerComponent`: Drop-in component for player/controller

<div style="margin-top: 2rem;"></div>

<h2>Need Help?</h2>

<ul>
  <li>
     <strong>Email:</strong> <code>Jobrogi@gmail.com</code><br />
    <small>Copy and paste into your email client</small>
  </li>
  <li>
     <strong>Discord:</strong>
    <a href="https://discord.gg/AFVyqXBSRW" target="_blank" rel="noopener noreferrer">
      Join our community
    </a>
  </li>
  <li>
     <strong>Main Docs:</strong>
    <a href="https://jobrogi.github.io/GhillieStudios" target="_blank" rel="noopener noreferrer">
      Ghillie Studios Website
    </a>
  </li>
  <li>
     <strong>Fab Store:</strong>
    <a href="https://www.fab.com/sellers/Ghillie%20Studios" target="_blank" rel="noopener noreferrer">
      Ghillie Studios on Fab
    </a>
  </li>
</ul>

<blockquote>
  Built by Ghillie Studios. All plugins support Unreal Engine 5.3–5.5 unless otherwise noted.
</blockquote>
