import { fileURLToPath, URL } from 'node:url'

import { defineConfig, searchForWorkspaceRoot } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    fs: {
      allow: [
        searchForWorkspaceRoot(process.cwd()),
        'C:/Users/andy.rothwell/Projects/vue3-pinboard/node_modules/@fortawesome/fontawesome-pro/webfonts',
      ]
    }
  },
  plugins: [
    vue(),
    vueDevTools(),
    AutoImport({
      imports: [
        'vue',
        // 'vue-router',
        // {
        //   'pinia': [ 'defineStore', 'storeToRefs', 'acceptHMRUpdate' ],
        // }
      ],
      // dirs: [
        // './node_modules/@phila/pinboard/src/stores',
      // ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  optimizeDeps: {
    include: [ '@turf/jsts', 'maplibre-gl', 'concaveman' ],
    // exclude: [ '@phila/pinboard' ]
  }
})
