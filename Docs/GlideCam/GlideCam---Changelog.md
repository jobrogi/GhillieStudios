# GlideCam – Changelog

This document outlines all major changes and additions to the GlideCam plugin.

<div style="margin-top: 2rem;"></div>

## [1.0.0] – Initial Release

### Features

- Lightweight RTS-style camera system built entirely in Blueprints
- Smooth movement with spring arm and glide-style acceleration
- Zooming via scroll wheel
- Optional camera rotation using dedicated keys
- Adjustable speed for pan, zoom, and rotation via exposed Blueprint parameters
- Built-in support for Enhanced Input (UE 5.3+)
- Minimal setup: drop-in components with no additional configuration required
- Works with both click-to-move and strategy camera layouts
- Fully extendable in Blueprints

### Included Blueprints

- `BP_GlideCamPawn` – Main camera pawn with spring arm and camera component
- `BP_GlideCamController` – Controller class with Enhanced Input mapping and logic
- `BP_GlideCamSettings` – Optional data asset to centralize camera settings
- `IMC_GlideCam` – Input Mapping Context with camera input bindings
- `IA_Zoom`, `IA_Pan`, `IA_Rotate`, etc. – Input actions for camera control
- `BP_GlideCamDemo` – Basic playable scene for testing and demonstration
