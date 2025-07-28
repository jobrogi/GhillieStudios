# AutoSnap – Runtime

AutoSnap – Runtime brings powerful, grid-based snapping and transform controls to runtime actors in your Unreal Engine project. Designed for user-generated content workflows, in-game editors, or simulation-style building systems, this plugin gives developers precise, hotkey-controlled actor manipulation and snapping without needing the editor.

> Built for Unreal Engine 5.3+  
> Runtime-Only | Blueprint Compatible | No External Dependencies

<div style="margin-top: 2rem;"></div>

#### Getting Started

Follow these steps to get up and running quickly:

#### Install the Plugin

- [Installation Guide](/docs/md/Docs---Installation)

#### Initial Setup

- Enable the plugin under **Edit > Plugins > AutoSnap – Runtime**, then restart the editor.
- Add the `AutoSnapControllerComponent` to your player character or controller Blueprint.

#### Getting to plugin content

Recently we just added an easier way to access our content. These are the steps to getting to our content after this new update!

Step 1: After installing AutoSnapRuntime go to the main editor then at the toolbar at the top go to `Window -> Open AutoSnapRuntime Contents`
<img src="https://jobrogi.github.io/GhillieStudios/Docs/DocsImages/UE5Editor_Window.png" 
        alt="Unreal Engine Window View" 
        width="600" 
        style="margin-top: 1rem;" />

Step 2: Pressing that button will open the content drawer where the AutoSnapRuntime Plugin content lies!
<img src="https://jobrogi.github.io/GhillieStudios/Docs/DocsImages/UE5Editor_Content.png" 
        alt="Unreal Engine Window View" 
        width="600" 
        style="margin-top: 1rem;" />

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

#### Features Overview

| Feature                   | Description                                                                  |
| ------------------------- | ---------------------------------------------------------------------------- |
| Grid-Snapped Movement     | Move actors in world space using snap intervals                              |
| Runtime Gizmo             | Drag actors with X/Y/Z arrows and XY/XZ/YZ plane handles                     |
| Gizmo Rotation Logic      | Gizmo automatically aligns to the camera or actor rotation based on settings |
| Dynamic Grid              | Grid follows the currently selected actor                                    |
| Adjustable Snap Size      | Customize grid unit size in the Details panel                                |
| Tag-Based Selection       | Limit interaction to tagged actors                                           |
| Blueprint Friendly        | Works entirely via Blueprint, no C++ knowledge required                      |
| Hover Highlighting        | Optional visual feedback when mouse hovers over gizmo elements               |
| Input Mapping Integration | Uses Enhanced Input actions with default bindings included                   |
| Built-In Camera Character | Includes a ready-to-use camera character Blueprint for testing               |
| Example Showcase Level    | Example map included to demonstrate full system functionality                |
| Defaults Fallback         | Plugin auto-assigns defaults at runtime if nothing is configured             |

<div style="margin-top: 2rem;"></div>

#### Included Files

| File/Folder Path                                                  | Description                                            |
| ----------------------------------------------------------------- | ------------------------------------------------------ |
| `[ProjectRoot]/Engine/Plugins/AutoSnapRuntime/Content/BPs/`       | Blueprint classes like `BP_Gizmo`, `BP_GridVisualizer` |
| `[ProjectRoot]/Engine/Plugins/AutoSnapRuntime/Content/Input/`     | Input assets such as `IMC_AutoSnap`, `IA_LeftClick`    |
| `[ProjectRoot]/Engine/Plugins/AutoSnapRuntime/Content/Maps/`      | Demo or debug maps related to runtime snapping         |
| `[ProjectRoot]/Engine/Plugins/AutoSnapRuntime/Content/Materials/` | Materials used by gizmos or visual helpers             |
| `[ProjectRoot]/Engine/Plugins/AutoSnapRuntime/Content/SM/`        | Static meshes for gizmos or grid visuals               |
| `[ProjectRoot]/Engine/Plugins/AutoSnapRuntime/Components/`        | C++ class `AutoSnapControllerComponent` and core logic |

<div style="margin-top: 2rem;"></div>

#### Settings Overview

| Setting Name              | Location                              | Description                                                       |
| ------------------------- | ------------------------------------- | ----------------------------------------------------------------- |
| `bEnableRuntimeSnap`      | AutoSnapControllerComponent (Details) | Enables snapping behavior during runtime.                         |
| `bGizmoAlignWithCamera`   | AutoSnapControllerComponent (Details) | Determines whether the gizmo aligns with the camera rotation.     |
| `GizmoSnapTolerance`      | AutoSnapControllerComponent (Details) | Distance tolerance when snapping to grid or surfaces.             |
| `bSnapOnSelect`           | AutoSnapControllerComponent (Details) | Automatically snaps the actor to the grid when selected.          |
| `TraceDistance`           | AutoSnapControllerComponent (Details) | Distance for the mouse trace used to detect snap targets.         |
| `bDebugMouseTrace`        | AutoSnapControllerComponent (Details) | Enables debug visualization for the mouse trace.                  |
| `HoveredActor`            | AutoSnapControllerComponent (Details) | The actor currently hovered by the trace. Read-only.              |
| `GridSize`                | AutoSnapControllerComponent (Details) | World space grid size used for snapping.                          |
| `RuntimeGizmoClass`       | AutoSnapControllerComponent (Details) | Gizmo actor class used to represent selected object manipulation. |
| `GizmoOffset`             | AutoSnapControllerComponent (Details) | Positional offset applied to the runtime gizmo.                   |
| `GizmoScale`              | AutoSnapControllerComponent (Details) | Uniform scale applied to the runtime gizmo actor.                 |
| `GridVisualizerClass`     | AutoSnapControllerComponent (Details) | Visual class used to represent the snapping grid at runtime.      |
| `Default Grid Plane `     | AutoSnapControllerComponent (Details) | Sets a default fallback plane + initial grid plane                |
| `AxisColors`              | AutoSnapControllerComponent (Details) | Optional color overrides for visualizing each axis.               |
| `InputMapping`            | AutoSnapControllerComponent (Details) | Mapping context defining the input schema for snapping logic.     |
| `SelectAction`            | AutoSnapControllerComponent (Details) | Input action used to trigger selection or interaction.            |
| `bUseActorTagRequirement` | AutoSnapControllerComponent (Details) | Restricts selection to actors that have a specific tag.           |
| `RequiredActorTags`       | AutoSnapControllerComponent (Details) | Array of actor tags required for an actor to be selectable.       |

<div style="margin-top: 2rem;"></div>

#### Engine Compatibility

| Unreal Engine Version | Supported |
| --------------------- | --------- |
| 5.3                   | ✅        |
| 5.4                   | ✅        |
| 5.5                   | ✅        |
| 5.6+                  | ✅        |

<div style="margin-top: 2rem;"></div>

#### Notes

- Actors must have their **Mobility** set to **Moveable** in the Details panel to support runtime snapping.
- Hover feedback requires an optional trace channel named `Gizmo` (see below).
- Default Blueprint classes are auto-assigned if you leave them empty.
- All inputs are Enhanced Input–based. You can override them with your own actions or contexts.

#### Optional Trace Channel for Hover FX

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
