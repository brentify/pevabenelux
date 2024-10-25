import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
// import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://brentify.github.io',
  base: '/pevabenelux',

  integrations: [
    tailwind(),
    sitemap(),
    // robotsTxt({
    //   sitemap: true,

    // }),
  ],
});
