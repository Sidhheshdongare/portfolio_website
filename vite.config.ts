import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
gsap.registerPlugin(ScrollSmoother);
git add.
git commit -m "Fix gsap imports and remove useGSAP for Vercel deploy"
