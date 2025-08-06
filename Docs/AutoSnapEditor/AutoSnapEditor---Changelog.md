# AutoSnapEditor Plugin – Changelog

This document outlines all major changes and additions to the AutoSnapEditor plugin.

<div style="margin-top: 2rem;"></div>

## [1.0.2] – Bug Fixes + Plugin Standardizations

#### Updates

- Updated to a more detailed version of the docs.
- Fixed bug where if you try to change the editor mode manually the settings will update accordingly.
- Changed Plugin name from AutoSnap - Editor to AutoSnapEditor.
- Changed all `AutoSnap` References to `AutoSnapEditor` with the exception of hidden classes.
- Updated listing fab page.
- Depreciated overview page.
- Added Icon to Edit Mode AutoSnapEditor.
- Added Plugin Icon.
- Fixed bug where you keep getting the `SnapDistanceSlider is null` log unless the settings menu is open.

<div style="margin-top: 2rem;"></div>

## [1.0.1] – Documentation Standardization

#### Updates

- Updated docs to a standardized template

<div style="margin-top: 2rem;"></div>

## [1.0.0] – Initial Release

#### Features

- Editor-only snapping plugin designed for level designers and modular asset placement
- Toggle snapping for individual axes (X, Y, Z) with hotkeys
- Adjustable snap distance using mouse wheel
- Visual feedback with optional grid overlay
- Debug logging system for snap state visibility
- Minimalistic, low-overhead C++ logic with full Blueprint compatibility
- Works independently of Unreal Engine’s native grid snapping system
- No external dependencies

#### Included Components

- `AutoSnapEditorModule` – Core module that manages plugin startup, menu integration, and global toggles
- `UAutoSnapEditorSettings` – Project-wide configuration accessible via Project Settings
- `FAutoSnapEditorManager` – Internal logic for snapping, input handling, and hotkey routing
- Grid material and mesh – Optional visuals for runtime feedback
- Editor keybindings:

  - `Shift + G` – Toggle snapping globally
  - `Shift + X/Y/Z` – Toggle snapping per axis
  - `Shift + Mouse Wheel` – Adjust snap distance
  - `Shift + D` – Toggle debug logs

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
