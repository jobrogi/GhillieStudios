# AutoSnap – Runtime

Grid-snapping and transform gizmo for players — **no editor**, all runtime.

Designed for sandbox builders, UGC editors, simulation tools, and more, this plugin enables intuitive actor selection, dragging, and snapping at runtime — with full Blueprint integration and zero C++ required.

<div style="margin-top: 1rem;"></div>

## Core Features

- **Grid-Snapped Movement**: Snap along world axes using adjustable grid size
- **Drag-Based Gizmo**: Precise movement in X, Y, Z, or work on planes
- **Runtime Grid System**: Grid follows the selected actor dynamically
- **Customizable Settings**: Configurable grid size and snap values
- **Actor Filtering**: Only specified tagged actors can be snapped
- **Blueprint-Only Integration**: Easy setup without C++ knowledge
- **Runtime-Only**: Designed to function entirely during gameplay (no editor dependencies)

<div style="margin-top: 1rem;"></div>

## Dependency

- Unreal Engine **Enhanced Input** plugin (auto-enabled via `.uplugin` file)

If it's not enabled, go to:
Edit → Plugins → Search “Enhanced Input” → Enable → Restart the editor

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
