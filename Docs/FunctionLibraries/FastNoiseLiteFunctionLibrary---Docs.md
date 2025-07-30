# FastNoiseLite – Function Library

A lightweight, Blueprint-exposed wrapper for the FastNoiseLite noise generation library in Unreal Engine 5.4+.  
This plugin allows you to generate procedural 2D and 3D noise, apply domain warping, and configure noise behavior using simple, Blueprint-friendly structs.

<div style="margin-top: 2rem;"></div>

## Getting Started

Follow these steps to get up and running quickly:

1. **Install the Plugin**

   - [Installation Guide](/docs/md/Docs---Installation)

2. **Initial Setup**

   - Enable the plugin under **Edit > Plugins > FastNoiseLite Function Library**, then restart the editor.

3. **Using the Plugin**

   - Open any Blueprint (e.g. Actor, Function Library, Generator).
   - Right-click in the Event Graph and search for functions in the **FastNoiseLite Function Library** category.
   - Use nodes like `Sample2D`, `Sample3D`, `DomainWarp2D`, or `DomainWarp3D`.
   - Configure the noise using the `FFastNoiseLiteConfig` struct, which exposes all key parameters (Seed, Frequency, Noise Type, Fractal settings, etc.).

<div style="margin-top: 2rem;"></div>

## Features Overview

| Feature Category      | Description                                                    |
| --------------------- | -------------------------------------------------------------- |
| Blueprint-Callable    | All noise sampling functions exposed to Blueprints             |
| 2D & 3D Sampling      | Supports both `Sample2D` and `Sample3D` noise evaluation       |
| Domain Warping        | Includes `DomainWarp2D` and `DomainWarp3D` for distortion      |
| Customizable Config   | Single struct (`FFastNoiseLiteConfig`) controls all parameters |
| FastNoiseLite Backend | Uses native FastNoiseLite for performance and versatility      |

<div style="margin-top: 2rem;"></div>

## Included Files

| File/Folder Path                                       | Description                                          |
| ------------------------------------------------------ | ---------------------------------------------------- |
| `/Plugins/FastNoiseLiteFunctionLibrary/Source/`        | C++ wrapper logic, enum converters, and BP functions |
| `/Plugins/FastNoiseLiteFunctionLibrary/ThirdParty/`    | Unmodified FastNoiseLite source                      |
| `/Plugins/FastNoiseLiteFunctionLibrary/Resources/`     | Icon or metadata (if any)                            |
| `/Plugins/FastNoiseLiteFunctionLibrary/Documentation/` | Optional Markdown documentation                      |

<div style="margin-top: 2rem;"></div>

## Settings Overview

| Setting Name     | Location                    | Description                                                   |
| ---------------- | --------------------------- | ------------------------------------------------------------- |
| `Seed`           | FFastNoiseLiteConfig        | Determines noise repeatability and randomness                 |
| `NoiseType`      | FFastNoiseLiteConfig (enum) | Choose from OpenSimplex2, Perlin, Cellular, etc.              |
| `FractalType`    | FFastNoiseLiteConfig (enum) | Enable fractal patterns like FBm or Ridged                    |
| `Frequency`      | FFastNoiseLiteConfig        | Controls the scale of the noise                               |
| `DomainWarpType` | FFastNoiseLiteConfig (enum) | Defines the warp algorithm used                               |
| `bUseDomainWarp` | (Optional future flag)      | Apply domain warping conditionally if supported in Blueprints |

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

- All functions are grouped under the **FastNoiseLite Function Library** category in Blueprint.
- The `FFastNoiseLiteConfig` struct provides a full parameter set that mirrors FastNoiseLite's native API.
- This plugin **does not modify** FastNoiseLite in any way — it only wraps it for Blueprint exposure.
- FastNoiseLite is licensed under the MIT License and is included unmodified in the plugin’s `/ThirdParty/FastNoiseLite/` folder.
- Ghillie Studios claims ownership only over the wrapper layer and related Blueprint bindings.

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
