import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts'
import path from 'path'

const name = 'index'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.', 'src')
    }
  },
  build: {
    outDir: 'lib',
    sourcemap: false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: name,
      fileName: format => `${name}.${format === 'iife' ? 'min' : format}.js`,
      formats: ['es', 'umd', 'iife']//使用哪些模块化方案进行打包，多个方案对应多个产物
    }
  },
  plugins: [
    vue(),
    dts({
      cleanVueFileName: false,
      include: ["src/**/*.ts"],
      outDir: "./lib",
    })
  ]
})
