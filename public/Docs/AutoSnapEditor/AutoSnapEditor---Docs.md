# AutoSnapEditor Plugin

AutoSnapEditor is a lightweight Unreal Engine 5 plugin that enhances your level design workflow with hotkey-based snapping controls. It allows precise modular asset placement while dragging actors in the editor without touching Unreal’s built-in grid snapping. This plugin is meant to make it easier for you to snap objects via hotkey controls. It is a pure editor plugin and is meant to

<div style="margin-top: 2rem;"></div>

## Getting Started

Follow these steps to get up and running quickly:

1. **Install the Plugin**

   > Visit the installation guide docs to find out how to install any plugin!
   > [Installation Guide](/docs/md/Docs---Installation)

2. **Initial Setup**

   - Navigate to `Editor Preferences > AutoSnapEditor`.
   - Configure any global settings such as snap size, axis toggles, or debug feedback.

3. **Using the Plugin**

   - Use `Shift + G` to toggle snapping.
   - Modify snap distance with `Shift + Mouse Wheel`.
   - Use additional hotkeys (`Shift + X/Y/Z`) to toggle individual axes.
   - Use `Shift + D` to toggle Debug Logging
   - Use the settings panel to adjust behavior, visuals, and logs.

> Note: The only two ways to get rid of the grid is by either 1. Disabling AutoSnapEditor or 2. Toggling the `Toggle Grid` Setting within the AutoSnapEditor Settings Panel.

![Grid Note](/GhillieStudios/Docs/DocsImages/AutoSnapEditor_Note1.png)

> Note: If both `Toggle Grid` and `Enable AutoSnapEditor` Are both checked true then you will have the grid pop up no matter what axis is enabled and disabled.
> For example if `Snap X` is toggled false and `Snap Y` and `Snap Z` are both toggled true then still ALL axis of the grid will show up. The only difference is that the Axis X will NOT be snappable.

> Note: Hotkeys are customizable with one caveot. You cannot control the `Shift` aspect of any of the hotkeys. This means whatever you set the hotkey to, will automatically and unchangably be paried with the `Shift` Key.

<div>
  <img src="https://jobrogi.github.io/GhillieStudios/Docs/DocsImages/AutoSnapEditor_Note2.png"
       alt="UE5 Texture Compression Settings"
       width="600"
       style="margin-top: 1rem;" />
</div>

<div style="margin-top: 2rem;"></div>

## Features Overview

| Feature                   | Description                                             |
| ------------------------- | ------------------------------------------------------- |
| Snap actors automatically | Custom snapping logic independent of UE’s grid snapping |
| Hotkey Axis Toggles       | Quickly toggle X, Y, Z snapping with hotkeys            |
| Dynamic Snap Control      | Increase/decrease snap size on the fly via mouse wheel  |
| Visual Feedback Grid      | Optional grid overlay helps visualize snap distances    |
| Debug Logging             | View real-time logs to track snap behavior              |
| Lightweight & Efficient   | Minimal overhead, fully Blueprint-compatible            |

<div style="margin-top: 2rem;"></div>

## Included Files

| File/Folder Path                     | Description                                 |
| ------------------------------------ | ------------------------------------------- |
| `/Plugins/AutoSnapEditor/`           | Root directory of the plugin.               |
| `/Plugins/AutoSnapEditor/Source/`    | C++ source files.                           |
| `/Plugins/AutoSnapEditor/Content/`   | Minimal content and optional grid materials |
| `/Plugins/AutoSnapEditor/Resources/` | Editor icons and panel configuration        |

<div style="margin-top: 2rem;"></div>

## Settings Overview

| Setting Name          | Location                            | Description                               |
| --------------------- | ----------------------------------- | ----------------------------------------- |
| `bEnableSnapping`     | Editor Preferences > AutoSnapEditor | Toggle plugin snapping globally           |
| `SnapStepSize`        | Editor Preferences > AutoSnapEditor | Controls snap increment distance          |
| `bShowGridOverlay`    | Editor Preferences > AutoSnapEditor | Shows/hides visual snap grid              |
| `bEnableDebugLogging` | Editor Preferences > AutoSnapEditor | Outputs snap-related logs to the console  |
| `bSnapAxisX/Y/Z`      | Runtime (Hotkey toggle)             | Enables/disables snapping along each axis |

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

- Make sure to **disable Unreal’s built-in grid snapping** to avoid movement conflicts.
- All snap hotkeys use the `Shift` modifier (e.g., `Shift + X`, `Shift + D`, etc.).
- Restart the Unreal Editor after enabling the plugin.

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
