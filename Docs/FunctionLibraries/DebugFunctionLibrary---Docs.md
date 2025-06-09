# Debug Function Library – Runtime Debug Toolkit

A powerful utility plugin providing 15+ Blueprint nodes to help developers debug gameplay systems, visualize trace results, and log categorized messages during development. Designed for fast iteration and clean project structure.

---

## Plugin Overview

| Feature Category      | Description                                                              |
| --------------------- | ------------------------------------------------------------------------ |
| Visual Debug Tools    | Draw arrows, shapes, paths, and 3D text directly in the game world       |
| Logging + Messaging   | Print tagged logs to screen, log to file, or track debug message history |
| Trace + Actor Helpers | Trace lines with feedback, inspect actor/component data at runtime       |
| Filterable Categories | Enable/disable debug categories in-game or via code                      |
| Runtime File Logging  | Save debug output to `Saved/Logs` with timestamps                        |

---

## Setup Instructions

### 1. Enable the Plugin

1. Open `Edit > Plugins` from the UE5 toolbar
2. Search for **Debug Function Library**
3. Enable the plugin and restart the editor if prompted

---

### 2. Access Blueprint Nodes

- Open any Blueprint (e.g. Actor, Component, Utility)
- Right-click in the Event Graph
- Navigate to: `Debug → Advanced`
- Select a node such as `PrintDebug`, `DrawDebugTextAtActor`, or `DebugTraceResult`

### 3. Sample Usage

Some of the most useful nodes include:

| Node Name                | Purpose                                             |
| ------------------------ | --------------------------------------------------- |
| `PrintDebugAutoCategory` | Auto-categorizes a message based on caller name     |
| `DrawDebugPath`          | Draws a series of connected points in 3D space      |
| `HighlightActorOnce`     | Draws a temporary box around an actor's bounds      |
| `LogDebugToFile`         | Saves text to `[Project]/Saved/Logs/` as .txt files |

## Function List

| Function Name                | Description                                                    |
| ---------------------------- | -------------------------------------------------------------- |
| `PrintDebug`                 | Logs a message to screen and output log with optional category |
| `PrintDebugAutoCategory`     | Auto-tags messages with the calling object or Blueprint name   |
| `DrawDebugTextAtActor`       | Places floating 3D text near an actor                          |
| `DebugTraceResult`           | Performs a trace and shows hit info visually                   |
| `DrawDebugCapsuleSimple`     | Draws a single capsule in the world                            |
| `DrawDebugArrowFromActor`    | Arrow based on direction from an actor (e.g. Forward, Up)      |
| `DrawDebugPath`              | Connects an array of points with lines (pathfinding, AI, etc.) |
| `DrawDebugSphereArray`       | Draws debug spheres at a list of points                        |
| `HighlightActorOnce`         | Draws a temporary bounds box on an actor                       |
| `LogActorComponentHierarchy` | Logs the hierarchy of an actor’s components                    |
| `RunDebugConsoleCommand`     | Runs a console command and logs it to the debug buffer         |
| `LogDebugToFile`             | Appends timestamped messages to `.txt` files                   |
| `GetRecentDebugMessages`     | Returns the current runtime debug log                          |
| `ClearAllDebugLines`         | Removes all debug visuals from the world                       |
| `SetDebugCategoryEnabled`    | Enables/disables a debug category at runtime                   |
| `IsDebugCategoryEnabled`     | Checks if a debug category is currently active                 |

## File Logging

When using `LogDebugToFile`:

- Logs are written to:  
  `YourProject/Saved/Logs/YourFile.txt`

- Each entry includes:
  - A timestamp
  - Category (if set)
  - Message contents

> Logs are automatically appended and folders auto-created as needed.

## Category Filtering

All debug functions support category-based filtering. You can use:

<pre><code> SetDebugCategoryEnabled("Combat", false)</pre></code>
