// @ts-check
import { defineConfig, envField } from 'astro/config';

import mdx from '@astrojs/mdx';

import react from '@astrojs/react';

import vercel from '@astrojs/vercel';



// https://astro.build/config
export default defineConfig({
  site: "https://toky-portfolio-ten.vercel.app/",
  env: {
    schema: {
      LOCAL_URL: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
      SITE_URL: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
      YT_API: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
      CHANNEL_ID: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
    },
  },
  integrations: [react(), mdx()],
  output: "server",
  adapter: vercel(),
});
