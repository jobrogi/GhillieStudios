# Trace Function Library – Advanced Tracing Plugin

A streamlined plugin offering a complete set of Blueprint-callable trace and sweep functions tailored for FPS, third-person, and RTS games in Unreal Engine 5.4+.  
This library removes boilerplate tracing logic and adds debug-friendly, flexible alternatives to standard line, sweep, and visibility checks.

## Plugin Overview

| Feature Category     | Description                                                         |
| -------------------- | ------------------------------------------------------------------- |
| Blueprint-Callable   | All functions are exposed to Blueprints for fast prototyping        |
| Camera Trace Support | Includes FPS, Third-Person, and RTS style trace modes               |
| Shape Tracing        | Supports line, sphere, cone, and sweep-based traces                 |
| Debug Visualization  | Draw lines, shapes, and impact points to aid development            |
| Utility Functions    | Includes ground detection, socket tracing, and deprojection helpers |

## Installation

1. Purchase or download the plugin from the Fab Marketplace
2. Open your Unreal project and go to `Edit > Plugins`
3. Enable **Trace Function Library** and restart the editor

## Quick Start

All functions are available in Blueprint under:

> **Trace Function Library**

### Blueprint Usage:

1. Open any Blueprint (e.g. Character, Controller, Utility)
2. Right-click in the graph and search for trace nodes
3. Choose from the **Trace Function Library** category
4. Toggle `bDrawDebug` to visualize during gameplay

## Function List

| Function Name                 | Description                                                              |
| ----------------------------- | ------------------------------------------------------------------------ |
| `TraceFromCameraByType`       | Line trace from player’s viewpoint (FPS, third-person, or RTS mode)      |
| `SphereTraceFromCameraByType` | Sphere trace variant for wider collision                                 |
| `LineTraceMultiFromCamera`    | Multi-hit line trace from the player camera                              |
| `SweepFromActorShape`         | Shape-based sweep from actor’s origin using box, sphere, or capsule      |
| `TraceGroundBelowActor`       | Downward trace to detect ground surface beneath the actor                |
| `TraceCeilingAboveActor`      | Upward trace to detect ceilings or overhead blockers                     |
| `GetCameraTraceStartEnd`      | Gets start and end points based on selected camera trace mode            |
| `DrawDebugTraceShape`         | Renders debug visual for shape traces (impact, sweep direction, etc.)    |
| `GetRandomGroundPointNearby`  | Finds a walkable location near a given point                             |
| `ConeTraceMulti`              | Cone-shaped sweep for vision detection or spread checks                  |
| `TraceFromSocket`             | Performs trace from socket on skeletal mesh (useful for weapons/effects) |

## Camera Trace Modes

**Enum: `ECameraTraceType`**

- `FPS` → Trace from camera forward vector
- `ThirdPerson` → Trace from pawn's position and forward
- `RTS` → Trace from deprojected mouse cursor on screen

## Debug Options

Most functions accept these common debug settings:

- `bDrawDebug`: Enable/disable debug visuals
- `TraceColor`: Line color when nothing is hit
- `HitColor`: Color of the impact point
- `DebugDuration`: Time in seconds the visuals stay active

## Support

- **Email**: Jobrogi@gmail.com
- **Discord**: [Ghillie Studios Community](https://discord.gg/6xmYHNKk)

## License

This plugin is sold for commercial use within Unreal Engine projects.  
Do not redistribute source or compiled binaries outside Fab Marketplace.

## Version Compatibility

Compatible with:

- Unreal Engine 5.3
- Unreal Engine 5.4
- Unreal Engine 5.5
- Unreal Engine 5.6
