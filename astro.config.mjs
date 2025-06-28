// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import preact from "@astrojs/preact";
// https://astro.build/config


export default defineConfig({
  env: {
 schema: {
   PUBLIC_PAGE_URL: envField.string({ context: "client", access: "public"}),

 }
},

  integrations: [preact()],
   vite: {
    plugins: [tailwindcss()],
  },
});