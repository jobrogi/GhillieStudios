# RTSCamPro – Changelog

This document lists all notable changes to the RTSCamPro plugin.

<div style="margin-top: 2rem;"></div>

## [1.0.0] – Initial Release

#### Base Features

- Fully Blueprint-based RTS-style camera controller
- Supports panning, zooming, rotation, and tilt
- Edge scrolling with customizable bounds
- Camera state hotkeys (save/load)
- Modular function library for camera logic
- Enhanced Input ready with rebind support
- Multiplayer compatible
- Clean sample map with commented setup

#### Structure

- `RTSCamProPawn`
- `RTSCamProPlayerController`
- `URTSCameraMovementLibrary`
- Input Action mappings
- Demo map and UI helpers

#### Notes

- Built for Unreal Engine 5.3+
- Tested in UE 5.4
- Compatible with packaged builds and multiplayer

#### Upcoming Feature Changes

- Disable Bounds by default
- Add an option to disable loading last saved camera position on `begin play`
- Add Optional UX label based on the tag features

<div style="margin-top: 2rem;"></div>
