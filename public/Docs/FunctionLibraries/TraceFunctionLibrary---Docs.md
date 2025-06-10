# Trace Function Library – Advanced Tracing Plugin

A streamlined plugin offering a complete set of Blueprint-callable trace and sweep functions tailored for FPS, third-person, and RTS games in Unreal Engine 5.4+.  
This library removes boilerplate tracing logic and adds debug-friendly, flexible alternatives to standard line, sweep, and visibility checks.

<div style="margin-top: 2rem;"></div>

## Getting Started

Follow these steps to get up and running quickly:

1. **Install the Plugin**

   - [Installation Guide](/docs/md/Docs---Installation)

2. **Initial Setup**

   - Enable the plugin under **Edit > Plugins > Trace Function Library**, then restart the editor.

3. **Using the Plugin**

   - Open any Blueprint (e.g. Character, Controller, Utility).
   - Right-click in the Event Graph and search for functions in the **Trace Function Library** category.
   - Use nodes like `TraceFromCameraByType`, `SweepFromActorShape`, or `ConeTraceMulti`.
   - Toggle `bDrawDebug` on nodes to enable debug visuals for tracing and collision checks.

<div style="margin-top: 2rem;"></div>

## Features Overview

| Feature Category     | Description                                                         |
| -------------------- | ------------------------------------------------------------------- |
| Blueprint-Callable   | All functions are exposed to Blueprints for fast prototyping        |
| Camera Trace Support | Includes FPS, Third-Person, and RTS style trace modes               |
| Shape Tracing        | Supports line, sphere, cone, and sweep-based traces                 |
| Debug Visualization  | Draw lines, shapes, and impact points to aid development            |
| Utility Functions    | Includes ground detection, socket tracing, and deprojection helpers |

<div style="margin-top: 2rem;"></div>

## Included Files

| File/Folder Path                               | Description                                          |
| ---------------------------------------------- | ---------------------------------------------------- |
| `/Plugins/TraceFunctionLibrary/Source/`        | C++ trace logic, enums, and Blueprint function nodes |
| `/Plugins/TraceFunctionLibrary/Blueprints/`    | Example nodes (if included)                          |
| `/Plugins/TraceFunctionLibrary/Documentation/` | Optional Markdown documentation or usage notes       |

<div style="margin-top: 2rem;"></div>

## Settings Overview

| Setting Name       | Location              | Description                                           |
| ------------------ | --------------------- | ----------------------------------------------------- |
| `bDrawDebug`       | Per node input        | Enables line, shape, or impact point drawing          |
| `TraceColor`       | Per node input        | Color for lines when no hit is detected               |
| `HitColor`         | Per node input        | Color used at hit location (impact point)             |
| `DebugDuration`    | Per node input        | Duration for which the debug visual remains on-screen |
| `ECameraTraceType` | Function input (enum) | Trace mode: `FPS`, `ThirdPerson`, or `RTS`            |

<div style="margin-top: 2rem;"></div>

## Engine Compatibility

| Unreal Engine Version | Supported |
| --------------------- | --------- |
| 5.3                   | ✅        |
| 5.4                   | ✅        |
| 5.5                   | ✅        |
| 5.6+                  | ✅        |

<div style="margin-top: 2rem;"></div>

## Notes

- All functions are available under the **Trace Function Library** category in Blueprint.
- The `ECameraTraceType` enum allows different tracing behavior depending on your game type:
  - `FPS` → Trace forward from the player’s camera.
  - `ThirdPerson` → Trace from the player’s mesh location forward.
  - `RTS` → Deprojects the mouse cursor to determine trace direction.
- Use `DrawDebugTraceShape` for visualizing the results of any trace or sweep during gameplay.

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
