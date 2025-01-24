import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/valentines-with-me/', // For project site
  // For user site, use: base: '/'
  build: {
    outDir: 'dist',
  },
});