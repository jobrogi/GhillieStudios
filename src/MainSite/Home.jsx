import React from "react";

const Home = () => (
  <section
    id="home"
    className="relative flex flex-col items-center justify-center h-screen text-center px-6 scroll-mt-24"
    style={{
      backgroundColor: "var(--color-bg-100)",
      backgroundImage: `radial-gradient(circle at center, rgba(0,0,0,0.5) 0%, transparent 70%), url('${
        import.meta.env.BASE_URL
      }Background.png')`,
      backgroundRepeat: "repeat",
      backgroundSize: "auto",
      backgroundBlendMode: "soft-light",
    }}
  >
    <div className="z-10 max-w-3xl mx-auto backdrop-blur-sm bg-bg-100/80 px-8 py-10 rounded-2xl shadow-xl border border-border ring-1 ring-accent/20 space-y-6">
      <h1
        className="text-5xl md:text-7xl cursor-default font-extrabold leading-tight text-text-primary tracking-tight"
        style={{ textShadow: "0 4px 12px rgba(0, 0, 0, 0.6)" }}
      >
        Ghillie Studios
      </h1>

      <>
        {/* Hint line below the title or above the tags */}
        <p className="text-xs text-text-secondary mb-2 animate-fade-out">
          Hover over the tags to learn how we work.
        </p>

        <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base font-mono text-accent">
          {[
            {
              label: "Indie Games",
              definition:
                "We create indie games not just to entertain — but to test our tools, explore design ideas, and stay grounded in what makes great gameplay.",
            },
            {
              label: "Unreal Engine 5 Plugins",
              definition:
                "We build focused, performance-ready plugins that solve real development bottlenecks — no fluff, just powerful systems you can drop into production.",
            },
            {
              label: "Developer Tools",
              definition:
                "Everything we make is built with devs in mind — customizable, modular, and production-safe. Tools that work how you work.",
            },
          ].map((item, index, arr) => (
            <React.Fragment key={item.label}>
              <div className="relative group cursor-help transition-transform duration-200 hover:scale-105">
                <span className="bg-black/90 px-3 py-1 rounded-md shadow-inner whitespace-nowrap transition duration-200 hover:brightness-110">
                  {item.label}
                </span>
                <div className="absolute left-1/2 top-full mt-2 w-64 -translate-x-1/2 scale-95 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 z-50 bg-bg-100 text-sm text-text-secondary p-3 rounded-md shadow-lg border border-border">
                  {item.definition}
                </div>
              </div>
              {index < arr.length - 1 && (
                <span className="text-text-secondary font-bold cursor-default">
                  |
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </>

      <p className="cursor-default text-md md:text-lg text-text-tertiary max-w-xl mx-auto leading-relaxed">
        We build powerful systems for creators and immersive experiences for
        players — all from the ground up.
      </p>

      <div className="flex justify-center gap-4">
        {/* Explore Our Tools Button */}
        <a
          href="https://www.fab.com/sellers/Ghillie%20Studios"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-[1.02] active:scale-[0.98] px-6 py-3 rounded-md font-semibold text-white bg-black/40 hover:bg-red-500 focus:outline-none transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Explore Our Tools
        </a>

        {/* Explore Our Games Button with Tooltip */}
        <div className="relative group">
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="px-6 py-3 rounded-md font-semibold text-white bg-black/40 opacity-50 cursor-not-allowed transition-all duration-200 shadow-inner pointer-events-none"
          >
            Explore Our Games
            <span className="ml-2 select-none"></span>
          </button>
          <div className="absolute left-1/2 top-full mt-2 w-64 -translate-x-1/2 scale-95 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 z-50 bg-bg-100 text-sm text-text-secondary p-3 rounded-md shadow-lg border border-border">
            I swear we are working on it!
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
