import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/random-item-picker/",
  build: {
    outDir: "docs",
  },
  plugins: [
    svelte(),
    VitePWA({
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.png"],
      manifest: {
        scope: "/random-item-picker/",
        start_url: "/random-item-picker/",
        name: "Random Item Picker",
        short_name: "Picker",
        description: "An app to help you pick randomly from a list of items.",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/random-item-picker/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/random-item-picker/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/random-item-picker/maskable-icon.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
