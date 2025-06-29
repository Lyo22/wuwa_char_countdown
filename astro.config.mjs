// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import preact from "@astrojs/preact";
import vercel from "@astrojs/vercel";
// https://astro.build/config


export default defineConfig({
  env: {
 schema: {
   PUBLIC_PAGE_URL: envField.string({ context: "client", access: "public"}),
  
 },
},

  publicDir: "./public",
  integrations: [preact()],

  vite: {
   plugins: [tailwindcss()],
 },

  adapter: vercel(),
});