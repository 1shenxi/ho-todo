import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'

function rootResolve(p: string) {
  return resolve(__dirname, p)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      "@": rootResolve('src'),
      "@pages": rootResolve('src/pages'),
      "@components": rootResolve('src/components'),

      "@img": rootResolve('src/assets/img'),
    }
  }
})
