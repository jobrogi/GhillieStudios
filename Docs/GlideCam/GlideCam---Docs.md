# GlideCam – Lite RTS Camera System

> **Note:**  
> We have transitioned to a **plugin-based installation** method via the Fab Marketplace. This change was made to resolve reliability issues with our previous import-based setup, which caused frequent asset path errors and inconsistent behavior between projects.
>
> After installation through the Fab tab, you can find all included assets under:

> <pre><code> /All/EngineData/Plugins/GlideCam </pre></code>
>
> This is expected behavior for engine-installed plugins. If you'd prefer to work directly inside your main content folder, you may manually migrate selected assets into `/Game/` — or use the included utility tools to streamline the process.

## Installation (FAB Marketplace)

1. **Purchase and add the plugin** via the [Fab Marketplace](https://www.fab.com/portal/listings/e2c9ffb0-84cc-49fa-8ab4-3b98a4187ae3/edit).

2. **Inside the Epic Games Launcher**, go to the **Library** tab → locate `GlideCam` → click **Add to Project**.

![image](https://github.com/user-attachments/assets/362ad79b-a859-4099-8f73-b4273c0984b1)

3. In your Unreal Engine project, go to `Edit → Plugins`, search for **GlideCam**, and ensure the plugin is **enabled**.

![image](https://github.com/user-attachments/assets/f1827add-2b48-4f6b-9206-4eb7fd0ddf0b)

4. **Restart the engine** when prompted.

5. After restarting, the plugin content will appear under:

`/All/EngineData/Plugins/GlideCam`

## How To Use

Theres two ways to use this plugin.

1. Go to your world settings window -> GameMode Override

   ![image](https://github.com/user-attachments/assets/5bd8259f-2b58-4e15-a678-1d6793fd89c3)

   -> Then Select `BP_PlayerCharacterGaemode`

   ![image](https://github.com/user-attachments/assets/afcb630f-da79-4029-8e66-816bf0db287f)

   -> Test out your new Camera Controller!

2. Go to `/All/EngineData/Plugins/GlideCam`
   -> Here you have access to all the content from GlideCam Lite.

   ![image](https://github.com/user-attachments/assets/5d9736f2-2bea-4e84-95c2-02cf9c434a29)
   ![image](https://github.com/user-attachments/assets/e3a55711-a376-4be2-a486-09997107d05f)
   ![image](https://github.com/user-attachments/assets/c512f855-91d2-483e-b8a1-9ee43ea09513)

   -> From here feel free to Modify and BPs or Inputs via the `Input Actions` Or `Input Mapping Content`!
   -> Actual Setup is the same as 1.

## Default Controls

| Action               | Input               |
| -------------------- | ------------------- |
| Move Camera          | W / A / S / D       |
| Rotate Camera        | Q (left), E (right) |
| Reset Orientation    | R                   |
| Zoom                 | Mouse Scroll Wheel  |
| Drag Pan (RTS-style) | Right Mouse Drag    |

All input actions can be customized through the `IMC_GlideCamControls` mapping context.

## Key Features

- ✅ Smooth glide-based camera movement
- ✅ Zooming and rotation with inertia
- ✅ RTS-style mouse drag panning
- ✅ Blueprint-only system — no C++ required
- ✅ Fully modular and easy to integrate
- ✅ Enhanced Input support out-of-the-box

## Components

- `BP_GlideCamPawn`: Main camera controller Blueprint.
- `IMC_GlideCamControls`: Input Mapping Context.
- `IA_*`: Input Actions for movement, rotation, etc.

## Notes

- ⚠️ **Requires Enhanced Input plugin** — this must be enabled in your project.
- You can expose camera speed, damping, and other settings via Blueprint variables.
- Snapping angle and zoom limits can be customized in the editor.

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
