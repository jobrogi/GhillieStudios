import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-bg-200 border-t border-border text-text-secondary text-sm">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left side: copyright */}
        <div className="text-xs tracking-wide text-center md:text-left">
          © {new Date().getFullYear()} Ghillie Studios. All rights reserved.
        </div>

        {/* Middle: footer nav */}
        <nav className="flex space-x-4">
          <Link
            to="/"
            className="hover:text-accent-300 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/docs/md/Docs---Overview"
            className="hover:text-accent-300 transition-colors duration-200"
          >
            Docs
          </Link>
          <a
            href="https://github.com/jobrogi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-300 transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://discord.gg/6xmYHNKk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-300 transition-colors duration-200"
          >
            Discord
          </a>
        </nav>

        {/* Right side: version */}
        <div className="text-xs font-mono text-right">
          Version <span className="text-accent-300">v{__APP_VERSION__}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
