# RTSCamPro – Premium RTS Camera System

RTSCamPro is a modular, high-performance RTS-style camera system designed for Unreal Engine 5. It combines a C++ backend for maximum performance with Blueprint classes for easy customization. Ideal for RTS, city builders, sims, and tactical games.

<div style="margin-top: 2rem;"></div>

## Getting Started

Follow these steps to get up and running quickly:

1. **Install the Plugin**

   - [Installation Guide](/docs/md/Docs---Installation)

2. **Initial Setup**

   - Enable the plugin under **Edit > Plugins > RTSCamPro**, then restart the editor.
   - Set your GameMode override to `BP_RTSCameraGamemode`, or drag `BP_RTSCamera` into your level manually.

3. **Using the Plugin**

   - The system is pre-wired with Enhanced Input and save/load support.
   - Modify movement, tilt, zoom, FOV, or input logic using the Details panel or Blueprint overrides.

<div style="margin-top: 2rem;"></div>

## Features Overview

| Feature                    | Description                                                          |
| -------------------------- | -------------------------------------------------------------------- |
| Pan / Zoom / Tilt / Rotate | Full camera movement control in 3D space                             |
| GlideCam Movement          | Smoothed interpolation for cinematic camera movement                 |
| Enhanced Input Support     | Fully integrated with UE5's Enhanced Input system                    |
| Edge Scrolling             | Mouse edge scrolling with customizable zone thickness                |
| World Bounds               | Prevent camera from leaving the playable area                        |
| Save + Load System         | Hotkey-based camera position saving (1–7) and restore support        |
| Zoom to Cursor             | Zoom centers on mouse-over world point                               |
| Rotation Clamping          | Prevent excessive rotation or tilting                                |
| Multiplayer Compatible     | Client-side camera control works with replicated games               |
| Blueprint Extendable       | All core classes exposed via Blueprint for customization             |
| Rebindable Inputs          | Input actions are easy to extend or replace                          |
| Settings Asset             | Global camera behavior defined through a central settings data asset |
| FOV Control                | Dynamically adjustable field of view with limits                     |
| Clean Project Structure    | Organized folders, comments, and no unused assets                    |
| Game Ready                 | Drop-in functionality with minimal setup required                    |

<div style="margin-top: 2rem;"></div>

## Included Files

| File/Folder Path                 | Description                          |
| -------------------------------- | ------------------------------------ |
| `/Plugins/RTSCamPro/Blueprints/` | All core camera actors and GameModes |
| `/Plugins/RTSCamPro/Input/`      | Enhanced Input Mapping & Actions     |
| `/Plugins/RTSCamPro/UI/`         | Minimal UI assets (if any)           |
| `/Plugins/RTSCamPro/SaveSystem/` | Save/Load Blueprint assets           |
| `/Plugins/RTSCamPro/Demo/`       | Optional sample map or setup         |

<div style="margin-top: 2rem;"></div>

## Settings Overview

| Setting Name             | Location (BP_RTSCamera) | Description                                         |
| ------------------------ | ----------------------- | --------------------------------------------------- |
| Pan Speed / Damping      | RTS Settings Category   | Controls base pan speed and interpolation smoothing |
| Zoom Speed / Damping     | RTS Settings Category   | Scroll speed and easing on zoom                     |
| Rotation Speed / Damping | RTS Settings Category   | Smooth camera turning with easing                   |
| Tilt Speed / Damping     | RTS Settings Category   | Up/down pitch motion controls                       |
| Min/Max Zoom             | RTS Settings Category   | Zoom distance limits                                |
| Min/Max Tilt             | RTS Settings Category   | Prevents extreme up/down camera pitch               |
| Adaptive Rotate on Zoom  | RTS Settings Category   | Optional auto-rotate logic while zooming            |
| FOV Settings             | RTS Settings Category   | Adjustable FOV, smoothing, min/max ranges           |
| Camera Bounds            | RTS Settings Category   | World bounds in X/Y and whether bounds are enforced |
| Edge Panning             | RTS Settings Category   | Enables edge scroll and configures trigger zone     |
| Autosave Settings        | RTS Settings Category   | Time between saves and whether autosave is active   |

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

- Camera save slots (1–7) can be saved/restored with the included input actions.
- All movement types support damping and smoothing via exposed Blueprint variables.
- Default GameMode (`BP_RTSCameraGamemode`) loads input, camera, and save logic automatically.
- Supports multiplayer safely by handling camera logic client-side only.
- Fully customizable — extend any Blueprint or override Enhanced Input bindings to match your game style.

### Blueprint Classes

- `BP_RTSCamera`: The camera actor with Spring Arm & Camera.
- `BP_RTSCameraController`: Handles input and movement logic.
- `BP_RTSCameraGamemode`: Allows developers to easily use the plugin.

### Input Actions (Enhanced Input)

| Action Name          | Description                                    |
| -------------------- | ---------------------------------------------- |
| `IA_Pan`             | Moves the camera using analog or WASD input    |
| `IA_Zoom`            | Scroll wheel or button-based zooming           |
| `IA_Tilt`            | Adjusts camera pitch (up/down tilt)            |
| `IA_Rotate_Left`     | Rotates camera left (yaw)                      |
| `IA_Rotate_Right`    | Rotates camera right (yaw)                     |
| `IA_FOV`             | Adjusts FOV dynamically if enabled             |
| `IA_ResetCamera`     | Resets camera to default position and FOV      |
| `IA_SpeedToggle`     | Toggles between camera speed presets           |
| `IA_SlowModifier`    | Temporarily slows camera motion while held     |
| `IA_Alt`             | Alternate mode toggle (customizable)           |
| `IA_DoubleTap_Left`  | Double-tap action for left movement            |
| `IA_DoubleTap_Right` | Double-tap action for right movement           |
| `IA_Horizontal`      | Legacy pan (horizontal) — replaced by `IA_Pan` |
| `IA_Vertical`        | Legacy pan (vertical) — replaced by `IA_Pan`   |
| `IA_Number1–7`       | Load saved camera positions (1–7)              |
| `IA_SavePosition`    | Save current transform to slot                 |
| `IA_LoadPosition`    | Load from slot to active camera                |

<div style="margin-top: 2rem;"></div>

## Need Help?

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
