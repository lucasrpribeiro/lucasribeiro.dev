import { defineConfig } from 'astro/config'
import partytown from '@astrojs/partytown'
import tailwind from '@astrojs/tailwind'
import vue from '@astrojs/vue'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'
// import image from "@astrojs/image";

const { CF_PAGES_URL } = process.env || {}

// https://astro.build/config
export default defineConfig({
  site: CF_PAGES_URL || 'https://lucasribeiro.dev.br',
  integrations: [tailwind(), vue(), sitemap(), robotsTxt(), partytown()],
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
})
