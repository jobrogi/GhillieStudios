import React from "react";
import { Link } from "react-router-dom";

const games = [
  {
    title: "Steadborn",
    description:
      "A voxel-based RTS survival game focused on mining, settlement building, and automation. Shape the land, command your colonists, and carve out a new civilization from the blocks around you.",
    imageUrl: `${import.meta.env.BASE_URL}ProjectShowcase/Steadborn.png`, // Replace with real path
    link: "/games/steadborn", // Internal devlog/landing page
    status: "In Development",
    genre: "Voxel RTS / Colony Sim",
  },
  // Future games can go here
];

const Games = () => (
  <section
    id="games"
    className="w-full text-text-primary py-28 px-6 scroll-mt-24"
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
    <div className="max-w-7xl mx-auto text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-4">
        Our Games
      </h2>
      <p className="text-lg text-text-secondary max-w-2xl mx-auto">
        These are the games we're building with our tools and creativity —
        starting with our flagship title, Steadborn.
      </p>
    </div>

    <div
      className={`max-w-7xl mx-auto ${
        games.length === 1
          ? "flex justify-center"
          : "grid md:grid-cols-2 lg:grid-cols-3 gap-10"
      }`}
    >
      {games.map((game, index) => (
        <div
          key={index}
          className={`bg-[#1d1f25] rounded-xl border border-[#2a2d35] hover:border-gray-400 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden flex flex-col ${
            games.length === 1 ? "w-full max-w-md" : ""
          }`}
        >
          {/* Image */}
          <div className="w-full h-40 bg-[#121316] flex items-center justify-center border-b border-[#2a2d35]">
            <img
              src={game.imageUrl}
              alt={game.title}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Content */}
          <div className="p-4 flex flex-col justify-between flex-grow">
            <div className="flex-grow flex flex-col gap-2">
              <h3 className="text-base font-semibold text-text-primary leading-tight">
                {game.title}
              </h3>

              <p className="text-xs text-text-secondary leading-snug">
                {game.description}
              </p>
            </div>

            {/* Bottom row: status info + dev blog button side-by-side */}
            <div className="pt-2 mt-4 border-t border-[#2a2d35] flex items-center justify-between">
              <div className="text-xs text-neutral-500 leading-tight">
                <p>Status: {game.status}</p>
                <p>Genre: {game.genre}</p>
                <p className="text-accent/80">by Ghillie Studios</p>
              </div>

              <Link to="/docs/md/DevBlog---Steadborn" className="ml-4 shrink-0">
                <button className="bg-red-500 hover:bg-red-600 cursor-pointer transition px-4 py-2 rounded-lg text-sm text-white">
                  Visit Dev Blog →
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Games;
