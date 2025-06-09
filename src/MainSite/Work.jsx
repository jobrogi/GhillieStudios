import React from "react";

const plugins = [
  {
    title: "RTSCamPro",
    description:
      "A premium RTS-style camera system designed for top-down and strategy games. Smooth movement, zoom, tilt, edge-panning, and more — fully Blueprint-ready.",
    imageUrl: `${import.meta.env.BASE_URL}ProjectShowcase/RTSCamPro.png`,
    link: "https://www.fab.com/listings/afc29d33-c336-47f9-bfe4-fbf6aa6b72a8",
    release: "06/05/25",
    engine: "5.3–5.6",
  },
  {
    title: "AutoSnap – Runtime",
    description:
      "Runtime grid snapping, gizmo control, and actor alignment — perfect for level editors, puzzle games, and dev tools in runtime environments.",
    imageUrl: `${import.meta.env.BASE_URL}ProjectShowcase/AutoSnapRuntime.png`,
    link: "https://www.fab.com/listings/2b36aed5-8d4f-4cad-ac2d-d9b7169a278d",
    release: "05/23/25",
    engine: "5.3–5.6",
  },
  {
    title: "Modular Interactions",
    description:
      "A powerful, modular interaction system for Unreal Engine. Build tooltips, context menus, toggles, and widget-driven logic with ease.",
    imageUrl: `${
      import.meta.env.BASE_URL
    }ProjectShowcase/ModularInteractions.png`,
    link: "https://www.fab.com/listings/c584ff0d-33f2-4f93-925f-6f57b58c1194",
    release: "05/22/25",
    engine: "5.3–5.5",
  },
];

const Work = () => (
  <section
    id="work"
    className="w-full text-text-primary py-28 px-6 scroll-mt-24"
    style={{
      backgroundColor: "var(--color-bg-100)",
      backgroundImage: "url('/Background.png')",
      backgroundRepeat: "repeat",
      backgroundSize: "auto",
      backgroundBlendMode: "soft-light",
    }}
  >
    <div className="max-w-7xl mx-auto text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-4">
        Our Work
      </h2>
      <p className="text-lg text-text-secondary max-w-2xl mx-auto">
        These are the systems we’ve built to solve real development problems —
        crafted for our own projects, refined, and shared with the community.
      </p>

      <div className="mt-6">
        <a
          href="https://www.fab.com/sellers/Ghillie%20Studios"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-red-500 text-white font-semibold rounded-lg transition-all duration-200 ease-snappy hover:bg-red-600 active:scale-95 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Browse All Plugins on Fab
        </a>
      </div>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
      {plugins.map((plugin, index) => (
        <a
          key={index}
          href={plugin.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1d1f25] rounded-xl border border-[#2a2d35] hover:border-accent transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden flex flex-col"
        >
          {/* Image */}
          <div className="w-full h-40 bg-[#121316] flex items-center justify-center border-b border-[#2a2d35]">
            <img
              src={plugin.imageUrl}
              alt={plugin.title}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Content */}
          <div className="p-4 flex flex-col gap-2 flex-grow text-left">
            <h3 className="text-base font-semibold text-text-primary leading-tight">
              {plugin.title}
            </h3>

            <p className="text-xs text-text-secondary leading-snug">
              {plugin.description}
            </p>

            <div className="mt-auto pt-2 border-t border-[#2a2d35] text-xs text-neutral-500 leading-tight">
              <p>Released: {plugin.release}</p>
              <p>Engine: {plugin.engine}</p>
              <p className="text-accent/80">by Ghillie Studios</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default Work;
