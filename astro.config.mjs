import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://saoud2021.github.io',
  base: '/Saoud2021',
  integrations: [tailwind()],
})
