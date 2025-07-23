// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import preact from "@astrojs/preact";
import vercel from '@astrojs/vercel';
// https://astro.build/config

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  build: {
    serverEntry: '.vercel/output/functions/_render.func/dist/server/entry.mjs',
  },
  //site: import.meta.env.BASE_URL, 
  publicDir: "./public",
  integrations: [preact()],
  vite: {
   plugins: [tailwindcss()],
 },

});