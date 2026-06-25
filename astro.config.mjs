import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Update `site` to your real domain before the first deploy.
export default defineConfig({
  site: 'https://your-domain.com',
  integrations: [mdx()],
});
