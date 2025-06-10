# AutoSnap – Runtime Changelog

Track all major updates and improvements to the AutoSnap – Runtime plugin.

<div style="margin-top: 2rem;"></div>

## [1.1.0] – Hotfixes + Bugs

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
