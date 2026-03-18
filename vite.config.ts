import process from 'node:process';
import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  server: {
    host: true,                // 外部（Cloud Runのロードバランサー）からの接続を許可
    port: Number(process.env.PORT) || 8080, // Google Cloud指定のポート、なければ8080を使用
  },
  preview: {
    host: true,
    port: Number(process.env.PORT) || 8080,
  }
})