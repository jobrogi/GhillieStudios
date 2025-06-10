import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const sections = ["home", "about", "work", "contact"];

const Navbar = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");

  const isDocsPage = location.pathname.startsWith("/docs");

  useEffect(() => {
    if (isDocsPage) return; // Don't scroll-track on docs page

    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.4,
    });

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isDocsPage]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-bg-100/90 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Studio Name */}
        <Link
          to="/"
          className="flex flex-col items-center justify-center group"
        >
          <img
            src={`${import.meta.env.BASE_URL}StudioLogo.png`}
            alt="Ghillie Studios Logo"
            className="w-10 h-10 object-contain mb-1 transition duration-300 group-hover:brightness-110"
          />

          <span className="text-xs -m-2 font-extrabold tracking-wide text-text-primary group-hover:text-accent-300 uppercase">
            Ghillie Studios
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="flex space-x-6 text-sm font-medium items-center">
          {sections.map((id) => (
            <Link
              key={id}
              to={`/#${id}`}
              onClick={(e) => {
                if (location.pathname !== "/") {
                  // Let the page navigate, then scroll after it's loaded
                  setTimeout(() => {
                    const el = document.getElementById(id);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }
              }}
              className={`relative group ${
                !isDocsPage && activeSection === id
                  ? "text-accent-300"
                  : "text-text-secondary"
              } hover:text-accent-300 transition-colors duration-300 ease-snappy`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300 ease-snappy ${
                  !isDocsPage && activeSection === id
                    ? "w-full bg-accent-300"
                    : "w-0 group-hover:w-full bg-accent-300"
                }`}
              />
            </Link>
          ))}

          {/* Divider */}
          <div className="w-px h-5 bg-border opacity-60 -ml-2" />

          {/* Docs Button (router-based) */}
          <Link
            to="/docs/md/Docs---Overview"
            className={`relative group  ${
              isDocsPage ? "text-accent-300" : "text-text-secondary"
            } hover:text-accent-300 transition-colors duration-300 ease-snappy`}
          >
            Docs
            <span
              className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300 ease-snappy ${
                isDocsPage
                  ? "w-full bg-accent-300"
                  : "w-0 group-hover:w-full bg-accent-300"
              }`}
            ></span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
