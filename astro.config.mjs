import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";

export default defineConfig({
  integrations: [svelte(), tailwindcss()],
  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()],
  },
});
