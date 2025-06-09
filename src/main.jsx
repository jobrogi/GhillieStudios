import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./MainSite/CSS/index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/GhillieStudios">
      <App />
    </BrowserRouter>{" "}
  </StrictMode>
);
