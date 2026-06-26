import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/startupsetup/",
  plugins: [react(), tailwindcss(), tsConfigPaths()],
  build: {
    outDir: "dist/pages",
    rollupOptions: {
      input: resolve(__dirname, "pages/index.html"),
    },
  },
});
