# AutoSnap – Runtime

AutoSnap – Runtime brings powerful, grid-based snapping and transform controls to runtime actors in your Unreal Engine project. Designed for user-generated content workflows, in-game editors, or simulation-style building systems, this plugin gives developers precise, hotkey-controlled actor manipulation and snapping without needing the editor.

> Built for Unreal Engine 5.3+  
> Runtime-Only | Blueprint Compatible | No External Dependencies

<div style="margin-top: 2rem;"></div>

## Getting Started

Follow these steps to get up and running quickly:

#### Install the Plugin

- [Installation Guide](/docs/md/Docs---Installation)

#### Initial Setup

- Enable the plugin under **Edit > Plugins > AutoSnap – Runtime**, then restart the editor.
- Add the `AutoSnapControllerComponent` to your player character or controller Blueprint.

#### Using the Plugin

The `AutoSnapControllerComponent` is designed **exclusively for Character classes**.  
If you add it to any other type of actor (such as a Pawn or custom AActor), the component will **automatically disable itself** at runtime to prevent errors or crashes.

When placed on a valid Character Blueprint, the component will:

- Spawn the gizmo and grid automatically at runtime
- Handle all Enhanced Input bindings and grid-snapping logic
- Automatically assign default plugin Blueprint assets if none are specified

By default, all asset and input references in the component’s **Details Panel** are left blank.  
If they remain blank at runtime, the system will **automatically load default versions** of the following:

- **Grid Visualizer Class**: `BP_GridVisualizer`
- **Runtime Gizmo Class**: `BP_Gizmo`
- **Input Mapping Context**: `IMC_AutoSnap`
- **Select Action**: `IA_LeftClick`

This means you **don’t need to create or assign your own assets** unless you want to customize behavior or visuals.  
The plugin will still work out of the box with no extra setup.

**Optional:**  
To limit snapping to specific actors, enable **“Require Actor Tag”** in the Details panel and set the tag to:  
`SnapSelectable`

<div style="margin-top: 2rem;"></div>

## Features Overview

| Feature                   | Description                                                      |
| ------------------------- | ---------------------------------------------------------------- |
| Grid-Snapped Movement     | Move actors in world space using snap intervals                  |
| Runtime Gizmo             | Drag actors with X/Y/Z arrows and XY/XZ/YZ plane handles         |
| Dynamic Grid              | Grid follows the currently selected actor                        |
| Adjustable Snap Size      | Customize grid unit size in the Details panel                    |
| Tag-Based Selection       | Limit interaction to tagged actors                               |
| Blueprint Friendly        | Works entirely via Blueprint, no C++ knowledge required          |
| Hover Highlighting        | Optional visual feedback when mouse hovers over gizmo elements   |
| Input Mapping Integration | Uses Enhanced Input actions with default bindings included       |
| Defaults Fallback         | Plugin auto-assigns defaults at runtime if nothing is configured |

<div style="margin-top: 2rem;"></div>

## Included Files

| File/Folder Path                       | Description                                 |
| -------------------------------------- | ------------------------------------------- |
| `/Plugins/AutoSnapRuntime/Blueprints/` | `BP_Gizmo`, `BP_GridVisualizer`             |
| `/Plugins/AutoSnapRuntime/Components/` | `AutoSnapControllerComponent` for logic     |
| `/Plugins/AutoSnapRuntime/Input/`      | `IMC_AutoSnap`, `IA_LeftClick`, drag inputs |

<div style="margin-top: 2rem;"></div>

## Settings Overview

| Setting Name              | Location                              | Description                                             |
| ------------------------- | ------------------------------------- | ------------------------------------------------------- |
| `GizmoClass`              | AutoSnapControllerComponent (Details) | Actor gizmo used for dragging                           |
| `GridVisualizerClass`     | AutoSnapControllerComponent (Details) | Actor grid used for snapping feedback                   |
| `InputMappingContext`     | AutoSnapControllerComponent (Details) | Input bindings for interaction                          |
| `bUseActorTagRequirement` | AutoSnapControllerComponent (Details) | Restrict snap logic to actors with a specific tag       |
| `RequiredActorTag`        | AutoSnapControllerComponent (Details) | Tag used for selectable actors (e.g., `SnapSelectable`) |

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

- Hover feedback requires an optional trace channel named `Gizmo` (see below).
- Default Blueprint classes are auto-assigned if you leave them empty.
- All inputs are Enhanced Input–based. You can override them with your own actions or contexts.

### Optional Trace Channel for Hover FX

To enable hover color feedback on gizmo parts:

1. Go to **Edit > Project Settings > Collision**
2. Add a new Trace Channel:
   - **Name**: `Gizmo`
   - **Default Response**: `Block`

Then update the collision preset in `BP_Gizmo` to block the `Gizmo` channel.

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
