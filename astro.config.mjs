import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://halloween.mattsoria.com',
  integrations: [tailwind({
    applyBaseStyles: false
  }), mdx()]
});