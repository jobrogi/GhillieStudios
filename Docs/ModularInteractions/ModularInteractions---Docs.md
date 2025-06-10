# Modular Interactions Plugin

Modular Interactions is a flexible, Blueprint-compatible plugin for Unreal Engine 5 designed to simplify actor interactions using configurable widgets, timeline-based logic, and relay systems. It supports full UI customization, interaction routing, and animation playback with zero C++ required.

<div style="margin-top: 2rem;"></div>

## Getting Started

Follow these steps to get up and running quickly:

1. **Install the Plugin**

   - [Installation Guide](/docs/md/Docs---Installation)

2. **Initial Setup**

   - Enable the plugin under **Edit > Plugins > Modular Interactions**, then restart the editor.

3. **Using the Plugin**

   - Add `BP_InteractionHandlerComponent` to your player character.
   - Use `AInteractableActorBase` for interactive objects or `AInteractionRelayActor` to trigger others remotely.
   - Choose a `WidgetType` and `ActionType` per actor and assign optional widgets, icons, and toggle targets.

<div style="margin-top: 2rem;"></div>

## Features Overview

| Feature                      | Description                                                                |
| ---------------------------- | -------------------------------------------------------------------------- |
| Modular Actor Base           | All interactables inherit from a common base with dynamic behavior support |
| Relay System                 | Remotely trigger other actors with relay components                        |
| Enum-Driven Routing          | Customize logic with `EWidgetType` and `EActionType` enums                 |
| Widget Preview System        | See widgets live in the editor via child actor previews                    |
| Animation Support            | Manually trigger interaction animations                                    |
| Enhanced Input Integration   | Fully compatible with UE5's Enhanced Input system                          |
| Timeline Movement            | Reusable built-in timeline actions (move/rotate/etc.)                      |
| Custom Widget Support        | Assign your own UMG classes to interactables                               |
| Blueprint-Only Compatibility | Full setup and customization available without C++                         |

<div style="margin-top: 2rem;"></div>

## Included Files

| File/Folder Path                              | Description                                          |
| --------------------------------------------- | ---------------------------------------------------- |
| `/Plugins/ModularInteractions/Source/`        | All core logic and components                        |
| `/Plugins/ModularInteractions/Blueprints/`    | `InteractableActorBase`, `InteractionRelayActor`, UI |
| `/Plugins/ModularInteractions/Input/`         | Input Action and Context assets                      |
| `/Plugins/ModularInteractions/EditorWidgets/` | Optional preview utilities                           |

<div style="margin-top: 2rem;"></div>

## Settings Overview

| Setting Name             | Location              | Description                                              |
| ------------------------ | --------------------- | -------------------------------------------------------- |
| `bUseBuiltInAction`      | InteractableActorBase | Enables logic routing (WidgetAction, ToggleActor, etc.)  |
| `ActionType`             | InteractableActorBase | Chooses behavior: Toggle, Open Widget, Custom Event      |
| `bUseAnimation`          | InteractableActorBase | Enables triggering a montage animation                   |
| `WidgetType`             | InteractableActorBase | Visual widget style: Tooltip, Radial, Icon, or Custom    |
| `CustomWidgetClass`      | InteractableActorBase | Replaces built-in widgets when `WidgetType == Custom`    |
| `WidgetOffset` / `Scale` | InteractableActorBase | Adjusts widget transform in world space                  |
| `TargetActorToToggle`    | InteractableActorBase | Sets which actor is affected by ToggleActor logic        |
| `WidgetToOpen`           | InteractableActorBase | Assigns UMG widget when ActionType is WidgetAction       |
| `TooltipText` / `Icon`   | InteractableActorBase | Text/Icon customization for Tooltip/IconPrompt types     |
| `TargetActors`           | InteractionRelayActor | Actors to activate remotely                              |
| `AttachmentMode`         | InteractionRelayActor | How the relay follows or snaps to other actors           |
| `bTriggerAllTargets`     | InteractionRelayActor | Toggles whether to call all targets or just one by index |

<div style="margin-top: 2rem;"></div>

## Engine Compatibility

| Unreal Engine Version | Supported                |
| --------------------- | ------------------------ |
| 5.3                   | ✅                       |
| 5.4                   | ✅                       |
| 5.5                   | ✅                       |
| 5.6+                  | ⚠️ Not officially tested |

<div style="margin-top: 2rem;"></div>

## Notes

- Create interactables by subclassing `InteractableActorBase`.
- Use enums like `EWidgetType` and `EActionType` to control visual and logic behavior.
- Relay actors (`InteractionRelayActor`) forward interaction logic to one or more interactables.
- All interaction events (Montage start, complete, widget logic) must be handled in Blueprint.
- Timeline-style actions such as moving or rotating actors can be triggered directly with built-in logic.

### Animation Events (Manually Implemented)

| Event Name           | Triggered When     | Purpose                          |
| -------------------- | ------------------ | -------------------------------- |
| Play Montage Request | Interaction Begins | Starts animation playback        |
| Montage Playing      | Montage Starts     | For input lock or feedback logic |
| Montage Completed    | Montage Ends       | Finalize state (e.g., open door) |

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
```
