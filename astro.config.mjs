// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://rafunaconsulting.com',
  trailingSlash: 'always',
  // Inline CSS: removes render-blocking requests on first paint.
  build: { format: 'directory', inlineStylesheets: 'always' },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});
