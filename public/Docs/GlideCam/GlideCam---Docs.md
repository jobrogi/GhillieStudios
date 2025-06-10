# GlideCam – Lite RTS Camera System

GlideCam – Lite is a modular Blueprint-based RTS camera system featuring smooth glide movement, zooming, and panning via enhanced input. It’s designed for strategy-style games and quick integration, with full support for UE5.3+ and out-of-the-box Fab Marketplace installation.

<div style="margin-top: 2rem;"></div>

## Getting Started

Follow these steps to get up and running quickly:

1. **Install the Plugin**

   - [Installation Guide](/docs/md/Docs---Installation)

2. **Initial Setup**

   - In Unreal Engine, go to `Edit → Plugins`, search for **GlideCam**, and enable the plugin.
   - Restart the engine when prompted.

3. **Using the Plugin**

   - Option 1: In **World Settings**, set `GameMode Override` to `BP_PlayerCharacterGamemode`.
   - Option 2: Manually add `BP_GlideCamPawn` to your level and assign `IMC_GlideCamControls` to your input setup.
   - All plugin content is located at:  
     `/All/EngineData/Plugins/GlideCam`

<div style="margin-top: 2rem;"></div>

## Features Overview

| Feature                | Description                                                     |
| ---------------------- | --------------------------------------------------------------- |
| Glide Movement         | Smooth camera transitions with acceleration and drag            |
| Zoom + Rotate + Reset  | Scroll-based zoom, Q/E rotation, and reset orientation with `R` |
| RTS Drag Panning       | Right-mouse drag to pan across the map                          |
| Enhanced Input Support | Uses Input Mapping Context and Input Actions                    |
| Blueprint-Only System  | No C++ required — everything editable in Blueprint              |
| Easy Customization     | All behavior settings exposed via variables                     |

<div style="margin-top: 2rem;"></div>

## Included Files

| File/Folder Path                | Description                                        |
| ------------------------------- | -------------------------------------------------- |
| `/Plugins/GlideCam/Blueprints/` | `BP_GlideCamPawn`, `BP_PlayerCharacterGamemode`    |
| `/Plugins/GlideCam/Input/`      | `IMC_GlideCamControls`, `IA_Move`, `IA_Zoom`, etc. |
| `/Plugins/GlideCam/Resources/`  | Icons and thumbnails (if applicable)               |

<div style="margin-top: 2rem;"></div>

## Settings Overview

| Setting Name           | Location                        | Description                                              |
| ---------------------- | ------------------------------- | -------------------------------------------------------- |
| `ZoomStrength`         | BP_GlideCamPawn (Details panel) | Controls scroll wheel zoom sensitivity                   |
| `RotationSpeed`        | BP_GlideCamPawn                 | Speed of camera rotation using Q/E                       |
| `bEnableDragPan`       | BP_GlideCamPawn                 | Enables/disables RTS-style right-click drag panning      |
| `IMC_GlideCamControls` | Input Mapping Context           | Enhanced Input setup for movement, zoom, rotate, etc.    |
| `IA_*`                 | Input Actions                   | Mapped actions like `IA_Zoom`, `IA_Move`, `IA_Pan`, etc. |

<div style="margin-top: 2rem;"></div>

## Engine Compatibility

| Unreal Engine Version | Supported                |
| --------------------- | ------------------------ |
| 5.3                   | ✅                       |
| 5.4                   | ✅                       |
| 5.5                   | ✅                       |
| 5.6+                  | ⚠️ Not officially tested |

<div style="margin-top: 2rem;"></div>

## Notes

- ⚠️ This plugin requires the **Enhanced Input** plugin to be enabled in your project.
- If you prefer to migrate assets into `/Game/`, you may do so manually or use included utilities.
- All default controls are editable via the `IMC_GlideCamControls` mapping context.

### Default Controls

| Action               | Input               |
| -------------------- | ------------------- |
| Move Camera          | W / A / S / D       |
| Rotate Camera        | Q (left), E (right) |
| Reset Orientation    | R                   |
| Zoom                 | Mouse Scroll Wheel  |
| Drag Pan (RTS-style) | Right Mouse Drag    |

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
