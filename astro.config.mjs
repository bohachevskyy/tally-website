import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tallyslips.com',
  trailingSlash: 'ignore',
  compressHTML: true,
});
