# Modular Interactions – Changelog

This document outlines major updates and improvements for the Modular Interactions plugin.

<div style="margin-top: 2rem;"></div>

## [1.0.0] – Initial Release

### Features

- Modular base actor with fully dynamic interaction setup
- Supports interaction prompts:
  - Press to Interact
  - Hold to Interact (progress bar)
  - Tooltip-style text
  - Icon-based or UMG-based prompts
- Enum-driven behavior system:
  - **Custom Event**: Fire your own Blueprint logic
  - **Widget Action**: Show/hide a widget actor
  - **Toggle Actor**: Toggle visibility or state of any target actor
- Detail panel automatically hides irrelevant properties based on selected Action Type
- Animation Montage support for triggering animations during interactions
- Single widget actor spawned and reused dynamically
- Native Enhanced Input support with rebinding
- Works with C++ and Blueprint projects
- Clean struct-based configuration (`FTypeSettings`, `FWidgetActionSettings`, etc.)

### Components Included

- `AInteractableActorBase` – Parent class with all logic
- `AInteractionWidgetActor` – Child actor that displays 3D UI prompts
- `IInteractableInterface` – Exposes core interaction events for advanced extensibility
- `UInteractionUtils` – Static utility library for reusable interaction logic
