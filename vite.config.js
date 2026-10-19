import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './', // ✅ 部署到ESP32静态文件必须加这个！相对路径
})
