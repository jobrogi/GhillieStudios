# AutoSnap – Runtime

<div style="margin-top: 1rem;"></div>

**AutoSnap – Runtime** brings powerful, grid-based snapping and transform controls to runtime actors in your Unreal Engine project. Designed for user-generated content workflows, in-game editors, or simulation-style building systems, this plugin gives developers precise, hotkey-controlled actor manipulation and snapping without needing the editor.

> Built for Unreal Engine 5.3+
> Runtime-Only | Blueprint Compatible | No External Dependencies

<div style="margin-top: 1rem;"></div>

## Features Overview

<div style="margin-top: 1rem;"></div>

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

## Getting Started

<div style="margin-top: 1rem;"></div>

### 1. Enable the Plugin

In the UE editor, go to **Edit > Plugins**, search for `AutoSnap - Runtime`, and enable it. Restart the editor if prompted.

### 2. Add the Component

In your player character or controller Blueprint, add the `AutoSnapControllerComponent`.

The component will automatically:

- Spawn the runtime gizmo and grid visualizer
- Handle input mapping and selection
- Snap tagged actors during drag

### 3. Assign Required Fields

In the component's Details panel:

- **Grid Visualizer Class**: `BP_GridVisualizer`
- **Runtime Gizmo Class**: `BP_Gizmo`
- **Input Mapping Context**: `IMC_AutoSnap`
- **Select Action**: `IA_LeftClick`
- _(Optional)_ Enable "Require Actor Tag" and assign: `SnapSelectable`

If left empty, plugin will assign defaults during runtime.

## Input Actions (Enhanced Input)

<div style="margin-top: 1rem;"></div>

| Action Name    | Description                      |
| -------------- | -------------------------------- |
| `IA_LeftClick` | Select or deselect actor         |
| `IA_DragX`     | Drag selected actor along X axis |
| `IA_DragY`     | Drag selected actor along Y axis |
| `IA_DragZ`     | Drag selected actor along Z axis |
| `IA_DragXY`    | Drag actor along XY plane        |
| `IA_DragXZ`    | Drag actor along XZ plane        |
| `IA_DragYZ`    | Drag actor along YZ plane        |
| `IA_SnapUp`    | Increase grid snap unit size     |
| `IA_SnapDown`  | Decrease grid snap unit size     |

You can assign your own input actions and mapping context if preferred.

## Trace Channel Setup (Optional for Hover FX)

<div style="margin-top: 1rem;"></div>

This plugin supports a custom trace channel named `Gizmo` for **hover feedback only**.

If not configured, the system still works — just without arrow color changes.

### How to Add the Channel:

1. Go to **Edit > Project Settings**
2. Find the **Collision** category
3. Add a **New Trace Channel**:

   - Name: `Gizmo`
   - Default Response: `Block`

### How to Apply It (Optional):

In the `BP_Gizmo` Blueprint:

- Set **Collision Preset** to `Custom`
- Under **Trace Responses**, set `Gizmo` to `Block`

## Result

When you hover over a gizmo arrow/plane in runtime, its color will change to indicate interactivity.
This improves UX feedback and makes the tool more responsive for end users.

## Plugin Folder Contents

<pre><code>AutoSnapRuntime/
├── Blueprints/
│   ├── BP_Gizmo
│   ├── BP_GridVisualizer
├── Components/
│   └── AutoSnapControllerComponent
├── Input/
│   ├── IMC_AutoSnap
│   └── IA_LeftClick, IA_DragX, IA_SnapUp...</code></pre>
<div style="margin-top: 2rem;"></div>

<h2>Need Help?</h2>

<ul style="list-style: none; padding-left: 0;">
  <li>
    📬 <strong>Email:</strong>
    <span id="email" style="cursor: pointer; color: #00f; text-decoration: underline;" onclick="copyEmail()">
      Jobrogi@gmail.com
    </span>
    <span id="copiedMsg" style="color: green; margin-left: 10px; display: none;">✔️ Copied!</span>
  </li>
  <li>
    💬 <strong>Discord:</strong>
    <a href="https://discord.gg/AFVyqXBSRW" target="_blank" rel="noopener noreferrer">
      Join our community
    </a>
  </li>
  <li>
    🌐 <strong>Docs Hub:</strong>
    <a href="https://jobrogi.github.io/GhillieStudios" target="_blank" rel="noopener noreferrer">
      Ghillie Studios Website
    </a>
  </li>
</ul>

<blockquote>
  Built by Ghillie Studios.<br>
  All plugins support Unreal Engine 5.3–5.5 unless otherwise noted.
</blockquote>

<script>
  function copyEmail() {
    navigator.clipboard.writeText("Jobrogi@gmail.com").then(() => {
      const msg = document.getElementById("copiedMsg");
      msg.style.display = "inline";
      setTimeout(() => {
        msg.style.display = "none";
      }, 2000);
    });
  }
</script>
