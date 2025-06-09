# RTSCamPro - Premium RTS Camera System

<div style="margin-top: 1rem;"></div>

**RTSCamPro** is a modular, high-performance RTS-style camera system designed for Unreal Engine 5. It combines a C++ backend for performance and Blueprint subclasses for easy override and customization. Ideal for RTS, simulation, city builders, and tactical games.

---

<div style="margin-top: 1rem;"></div>

## Features Overview

<div style="margin-top: 1rem;"></div>

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

---

<div style="margin-bottom: 2rem;"></div>

### Included Files

<div style="margin-top: 1rem;"></div>

<pre><code>RTSCamPro/
├── Content/
│   └── RTSCamPro/
│       ├── Blueprints/
│       ├── Input/
│       ├── SaveSystem/
│       ├── UI/
│       └── Demo/</code></pre>

<div style="margin-bottom: 2rem;"></div>

## Settings Overview

<div style="margin-top: 1rem;"></div>

All major behaviors are controlled within `BP_RTSCamera` under `RTS` Settings Category.

<div style="margin-top: 1rem;"></div>

## RTSCamPro – Default Camera Configuration

All configurable properties in the RTSCamPro camera system, including default values and concise descriptions.

<div style="margin-top: 1rem;"></div>

| Variable Type | Property                | Default Value    | Description                                         |
| ------------- | ----------------------- | ---------------- | --------------------------------------------------- |
| `float`       | Pan Speed               | 2000.0           | Speed of camera movement when panning.              |
| `float`       | Pan Damping             | 2.0              | Damping applied to slow down pan motion.            |
| `float`       | Zoom Speed              | 100.0            | How fast the camera zooms in or out.                |
| `float`       | Zoom Damping            | 6.0              | Smooths the zoom motion for a natural feel.         |
| `float`       | Min Zoom                | 500.0            | Minimum allowable camera zoom distance.             |
| `float`       | Max Zoom                | 3000.0           | Maximum allowable camera zoom distance.             |
| `float`       | Target Zoom Length      | 1500.0           | Default resting zoom value when system resets.      |
| `float`       | Rotation Speed          | 90.0             | Speed at which the camera rotates left/right.       |
| `float`       | Rotation Damping        | 8.0              | Damping applied to rotational motion.               |
| `float`       | Min Tilt Angle          | -45.0            | Minimum angle the camera can tilt down.             |
| `float`       | Max Tilt Angle          | -25.0            | Maximum angle the camera can tilt up.               |
| `float`       | Tilt Speed              | 60.0             | Speed at which the camera tilts up or down.         |
| `float`       | Tilt Damping            | 8.0              | Smoothing factor applied to tilt motion.            |
| `bool`        | Adaptive Rotate on Zoom | (true)           | Automatically adjusts rotation based on zoom level. |
| `float`       | Default FOV             | 90.0             | Starting field of view value.                       |
| `float`       | Min FOV                 | 30.0             | Minimum field of view allowed.                      |
| `float`       | Max FOV                 | 120.0            | Maximum field of view allowed.                      |
| `float`       | FOV Adjustment Speed    | 2.0              | Speed at which FOV changes when triggered.          |
| `bool`        | Auto Reset FOV          | (true)           | Resets FOV automatically when zoom resets.          |
| `float`       | FOV Reset Delay         | 2.0              | Time before FOV auto-reset occurs.                  |
| `bool`        | Use Camera Bounds       | (true)           | Enforces camera movement limits.                    |
| `FVector2D`   | Camera Bounds X         | -3500.0 → 3500.0 | Horizontal panning limits.                          |
| `FVector2D`   | Camera Bounds Y         | -3500.0 → 3500.0 | Vertical panning limits.                            |
| `bool`        | Draw Bounding Box       | (false)          | Toggles debug visuals for bounds.                   |
| `bool`        | Enable Edge Panning     | (true)           | Enables screen-edge panning.                        |
| `float`       | Edge Pan Threshold      | 20.0             | Distance from edge before panning activates.        |
| `bool`        | Enable Camera Autosave  | (true)           | Enables autosaving of camera settings.              |
| `float`       | Autosave Interval (sec) | 10.0             | Time between autosave snapshots.                    |

> These values are defaults and can be fully overridden in the Details panel or programmatically at runtime.

<div style="margin-bottom: 2rem;"></div>

---

## Blueprint Classes

<div style="margin-top: 1rem;"></div>

- `BP_RTSCamera`: The camera actor with Spring Arm & Camera.
- `BP_RTSCameraController`: Handles input and movement logic.
- `BP_RTSCameraGamemode`: Allows Developers to easily use the plugin.
<div style="margin-bottom: 2rem;"></div>

## Input Actions (Enhanced Input)

These Enhanced Input actions are bundled with RTSCamPro and pre-mapped in the controller.
Feel free to modify these to your hearts desire!

<div style="margin-bottom: 2rem;"></div>

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

<div style="margin-bottom: 2rem;"></div>

## ❓ Support

<div style="margin-top: 1rem;"></div>

For setup help, bug reports, or feature requests, please contact:

- **Email**: `Jobrogi@gmail.com`
- **Community Discord**: [[Ghillie Studios Discord]](https://discord.gg/6xmYHNKk)

<div style="margin-bottom: 2rem;"></div>
