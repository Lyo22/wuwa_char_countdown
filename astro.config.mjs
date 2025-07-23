// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import preact from "@astrojs/preact";
import vercel from '@astrojs/vercel';

// https://astro.build/config


export default defineConfig({
  //site: import.meta.env.BASE_URL, 
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
output: 'server',
// @ts-ignore
adapter: vercel(),

});