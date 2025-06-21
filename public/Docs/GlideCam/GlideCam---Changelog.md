# GlideCam – Changelog

This document outlines all major changes and additions to the GlideCam plugin.

<div style="margin-top: 2rem;"></div>

## [1.0.2] – Documentation Standardization

#### QoL Updates

- Updated Plugin Example Map
- Fixed Rotation (Not Snapping Rotation Just Regular Rotation)
- Adjusted Plugin Content To (Project Root -> Plugins -> Ghillie Studios -> GlideCam)
- Updated Product page with changelogs + New Links to new docs website.
- Updated Uplugin File to correct Docs website

<div style="margin-top: 2rem;"></div>

## [1.0.1] – Documentation Standardization

#### Updates

- Updated docs to a standardized template

<div style="margin-top: 2rem;"></div>

## [1.0.0] – Initial Release

#### Features

- Lightweight RTS-style camera system built entirely in Blueprints
- Smooth movement with spring arm and glide-style acceleration
- Zooming via scroll wheel
- Optional camera rotation using dedicated keys
- Adjustable speed for pan, zoom, and rotation via exposed Blueprint parameters
- Built-in support for Enhanced Input (UE 5.3+)
- Minimal setup: drop-in components with no additional configuration required
- Works with both click-to-move and strategy camera layouts
- Fully extendable in Blueprints

#### Included Blueprints

- `BP_GlideCamPawn` – Main camera pawn with spring arm and camera component
- `BP_GlideCamController` – Controller class with Enhanced Input mapping and logic
- `BP_GlideCamSettings` – Optional data asset to centralize camera settings
- `IMC_GlideCam` – Input Mapping Context with camera input bindings
- `IA_Zoom`, `IA_Pan`, `IA_Rotate`, etc. – Input actions for camera control
- `BP_GlideCamDemo` – Basic playable scene for testing and demonstration

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
