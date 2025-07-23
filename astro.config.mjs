// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import preact from "@astrojs/preact";
import vercel from '@astrojs/vercel';

// https://astro.build/config


export default defineConfig({
  //site: import.meta.env.BASE_URL, 
  publicDir: "./public",
  integrations: [preact()],
  vite: {
   plugins: [tailwindcss()],
 },
output: 'server',
  adapter: vercel({
    imageService: true,
    webAnalytics: {
      enabled: true,
    }})
});