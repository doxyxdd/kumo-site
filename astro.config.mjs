// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import icon from 'astro-icon'

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
});
