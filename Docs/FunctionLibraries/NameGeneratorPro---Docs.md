# Name Generator Pro – Runtime Name Generation for Unreal Engine

A lightweight and extensible name generation plugin for Unreal Engine 5.3+.
Designed for game developers who want fast, Blueprint-accessible random name generation with support for structured prefixes, cores, and suffixes across custom categories like Human, Fantasy, Orc, Robot, and more.

<div style="margin-top: 2rem;"></div>

#### Getting Started

Follow these steps to get up and running quickly:

1. **Install the Plugin**

   - [Installation Guide](/docs/md/Docs---Installation)

2. **Initial Setup**

   - Enable the plugin under **Edit > Plugins > Name Generator Pro**, then restart the editor.

3. **Using the Plugin**

   - Open any Blueprint (e.g. Character, Controller, Utility).
   - Right-click in the Event Graph and search for functions in the **NameGenPro** category.
   - Use nodes like `GenerateName`, `GetAvailableNameCategories`, or `AddCustomNameCategory`.

<div style="margin-top: 2rem;"></div>

#### Functions Overview

| Function Name                                                | Description                                                                |
| ------------------------------------------------------------ | -------------------------------------------------------------------------- |
| `GenerateName(Category)`                                     | Generates a random name using Prefix + Core + Suffix logic for a category. |
| `GenerateSeededName(Category, Seed)`                         | Returns a deterministic name based on the provided seed.                   |
| `GenerateNameBatch(Category, Count)`                         | Returns an array of randomly generated names from a category.              |
| `GetAvailableNameCategories()`                               | Returns a list of all loaded name categories.                              |
| `IsValidNameCategory(Category)`                              | Returns `true` if the specified category exists and contains valid parts.  |
| `AddCustomNameCategory(Category, Prefixes, Cores, Suffixes)` | Creates or replaces a full name category.                                  |
| `AddPrefixToCategory(Category, Prefix)`                      | Adds a single prefix to the specified category.                            |
| `AddCoreSyllableToCategory(Category, Core)`                  | Adds a single core syllable to the category.                               |
| `AddSuffixToCategory(Category, Suffix)`                      | Adds a single suffix to the specified category.                            |
| `RemovePrefixFromCategory(Category, Prefix)`                 | Removes a prefix from the specified category.                              |
| `RemoveCoreSyllableFromCategory(Category, Core)`             | Removes a core syllable from the category.                                 |
| `RemoveSuffixFromCategory(Category, Suffix)`                 | Removes a suffix from the specified category.                              |
| `RemoveNameCategory(Category)`                               | Deletes the entire category from the name system.                          |
| `ResetAllNameCategoriesToDefaults()`                         | Clears all changes and restores the original built-in categories.          |

<div style="margin-top: 2rem;"></div>

#### Engine Compatibility

| Unreal Engine Version | Supported |
| --------------------- | --------- |
| 5.3                   | ✅        |
| 5.4                   | ✅        |
| 5.5                   | ✅        |
| 5.6+                  | ✅        |

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
