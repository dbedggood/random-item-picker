import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VitePWA(), svelte()],
  base: "/random-item-picker/",
  build: {
    outDir: "docs",
  },
});
