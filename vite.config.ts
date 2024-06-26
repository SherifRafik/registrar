import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/registrar/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "$": path.resolve(__dirname, "./public")
    },
  },
});
