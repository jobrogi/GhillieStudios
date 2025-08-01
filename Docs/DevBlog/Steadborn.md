# Steadborn Dev Blog

#### What's This About?

This Dev Blog Servs as a weekly progress update on whats going on with our Voxel Game. We are a small studio so updates can often be super small and sometimes even feel like they are going backwards at times. This Dev Blog solves this problem by showing the weekly progress and ever changing goals we are acomplishing with our passion project Steadborn!

#### What to expect?

We plan on showcasing even the technical side of our project. We are currently heavy in development within voxel world building. This is no easy task. It also will make up 100 percent of the world in Steadborn. So to show we are working on the game we will update this blog weekly with technical information + gameplay design choices and the reason behind them!

<div style="margin-top: 2rem;"s></div>

<!--## [0.0.2] – Voxel Terrain Refactoring! <span class="tag">08/03/2025</span>

 Hey Folks! Welcome to another week of Steadborn Development! This week we focused heavy on refactoring code in our terrain generation systems. Before we used a simple noise mask to dictate where Biomes were, Then we looked into our data asset class to definie the shape of that biome. Now there is so "Official Way" to make terrain especially with voxels BUT... IF THERE WERE, it would be how the infamouse game `Minecraft` generates terrain. We have been doing a lot of studying on this topic and decided to not entirely destroy our voxel system but revamp it to work a lot more like Minecraft's Voxel System. Here are the details and changes on that!

1. Depreciating Our Current Biome System.
   it took awhile but depreciating our biome system was NEEDED. This is because it violates Minecrafts Terrain generation steps. What are those steps? Take a look:
   Step 1: Terrain Shaping
   Step 2: Water Filling
   Step 3: Surface Replacement (Biome Assignments!)
   Step 4: Features + Structures Placements.`
   So Whats that mean for us? Well since our Biome SHAPES the terrain we need to refactor it. Minecraft focuses on just the shape first. Not assigning any actual blocks or biomes to the terrain. They use 3 Types of noise + splines to determine the terrain shape. (Not including 3D Noise). We have gotten that far at the least. Using the three noises Minecraft uses we are able to achieve similar - ish results. We are still tweaking noise values but here is what we got:

   About this image: We use the `Continintalness` Noise to determine where is the land and where is the seafloor or shallow waters? Then on top of that we use the second noise `Erosion` Which is used to adjust the `Continintalness` noise of only the land part. Lastly we apply the `PV` Noise (Peaks & Valleys). Which if done correctly can naturally make rivers + sea's. At the moment we are assigning the `Stone` block to the terrain to fully focus on shaping the terrain. We also have yet to code in any water. It is undetermined how that will even work yet. After tweaking these noise values and spline graphs (attached to the noise values) we will work on the new Biome logic. Which will include a similar system to `Minecrafts` 3rd Step Where they use table lookups to assign biomes, in which the noise influences. Adding two more noise layers. For now though this is what we have been working on hard! We are trying to keep the same performance the same if not better than before this refactor!

2. Textures + Texture Atlas
   This was another big change we have been working hard on! We have implemented a Texture Atlas Generator In which it takes an Input Folder Searches for every texture (within a given size) then it makes a texture atlas out of all them. The class also has functions for getting an index or name of a texture. We use the function for getting a textures name and strictly name out textures. This makes it easy for us later to simply change to a different texture for specific blocks or even change the entire look of the game with a texture pack similar to how `Minecraft` does it.
   This brings us to our next point. Each blocks face can have a different texture and is defined within the `BlockTypeFactory` class. This allows us to easily make the grass block or the stone block. We actually have definitions for about 7 blocks right now. At the moment we are using `Minecraft` Texture packs but we will switch to our own down the line!

3. Terrain Optimizations
   Steadborn is a Voxel Game, but its also an RTS Game. What does that mean? Its top down. This means the player will NEVER see the bottom of any given voxel at least for the surface down. So we disabled this. We also have back face culling for all voxels enabled, but the main optimization we have been attempting to make especially for this surface level voxel system is ONLY rendering the top surface of blocks. This is almost a reality. At the moment we are very close to doing this. We just need to tweak chunk to chunk communications. Which can be difficult when working with `Async` Function within Unreal Engine C++. When we establish Chunk to Chunk Communications then we can make the rest of our performance upgrades. This includes:
   - Not rendering any of the sides of any chunks that have a neighboring chunk up until the surface level (or if that Voxel position has high mountains this means that that voxel position will need multiple voxels on top of each other to cover down for the surface height.)
   - Rendering sides of chunks IF its a border chunk, which can prove hard because we are constantly changing positions as the player moves which constantly queues up different border chunks. This might not be worth doing if we can fully only render the surface of the landscape.

Those are the notable changes we have made. Some are not fully finished but its important to note this is a BIG portion of the game. It IS the visuals. We must pay close attention to how we render blocks. This means both performance and visually. This is why we are spending so much time on this subject. After the terrain is finished we can start work on the main game loop (Which already has its foundations)

We are excited for this game and we hope you guys are too! Make sure to check out next weeks progress as well! If you have any questions dont hesitate to contact us!

Sources:

- Studio Notes
- https://www.youtube.com/watch?v=ob3VwY4JyzE&t=1416s
- https://www.youtube.com/watch?v=CSa5O6knuwI&t=848s
- https://minecraft.wiki/w/World_generation -->

## [0.0.1] – Dev Blog Creation! <span class="tag">07/27/2025</span>

Welcome to the first official dev blog for Steadborn – our voxel-based survival and colony-building game. This marks the beginning of regular behind-the-scenes updates, where we’ll show off technical breakthroughs, design decisions, and even the messy parts of game development.

We’re deep into the guts of terrain generation right now – building a world system from scratch is no joke. But this blog is here to prove we’re making steady (and sometimes chaotic) progress.

Stay tuned. Weekly updates start now.
