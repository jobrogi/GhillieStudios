import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pkg from "./package.json";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/GhillieStudios/",
  plugins: [react(), tailwindcss()],
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
  },
});
