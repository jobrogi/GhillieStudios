# AutoSnap – Editor Plugin

**AutoSnap – Editor** is a lightweight Unreal Engine 5 plugin that enhances your level design workflow with hotkey-based snapping controls. It allows precise modular asset placement while dragging actors in the editor — without touching Unreal’s built-in grid snapping.

## Features

- Snap actors automatically.
- ⌨ Hotkey toggles for X, Y, Z axis snapping
- Snap distance control via Shift + Mouse Wheel
- Optional grid overlay (visual feedback)
- Toggle debug logs for tracking snap state
- Minimal, efficient C++/Blueprint-friendly setup

## Installation

If you installed this from the **Fab Marketplace**, Unreal will automatically place the plugin into your project's `Plugins` folder.

### 1. Enable the Plugin

Go to:

> You can also toggle it from the main menu:  
> ![image 41](https://github.com/user-attachments/assets/418c5026-e1cb-4cb8-a8c2-6d417edc3863) > ![image 44](https://github.com/user-attachments/assets/b1fb13b6-4808-477b-b5d6-84f99216917a)

### 2. Restart the Editor

You must restart the Unreal Editor for the plugin to activate.

## How It Works

- Enable AutoSnap via `Shift + G` and Disable Unreal Engine's Legacy Snapping Logic in editor.
- The plugin does **not** override or depend on native UE snapping.
- It uses your defined snap size and axis settings.
- Snap size can be dynamically increased or decreased.
- You can enable/disable snapping on individual axes (X, Y, Z).
- A visual grid or log feedback system is available.

## Editor Hotkeys

| Action                   | Hotkey                     |
| ------------------------ | -------------------------- |
| Toggle snapping globally | `Shift + G`                |
| Increase snap size       | `Shift + Mouse Wheel Up`   |
| Decrease snap size       | `Shift + Mouse Wheel Down` |
| Toggle X axis snapping   | `Shift + X`                |
| Toggle Y axis snapping   | `Shift + Y`                |
| Toggle Z axis snapping   | `Shift + Z`                |
| Toggle debug logs        | `Shift + D`                |

## Configuration Panel

After enabling the plugin, go to:

![image 42](https://github.com/user-attachments/assets/8c747712-5592-439e-8457-ed2844415049)

In the settings panel, you can configure:

- Snap Distance & Step Size
- Axis toggles
- Debug log options
- Grid visibility
- Hotkey bindings

![image 40 (1)](https://github.com/user-attachments/assets/8915497c-9b0a-419a-8931-42f9a4be64b2)

> Note: All hotkeys are combined with `Shift` (e.g., `Shift + X`, `Shift + D`, etc.)

## Disable Native UE Grid Snapping

When using **AutoSnap**, you should disable Unreal Engine’s **built-in grid snapping** to avoid conflicts.

AutoSnap provides its own snapping system, and leaving this toggle on may lead to inconsistent movement or double-snapping behavior.

To disable native snapping:

1. Locate the **Snapping Toolbar** in the top editor bar.
2. **Uncheck the grid snapping icon** (see below):

![image 45](https://github.com/user-attachments/assets/3eceb9bb-f389-4583-939c-6e353be4a620)

## UE Version Support

| Engine Version | Status                   |
| -------------- | ------------------------ |
| 5.3.x          | ✅ Tested                |
| 5.4.x          | ✅ Tested                |
| 5.5.x          | ✅ Tested                |
| 5.6+           | ⚠️ Not officially tested |

<div style="margin-top: 2rem;"></div>

<h2>Need Help?</h2>

<ul style="list-style: none; padding-left: 0;">
  <li>
    📬 <strong>Email:</strong>
    <span id="email" style="cursor: pointer; color: #00f; text-decoration: underline;" onclick="copyEmail()">
      Jobrogi@gmail.com
    </span>
    <span id="copiedMsg" style="color: green; margin-left: 10px; display: none;">✔️ Copied!</span>
  </li>
  <li>
    💬 <strong>Discord:</strong>
    <a href="https://discord.gg/AFVyqXBSRW" target="_blank" rel="noopener noreferrer">
      Join our community
    </a>
  </li>
  <li>
    🌐 <strong>Docs Hub:</strong>
    <a href="https://jobrogi.github.io/GhillieStudios" target="_blank" rel="noopener noreferrer">
      Ghillie Studios Website
    </a>
  </li>
</ul>

<blockquote>
  Built by Ghillie Studios.<br>
  All plugins support Unreal Engine 5.3–5.5 unless otherwise noted.
</blockquote>

<script>
  function copyEmail() {
    navigator.clipboard.writeText("Jobrogi@gmail.com").then(() => {
      const msg = document.getElementById("copiedMsg");
      msg.style.display = "inline";
      setTimeout(() => {
        msg.style.display = "none";
      }, 2000);
    });
  }
</script>
