import { gsap } from "gsap";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Ensure all required GSAP plugins are properly registered
import { ScrollSmoother } from "gsap/all";
gsap.registerPlugin(ScrollSmoother);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
