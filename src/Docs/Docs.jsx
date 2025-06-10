import { Outlet } from "react-router-dom";
import DocsNav from "./DocsNav";

const Documentation = () => (
  <div className="relative min-h-[calc(100vh-4rem)] pt-16 overflow-hidden">
    {/* Blurred background layer */}
    <div
      className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-center scale-105 "
      style={{
        backgroundColor: "var(--color-bg-100)",
        backgroundImage: `url('${import.meta.env.BASE_URL}Background.png')`,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundAttachment: "fixed",
        backgroundBlendMode: "soft-light",
        filter: "blur(3px)",
      }}
    />

    {/* Foreground content */}
    <div className="relative z-10 flex text-slate-100 min-h-full">
      <DocsNav />
      <main className="flex-1 px-6 py-12 overflow-y-auto bg-black/30 rounded-md shadow-inner">
        <div className="max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  </div>
);

export default Documentation;
