// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import icon from 'astro-icon'

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://fan.kumogorogo.ro/',
  trailingSlash: 'always',

  image: {
    domains: ['pbs.twimg.com']
  },

  vite: {
    plugins: [icon(), tailwindcss()],
  },

  integrations: [svelte()],

  env: {
    schema: {
      ARCHIVE_CDN: envField.string({ context: "client", access: 'public', default: 'https://cdn.kumogorogo.ro' })
    }
  }
});
