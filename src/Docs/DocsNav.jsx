import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Filter, Search, Settings } from "lucide-react";
import navSections from "./NavSections";

// Dynamically collect all valid slugs into activePaths
const activePaths = [];

navSections.forEach((section) => {
  if ("links" in section) {
    section.links.forEach((link) => activePaths.push(link.path));
  }
  if ("plugins" in section) {
    section.plugins.forEach((plugin) => {
      plugin.links.forEach((link) => activePaths.push(link.path));
    });
  }
});

const DocsNav = () => {
  const [open, setOpen] = useState(true);
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState({}); // track expanded plugins
  const toggle = () => setOpen(!open);

  // Consolidate Dev Tools + Plugins into one group safely
  const combinedSection = {
    label: "Plugins & Dev Tools",
    plugins: navSections
      .filter(
        (s) =>
          s.label.toLowerCase().includes("plugin") ||
          s.label.toLowerCase().includes("dev tool")
      )
      .flatMap((s) => (s.plugins ? s.plugins : [])),
  };

  // All other sections EXCEPT plugins/dev tools
  const otherSections = navSections.filter(
    (s) =>
      !s.label.toLowerCase().includes("plugin") &&
      !s.label.toLowerCase().includes("dev tool")
  );

  // Filter plugins/dev tools by search
  const filteredPlugins =
    search.trim() === ""
      ? combinedSection.plugins
      : combinedSection.plugins
          .map((plugin) => {
            const matchesPluginName = plugin.name
              .toLowerCase()
              .includes(search.toLowerCase());

            const filteredLinks = plugin.links.filter((link) =>
              link.title.toLowerCase().includes(search.toLowerCase())
            );

            if (matchesPluginName || filteredLinks.length > 0) {
              return {
                ...plugin,
                links: matchesPluginName ? plugin.links : filteredLinks,
              };
            }
            return null;
          })
          .filter(Boolean);

  return (
    <div className="relative min-h-screen flex">
      <aside
        className={`relative transition-all duration-300 ${
          open ? "w-64 px-5 py-6" : "w-0 px-0 py-6"
        } bg-[#0f0f0f] text-slate-300 overflow-y-auto border-r border-black hidden md:block`}
      >
        {open && (
          <>
            <h2 className="text-sm font-semibold text-white uppercase tracking-wide mb-6">
              Documentation
            </h2>

            {otherSections.map((section, index) => (
              <div
                key={section.label}
                className={`${
                  index !== 0 ? "mt-6 border-t border-gray-500 pt-6" : ""
                }`}
              >
                <p className="text-[0.65rem] text-white uppercase font-medium tracking-wider mb-2">
                  {section.label}
                </p>

                {"links" in section && (
                  <ul className="space-y-1">
                    {section.links.map((link) => {
                      const isWorking = activePaths.includes(link.path);
                      return (
                        <li
                          key={link.title}
                          className="flex items-center justify-between whitespace-nowrap"
                        >
                          {isWorking ? (
                            <NavLink
                              to={link.path}
                              end={link.path === "/docs"}
                              className={({ isActive }) =>
                                `block px-2 py-1 rounded-md text-sm transition-all ${
                                  isActive
                                    ? "bg-accent-300 text-black font-semibold"
                                    : "hover:bg-[#1a1a1a] hover:text-white"
                                }`
                              }
                            >
                              {link.title}
                            </NavLink>
                          ) : (
                            <span className="block px-2 py-1 rounded-md text-sm text-gray-500 cursor-not-allowed">
                              {link.title}
                            </span>
                          )}
                          {/* {link.tag && (
                            <span className="ml-2 p-1 py-0.5 bg-orange-300 text-black text-[10px] font-semibold rounded">
                              {link.tag}
                            </span>
                          )} */}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            ))}

            {/* Search bar for plugins/dev tools */}
            <div className="mt-6 border-t border-gray-500 pt-6">
              <div className="relative w-full mb-3">
                <input
                  type="text"
                  placeholder="Search plugins & tools..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-2 pr-8 py-1 rounded bg-[#1a1a1a] text-sm text-white focus:outline-none focus:ring-1 focus:ring-accent-300"
                />
                <Filter
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-white"
                  size={16}
                />
              </div>

              <p className="text-[0.65rem] text-white uppercase font-medium tracking-wider mb-2">
                {combinedSection.label}
              </p>

              {filteredPlugins.length === 0 ? (
                <p className="text-xs text-gray-500 pl-2">No results found</p>
              ) : (
                filteredPlugins.map((plugin) => (
                  <div
                    key={plugin.name}
                    className="mt-2 border-2 border-gray-700 rounded-sm"
                  >
                    {/* Plugin header (collapsible toggle) */}
                    <button
                      onClick={() =>
                        setExpanded((prev) => ({
                          ...prev,
                          [plugin.name]: !prev[plugin.name],
                        }))
                      }
                      className="flex items-center justify-between w-full px-2 py-1 bg-[#1a1a1a] rounded-t-lg text-xs font-semibold text-gray-300"
                    >
                      <span className="flex-1 text-left">{plugin.name}</span>
                      <span className="text-gray-400">
                        {expanded[plugin.name] ? "−" : "+"}
                      </span>
                    </button>

                    {/* Tag on the header */}
                    {/* {plugin.tag && (
                      <span className="absolute right-2 top-2 p-1 py-0.5 bg-orange-300 text-black text-[10px] font-semibold rounded">
                        {plugin.tag}
                      </span>
                    )} */}

                    {/* Collapsible content */}
                    {expanded[plugin.name] && (
                      <ul className="space-y-1 px-3 py-2">
                        {plugin.links.map((link) => {
                          const isWorking = activePaths.includes(link.path);
                          return (
                            <li key={link.title} className="whitespace-nowrap">
                              {isWorking ? (
                                <NavLink
                                  to={link.path}
                                  className={({ isActive }) =>
                                    `flex w-full items-center justify-between px-2 py-1 rounded-md text-sm transition-all ${
                                      isActive
                                        ? "bg-accent-300 text-black font-semibold"
                                        : "hover:bg-[#1a1a1a] hover:text-white"
                                    }`
                                  }
                                >
                                  <span>{link.title}</span>
                                  {/* {link.tag && (
                                    <span className="ml-2 p-1 py-0.5 bg-orange-300 text-black text-[10px] font-semibold rounded">
                                      {link.tag}
                                    </span>
                                  )} */}
                                </NavLink>
                              ) : (
                                <div className="flex w-full items-center justify-between px-2 py-1 rounded-md text-sm text-gray-500 cursor-not-allowed">
                                  <span>{link.title}</span>
                                  {/* {link.tag && (
                                    <span className="ml-2 p-1 py-0.5 bg-orange-300 text-black text-[10px] font-semibold rounded">
                                      {link.tag}
                                    </span>
                                  )} */}
                                </div>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                ))
              )}
            </div>
          </>
        )}
      </aside>
    </div>
  );
};

export default DocsNav;
