# AutoSnap – Runtime Changelog

Track all major updates and improvements to the AutoSnap – Runtime plugin.

<div style="margin-top: 2rem;"></div>

## [1.1.0] – Hotfixes + Bugs

- Fixed Content folders not generating
- Fixed `AutoSnapControllerComponent` crashing engine if it is added to anything other than a character class.

## [1.0.0] – Initial Release

### Features

- Runtime snapping system using `AutoSnapControllerComponent`
- World-aligned grid with dynamic actor-following behavior
- Drag-and-drop movement along X, Y, Z axes
- Plane snapping (XY, XZ, YZ) supported for top-down and 3D workflows
- Adjustable grid size via exposed Blueprint variable
- Grid material with crosshair indicators and visual plane
- Actor filtering using tags (optional)
- Easy integration via Blueprint-only workflow
- Default Blueprint assets automatically loaded if none are provided
- Designed for Unreal Engine Enhanced Input
- Fully compatible with packaged builds

### Modular Components

- `ARuntimeGizmoActor`: Handles snapping and visual drag logic
- `AGridVisualizerActor`: Projects world-space grid visuals
- `UAutoSnapControllerComponent`: Drop-in component for player/controller

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
