import { fileURLToPath, URL } from 'node:url'

import { defineConfig, searchForWorkspaceRoot, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Inspect from 'vite-plugin-inspect'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    css: {
      preprocessorOptions: {
        scss: {
          // api: 'modern-compiler',
          includePaths: ['node_modules'],
        },
      },
    },
    server: {
      fs: {
        allow: [
          searchForWorkspaceRoot(process.cwd()),
          '../vue3-pinboard/node_modules/@fortawesome/fontawesome-pro/webfonts',
        ]
      }
    },
    plugins: [
      vue(),
      vueDevTools(),
      Inspect(),
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
    // base: 'testing/primary-care/',
    base: env.VITE_PUBLICPATH,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@pinboard': env.VITE_LINKED ? fileURLToPath(new URL('./node_modules/@phila/pinboard/src/main.js', import.meta.url)) : '@phila/pinboard',
      }
    },
    optimizeDeps: {
      // include: [ '@turf/jsts', 'maplibre-gl', 'concaveman' ],
      // exclude: [ '@phila/pinboard' ]
      // extensions: [".scss", ".sass"],
    }
  }
})
