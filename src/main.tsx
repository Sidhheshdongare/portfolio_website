import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import ScrollSmoother from "gsap/ScrollSmoother";
gsap.registerPlugin(ScrollSmoother);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
