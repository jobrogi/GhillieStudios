# AutoSnap – Editor Plugin – Changelog

This document outlines all major changes and additions to the AutoSnap – Editor plugin.

<div style="margin-top: 2rem;"></div>

## [1.0.0] – Initial Release

### Features

- Editor-only snapping plugin designed for level designers and modular asset placement
- Toggle snapping for individual axes (X, Y, Z) with hotkeys
- Adjustable snap distance using mouse wheel
- Visual feedback with optional grid overlay
- Debug logging system for snap state visibility
- Minimalistic, low-overhead C++ logic with full Blueprint compatibility
- Works independently of Unreal Engine’s native grid snapping system
- No external dependencies

### Included Components

- `AutoSnapEditorModule` – Core module that manages plugin startup, menu integration, and global toggles
- `UAutoSnapEditorSettings` – Project-wide configuration accessible via Project Settings
- `FAutoSnapEditorManager` – Internal logic for snapping, input handling, and hotkey routing
- Grid material and mesh – Optional visuals for runtime feedback
- Editor keybindings:
  - `Shift + G` – Toggle snapping globally
  - `Shift + X/Y/Z` – Toggle snapping per axis
  - `Shift + Mouse Wheel` – Adjust snap distance
  - `Shift + D` – Toggle debug logs
