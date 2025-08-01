Changelog

# TextureAtlasBuilder Changelog

Track all major updates and improvements to the TextureAtlasBuilder plugin.

<div style="margin-top: 2rem;"></div>

## [1.0.0] – Initial Release

#### Features

- Automatically combines multiple 16x16 textures into a single optimized texture atlas.

- Auto-maps each tile with indexed UVs and supports runtime or editor-time queries.

- Editor-safe updates and rebuilds using raw FColor pixel data.

- Built-in tile filtering by resolution and path — no extra setup needed.

- Folder-scanning system uses the Asset Registry to gather source textures.

- Lightweight and minimal — no engine overrides or rendering hacks.

#### Modular Components

| Component                             | Description                                                                                                                 |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `UAtlasBuilder`                       | Editor-only DataAsset class responsible for scanning folders, filtering textures, building the atlas, and storing metadata. |
| `BuildTextureAtlas()`                 | Core logic that generates a `UTexture2D` using raw pixel data from source textures.                                         |
| `GetTileUVBounds(int32 TileIndex)`    | Retrieves precise UV bounds for any packed tile at runtime or in editor tools.                                              |
| `FindTileIndexByName(FName TileName)` | Allows fast lookup of tile index based on asset name.                                                                       |

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
