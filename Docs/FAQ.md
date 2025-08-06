# Frequently Asked Questions

> This page answers common questions about Ghillie Studios plugins and their usage in Unreal Engine.

### General

#### Q: What versions of Unreal Engine are supported?

All Ghillie Studios plugins support **Unreal Engine 5.3 and newer**, unless otherwise stated in the plugin documentation.

#### Q: Where do I find the plugin after installing from Fab?

If you clicked "Install to Engine", the plugin will be placed under:

> `[EngineInstallLocation]/Engine/Plugins/Marketplace/PluginNameFolder`

Most plugins do include content inside your actual project files, in that case the plugin content will be placed under:

> `[YourProject]/Engine/Plugins/PluginNameFolder`

If you clicked "Add to Project", the files will be inside:

> `[YourProject]/Content/PluginNameFolder`

After installing, open your project and go to `Edit > Plugins` to enable it.

With all that being said some of our plugins have a built in button that automatically navigates you to our own plugins within the content explorer of the unreal engine editor. If your plugin has content and supports this feature, you can open the main editor or project where the installed plugins lives.

> `Window -> Open Plugin Content` Which will be at the bottom. of this tab.

#### Q: How do I update the plugin when a new version releases?

> Use the **Fab Library** inside the Epic Games Launcher. Uninstall the old version from the engine or project, then reinstall the latest version. Don’t forget to restart the editor and re-enable the plugin if needed.

#### Q: Will the plugin break if I update my engine?

> Ghillie Studios actively tests plugins on new Unreal versions. However, if you're updating from 5.3 to 5.4+, always check the **changelog** and **Fab version support** listed in the plugin page or docs. With that being said typically plugins are installed via engine version. Since we support 5.3+ for ALL our plugins all's you need to do is install the plugin for your desired engine version within the epic games launcher!

### Technical

#### Q: Why am I getting compile errors?

- Ensure you're using **Unreal Engine 5.3 or later**
- Make sure the plugin is enabled in `Edit > Plugins`
- If you're using C++, regenerate project files and rebuild from Visual Studio
- If the plugin was recently released or updated and you're still getting issues, **please reach out to us** via [Discord](https://discord.gg/6xmYHNKk) or [Jobrogi@gmail.com](mailto:Jobrogi@gmail.com).

> 🛠 Occasionally, due to backend syncing issues between Ghillie Studios and Fab (Epic Games), plugin data may not propagate correctly, even if everything on our side is valid. This can require ticket escalation and may take several days to resolve. Your report helps us catch these cases faster.

#### Q: The plugin doesn’t show up in the editor?

Double-check the following:

- You restarted the editor after installation
- The plugin folder contains a valid `.uplugin` file
- The plugin is enabled in `Edit > Plugins`

> Some plugins are code-only or purely component-based and may not include visible content in the Content Browser.  
> If you're certain the plugin you purchased should include assets or files and nothing appears, **please contact us** via [Discord](https://discord.gg/6xmYHNKk) or [Jobrogi@gmail.com](mailto:Jobrogi@gmail.com). We're happy to help troubleshoot.

#### Q: Do these plugins support multiplayer?

> Some plugins are designed for single-player workflows. See each plugin’s documentation page for network replication support.
> Each plugin on Fab requires this information to be posted and is easily found within the "Technical Details" section of the product page.

### Support

#### Q: How do I get help?

You can:

> Join our [Discord](https://discord.gg/6xmYHNKk)
> Email: [Jobrogi@gmail.com](mailto:Jobrogi@gmail.com)

We're happy to help with setup issues, bug reports, or feature suggestions.

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
  Built by Ghillie Studios. All plugins support Unreal Engine 5.3 – 5.5 unless otherwise noted.
</blockquote>
