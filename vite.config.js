import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  assetsInclude: ['**/*.glb', '**/*.gltf', '**/*.usdz', '**/*.iset', '**/*.fset3', '**/*.fset'],

  server: {
    proxy: {
      // string shorthand
      // '/foo': 'http://localhost:4567',
      // with options
      '/api/': {
        target: 'https://testenv.ro/files/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      // with RegEx
      // '^/fallback/.*': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/fallback/, '')
      // },
      // Using the proxy instance
      '/api': {
        target: 'https://testenv.ro/files/',
        changeOrigin: true,
        configure: (proxy, options) => {
          // proxy will be an instance of 'http-proxy'
        }
      },
      // Proxying websockets or socket.io
      '/socket.io': {
        target: 'ws://localhost:5173',
        ws: true
      },

      '/files/': {
        target: 'https://testenv.ro/files/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/imgs/, '')
      }
    }
  }

})
