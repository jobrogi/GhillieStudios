# AutoSnap – Editor Plugin – Changelog

This document outlines all major changes and additions to the AutoSnap – Editor plugin.

<div style="margin-top: 2rem;"></div>

## [1.0.0] – Initial Release

### Features

- Editor-only snapping plugin designed for level designers and modular asset placement
- Toggle snapping for individual axes (X, Y, Z) with hotkeys
- Adjustable snap distance using mouse wheel
- Visual feedback with optional grid overlay
- Debug logging system for snap state visibility
- Minimalistic, low-overhead C++ logic with full Blueprint compatibility
- Works independently of Unreal Engine’s native grid snapping system
- No external dependencies

### Included Components

- `AutoSnapEditorModule` – Core module that manages plugin startup, menu integration, and global toggles
- `UAutoSnapEditorSettings` – Project-wide configuration accessible via Project Settings
- `FAutoSnapEditorManager` – Internal logic for snapping, input handling, and hotkey routing
- Grid material and mesh – Optional visuals for runtime feedback
- Editor keybindings:
  - `Shift + G` – Toggle snapping globally
  - `Shift + X/Y/Z` – Toggle snapping per axis
  - `Shift + Mouse Wheel` – Adjust snap distance
  - `Shift + D` – Toggle debug logs

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
