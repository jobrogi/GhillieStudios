# Texture Atlas Builder

Batch tile packing and UV lookup for devs — **no manual editing**, all automatic.

Built for voxel games, tile-based systems, and procedural environments, this plugin generates optimized texture atlases by scanning folders and combining same-sized textures into a single material-ready output — complete with UV lookup functions and editor-safe rebuilds.

<div style="margin-top: 1rem;"></div>

## Core Features

- **Auto Atlas Generation**: Scan folders and pack 16x16 (or custom-sized) textures into a single atlas
- **Tile Indexing System**: Assigns each tile a consistent index for lookup and UV sampling
- **Pixel-Perfect Packing**: Atlas built from raw `FColor` data for exact visual fidelity
- **Editor-Only Workflow**: Designed to build atlases during editor time, never runtime
- **Blueprint Access**: Query tile UV bounds or tile index by name in Blueprints
- **No External Dependencies**: Fully native and lightweight — no third-party systems
- **Material Integration Ready**: Works seamlessly with materials that use UV tiling logic

<div style="margin-top: 1rem;"></div>

## Dependency

- No additional dependencies.  
  This plugin works fully inside the editor and requires only core Unreal Engine features.

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
    <a href="https://jobrogi.github.io/GhillieStudios/#/docs/md/TextureAtlasBuilder---TextureAtlasBuilder---Docs" target="_blank" rel="noopener noreferrer">
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
