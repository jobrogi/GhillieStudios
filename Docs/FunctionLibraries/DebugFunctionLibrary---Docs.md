# Debug Function Library – Runtime Debug Toolkit

A powerful utility plugin providing 15+ Blueprint nodes to help developers debug gameplay systems, visualize trace results, and log categorized messages during development. Designed for fast iteration and clean project structure.

<div style="margin-top: 2rem;"></div>

## Getting Started

Follow these steps to get up and running quickly:

1. **Install the Plugin**

   - [Installation Guide](/docs/md/Docs---Installation)

2. **Initial Setup**

   - Enable the plugin under **Edit > Plugins > Debug Function Library**, then restart the editor.

3. **Using the Plugin**

   - Open any Blueprint (e.g. Actor, Component, or Utility).
   - Right-click in the Event Graph and search under `Debug → Advanced`.
   - Use nodes like `PrintDebug`, `DrawDebugPath`, or `LogDebugToFile`.
   - Categories can be enabled/disabled at runtime using `SetDebugCategoryEnabled`.

<div style="margin-top: 2rem;"></div>

## Features Overview

| Feature Category      | Description                                                              |
| --------------------- | ------------------------------------------------------------------------ |
| Visual Debug Tools    | Draw arrows, shapes, paths, and 3D text directly in the game world       |
| Logging + Messaging   | Print tagged logs to screen, log to file, or track debug message history |
| Trace + Actor Helpers | Trace lines with feedback, inspect actor/component data at runtime       |
| Filterable Categories | Enable/disable debug categories in-game or via code                      |
| Runtime File Logging  | Save debug output to `Saved/Logs` with timestamps                        |

<div style="margin-top: 2rem;"></div>

## Included Files

| File/Folder Path                               | Description                                |
| ---------------------------------------------- | ------------------------------------------ |
| `/Plugins/DebugFunctionLibrary/Source/`        | C++ source for all Blueprint-exposed nodes |
| `/Plugins/DebugFunctionLibrary/Blueprints/`    | Example Blueprints (if included)           |
| `/Plugins/DebugFunctionLibrary/Documentation/` | Internal documentation and help content    |

<div style="margin-top: 2rem;"></div>

## Settings Overview

| Setting Name              | Location                       | Description                                                  |
| ------------------------- | ------------------------------ | ------------------------------------------------------------ |
| `SetDebugCategoryEnabled` | Runtime (Blueprint or Console) | Enables or disables specific debug categories                |
| `LogDebugToFile`          | Runtime (Blueprint)            | Logs messages to `.txt` files inside `Saved/Logs/` directory |
| `ClearAllDebugLines`      | Runtime (Blueprint)            | Clears all debug shapes and visuals from the world           |
| `GetRecentDebugMessages`  | Runtime (Blueprint)            | Retrieves all logs stored in the debug system’s buffer       |

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

- Most nodes are Blueprint-only and require no C++ knowledge.
- All logs written with `LogDebugToFile` include timestamps and category names.
- Debug visuals can be toggled or cleared entirely at runtime.
- Use `SetDebugCategoryEnabled("YourCategory", false)` to disable a specific group of logs or visuals during testing.

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
