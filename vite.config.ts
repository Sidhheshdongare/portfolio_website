import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
gsap.registerPlugin(ScrollSmoother);
