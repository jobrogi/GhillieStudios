import { useState } from "react";
import { NavLink } from "react-router-dom";
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
  const toggle = () => setOpen(!open);

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

            {navSections.map((section, index) => (
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
                        <li key={link.title}>
                          {isWorking ? (
                            <NavLink
                              to={link.path}
                              end={link.path === "/docs"}
                              className={({ isActive }) =>
                                `block px-2 py-1 rounded-md text-sm transition-all ${
                                  isActive
                                    ? "bg-[#1a1a1a] text-white font-semibold"
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
                        </li>
                      );
                    })}
                  </ul>
                )}

                {"plugins" in section &&
                  section.plugins.map((plugin) => (
                    <div key={plugin.name} className="mt-3">
                      <p className="text-xs font-semibold text-gray-300 pl-2 mb-1">
                        {plugin.name}
                      </p>
                      <ul className="space-y-1 pl-4">
                        {plugin.links.map((link) => {
                          const isWorking = activePaths.includes(link.path);
                          return (
                            <li key={link.title}>
                              {isWorking ? (
                                <NavLink
                                  to={link.path}
                                  className={({ isActive }) =>
                                    `block px-2 py-1 rounded-md text-sm transition-all ${
                                      isActive
                                        ? "bg-[#1a1a1a] text-white font-semibold"
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
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
              </div>
            ))}
          </>
        )}
      </aside>
    </div>
  );
};

export default DocsNav;
