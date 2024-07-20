import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://halloween.mattsoria.com',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
  ],
  output: 'hybrid',
  adapter: netlify({
    imageCDN: false,
    cacheOnDemandPages: true,
  }),
});
