# Texture Atlas Builder

Texture Atlas Builder provides a streamlined way to pack multiple textures into a single texture atlas for efficient material usage. Ideal for voxel games, tile-based environments, and procedural generation systems, this plugin lets you batch and index 16x16 textures automatically — no manual packing required.

> Built for Unreal Engine 5.3+  
> Editor-Only | Blueprint Compatible | No External Dependencies

<div style="margin-top: 2rem;"></div>

#### Getting Started

Follow these steps to get up and running quickly:

#### Install the Plugin

- [Installation Guide](/docs/md/Docs---Installation)

### Finding the Tool

1. Ensure Plugin is fully installed and editor has been restarted
2. In the Main Unreal Engine 5 Editor, Go to the top Toolbar. `Window-> Open TextureAtlasBuilder`
   <img src="https://jobrogi.github.io/GhillieStudios/Docs/DocsImages/UE5Editor_TextureAtlasBuilderWindow.png" 
            alt="Epic Games Launcher Library View" 
            width="600" 
            style="margin-top: 1rem;" />
3. The window should automatically populate.
   <img src="https://jobrogi.github.io/GhillieStudios/Docs/DocsImages/UE5Editor_TextureAtlasBuilder.png" 
               alt="Epic Games Launcher Library View" 
               width="600" 
               style="margin-top: 1rem;" />

#### Building an Atlas

Once the Atlas Builder asset is set up:

1. Press the **Build Atlas** button.
2. A new texture asset will be generated.
3. You can now query UV bounds and tile indices via Blueprint or C++.

<div style="margin-top: 2rem;"></div>

#### Features Overview

| Feature              | Description                                                                 |
| -------------------- | --------------------------------------------------------------------------- |
| Auto Texture Packing | Automatically scans folders and packs 16x16 textures into a single atlas    |
| Tile Indexing System | Each tile receives a consistent index used for UV lookup or tile reference  |
| Resolution Filtering | Only compatible texture sizes are included, avoiding mismatched assets      |
| Raw Pixel Access     | Atlas is built using `FColor` pixel data and supports precise pixel control |
| Editor-Only Workflow | Designed to run during editor sessions only, avoiding runtime cost          |
| UV Lookup Functions  | Easily get UV bounds or tile index by name or index                         |
| Minimal Footprint    | No rendering hacks, no runtime hooks, no heavy asset dependencies           |

<div style="margin-top: 2rem;"></div>

#### Included Files

| File/Folder Path                                                       | Description                                        |
| ---------------------------------------------------------------------- | -------------------------------------------------- |
| `[ProjectRoot]/Plugins/TextureAtlasBuilder/Content/`                   | Optional materials for previewing tile lookups     |
| `[ProjectRoot]/Plugins/TextureAtlasBuilder/Source/AtlasBuilder/`       | Core editor module source code                     |
| `[ProjectRoot]/Plugins/TextureAtlasBuilder/Source/AtlasBuilderEditor/` | Editor-only logic and asset customization          |
| `[ProjectRoot]/Plugins/TextureAtlasBuilder/Public/UAtlasBuilder.h`     | UDataAsset class for atlas configuration and usage |
| `[ProjectRoot]/Plugins/TextureAtlasBuilder/Private/`                   | Pixel sampling and atlas generation implementation |

<div style="margin-top: 2rem;"></div>

#### Settings Overview

| Setting Name            | Location                | Description                                                             |
| ----------------------- | ----------------------- | ----------------------------------------------------------------------- |
| `InputFolderPath`       | UAtlasBuilder (Details) | Folder path to scan for source textures                                 |
| `OutputTextureName`     | UAtlasBuilder (Details) | Name of the generated atlas texture                                     |
| `TileSize`              | UAtlasBuilder (Details) | Size in pixels of each individual tile (defaults to 16x16)              |
| `BuildAtlas()`          | UAtlasBuilder           | Function to scan the folder, pack tiles, and generate the final texture |
| `GetTileUVBounds()`     | UAtlasBuilder           | Returns UV bounds for a tile index                                      |
| `FindTileIndexByName()` | UAtlasBuilder           | Returns the index of a tile based on texture name                       |
| `AtlasTexture`          | UAtlasBuilder           | The resulting packed UTexture2D after atlas build                       |

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

- Only textures that are square and match the configured `TileSize` are included in the atlas.
- Rebuilding the atlas will overwrite the existing `AtlasTexture` asset with updated content.
- For dynamic texture use in-game, export the UV bounds and tile indices for use in your systems.

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
