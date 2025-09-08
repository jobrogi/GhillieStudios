import React from "react";
import Waves from "./Waves";

const Home = () => (
  <section
    id="home"
    className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 scroll-mt-24"
    style={{
      backgroundColor: "var(--color-bg-100)",
      backgroundImage: `radial-gradient(circle at center, rgba(0,0,0,0.5) 0%, transparent 70%), url('${
        import.meta.env.BASE_URL
      }Background.png')`,
      backgroundRepeat: "repeat",
      backgroundSize: "cover",
      backgroundBlendMode: "soft-light",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
    }}
  >
    <div className="z-10 w-full max-w-3xl mx-auto backdrop-blur-sm bg-bg-100/80 px-5 sm:px-8 py-8 sm:py-10 rounded-2xl shadow-xl border border-border ring-1 ring-accent/20 space-y-6">
      <h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl cursor-default font-extrabold leading-tight text-text-primary tracking-tight"
        style={{ textShadow: "0 4px 12px rgba(0, 0, 0, 0.6)" }}
      >
        Ghillie Studios
      </h1>

      {/* Hint Line */}
      <p className="text-xs text-text-secondary mb-2 animate-fade-out">
        Hover over the tags to learn how we work.
      </p>

      {/* Tags + Tooltip */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base font-mono text-accent">
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
              <span className="bg-black/90 px-2.5 py-1 rounded-md shadow-inner whitespace-nowrap transition duration-200 hover:brightness-110">
                {item.label}
              </span>
              <div className="absolute left-1/2 top-full mt-2 w-64 max-w-xs -translate-x-1/2 scale-95 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 z-50 bg-bg-100 text-xs sm:text-sm text-text-secondary p-3 rounded-md shadow-lg border border-border">
                {item.definition}
              </div>
            </div>
            {index < arr.length - 1 && (
              <span className="text-text-secondary font-bold cursor-default hidden sm:inline">
                |
              </span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Description */}
      <p className="cursor-default text-sm sm:text-md md:text-lg text-text-tertiary max-w-xl mx-auto leading-relaxed px-2">
        We build powerful systems for creators and immersive experiences for
        players — all from the ground up.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-2">
        {/* Explore Our Tools */}
        <a
          href="https://www.fab.com/sellers/Ghillie%20Studios"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-[1.02] active:scale-[0.98] px-5 py-2.5 sm:px-6 sm:py-3 rounded-md font-semibold text-white bg-black/40 hover:bg-red-500 focus:outline-none transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-base"
        >
          Explore Our Tools
        </a>

        {/* Explore Games (Disabled) */}
        {/* Explore Our Games (Scrolls to #games) */}
        <button
          type="button"
          onClick={() => {
            const target = document.getElementById("games");
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="hover:scale-[1.02] hover:cursor-pointer active:scale-[0.98] px-5 py-2.5 sm:px-6 sm:py-3 rounded-md font-semibold text-white bg-black/40 hover:bg-red-500 focus:outline-none transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-base"
        >
          Explore Our Games
        </button>
      </div>
    </div>
    {/* Waves anchored to section WIP */}
    {/* <div className="absolute left-0 w-full h-full z-50"><Waves /></div> */}
  </section>
);

export default Home;
