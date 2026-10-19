import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 导入node内置path模块
import { resolve } from 'node:path'

export default defineConfig({
  base: './',
  plugins: [vue()],
  resolve: {
    alias: {
      // @ 指向src
      '@': resolve(import.meta.dirname, './src')
    }
  }
})
