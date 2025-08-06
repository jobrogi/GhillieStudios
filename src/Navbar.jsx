import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const sections = ["home", "about", "games", "tools", "contact"];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const isDocsPage = location.pathname.startsWith("/docs");

  useEffect(() => {
    if (isDocsPage) return;

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

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSectionClick = (id) => {
    setMenuOpen(false);
    if (location.pathname === "/") {
      scrollToSection(id);
      window.history.replaceState(null, "", `#${id}`);
    } else {
      navigate("/", { replace: false });
      setTimeout(() => {
        window.history.replaceState(null, "", `#${id}`);
        scrollToSection(id);
      }, 100);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-bg-100/90 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Version Badge */}
        <span className="absolute hover:cursor-default top-1 right-3 text-[0.65rem] font-semibold text-text-secondary uppercase tracking-wide">
          v{__APP_VERSION__}
        </span>

        {/* Logo + Name */}
        <Link
          to="/"
          className="flex flex-col items-center justify-center group"
        >
          <img
            src={`${import.meta.env.BASE_URL}StudioLogo.png`}
            alt="Ghillie Studios Logo"
            className="w-10 h-10 object-contain mb-1 transition duration-300 group-hover:brightness-110"
          />
          <span className="text-[0.6rem] [@media(max-width:393px)]:text-[0.5rem] sm:text-xs -m-2 font-extrabold tracking-wide text-text-primary group-hover:text-accent-300 uppercase">
            Ghillie Studios
          </span>
        </Link>

        {/* Hamburger toggle (only visible below md) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-text-primary focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium items-center">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => handleSectionClick(id)}
              className={`relative group hover:cursor-pointer ${
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
              ></span>
            </button>
          ))}

          {/* Divider */}
          <div className="w-px h-5 bg-border opacity-60 -ml-2 hidden md:block" />

          {/* Docs Link */}
          <Link
            to="/docs/md/Docs---Overview"
            className={`relative group ${
              isDocsPage ? "text-accent-300" : "text-text-secondary"
            } hover:text-accent-300 transition-colors duration-300 ease-snappy hidden md:inline-flex`}
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

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 pt-2 bg-bg-100 border-t border-border flex flex-col space-y-3 text-sm">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => handleSectionClick(id)}
              className="text-text-primary hover:text-accent-300 text-left"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
