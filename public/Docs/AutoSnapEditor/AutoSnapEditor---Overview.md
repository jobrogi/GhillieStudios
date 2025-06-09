# AutoSnap – Editor Plugin

AutoSnap – Editor is a lightweight snapping plugin designed to speed up modular level design workflows inside the Unreal Engine editor. With intuitive hotkeys and dynamic axis toggles, it allows you to snap actors with precision while dragging — no reliance on UE’s native grid system required.

<div style="margin-top: 1rem;"></div>

## Key Highlights

- **Axis-Based Snapping**: Snap actors along X, Y, or Z individually
- **Dynamic Snap Step**: Increase or decrease snap size using the mouse wheel
- **Toggle System**: Enable/disable snapping and debug logs with hotkeys
- **Editor-Only**: Does not affect runtime builds or logic
- **Grid Overlay**: Optional visual feedback for grid alignment
- **Blueprint-Ready**: Cleanly integrates with UE5’s editor systems
- **Minimal Setup**: Plug and play — no configuration required

<div style="margin-top: 1rem;"></div>

## Included Components

- `AutoSnapEditorModule` – Handles plugin lifecycle and menu integration
- `FAutoSnapEditorManager` – Manages snapping state, hotkey input, and logic
- `UAutoSnapEditorSettings` – Configuration panel for setting snap step, axis toggles, and more
- Editor Input Mappings:
  - `Shift + G` – Toggle global snapping
  - `Shift + X/Y/Z` – Toggle snapping per axis
  - `Shift + Mouse Wheel` – Increase/decrease snap size
  - `Shift + D` – Toggle debug logging

<div style="margin-top: 1rem;"></div>

## Why Choose AutoSnap – Editor?

Designed for modular workflows, AutoSnap gives you full snapping control without the limitations or quirks of Unreal’s native grid logic. Perfect for architectural prototyping, blockouts, or precise placement of assets in top-down or grid-based projects.

<div style="margin-top: 1rem;"></div>

## Requirements

- Unreal Engine 5.3 or newer
- Installed and enabled via the Fab Marketplace or project Plugins folder

<div style="margin-top: 1rem;"></div>

For setup instructions and feature usage, refer to the full documentation inside the plugin folder.
