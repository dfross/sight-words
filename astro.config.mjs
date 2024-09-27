import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vue from '@astrojs/vue'
import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'
import compressor from 'astro-compressor';
export default defineConfig({
    site: 'https://mksw.netlify.app',
    integrations: [tailwind(), vue(), sitemap(), icon(), compressor()],
})