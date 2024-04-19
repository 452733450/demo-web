import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {  // 所有 /api 的请求都会被代理
        /*target: 'http://47.100.219.248:7001',  // 后端服务地址*/
        target: 'http://localhost:7001',  // 后端服务地址
        changeOrigin: true,  // 需要虚拟主机站点
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})


