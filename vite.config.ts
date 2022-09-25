import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'src': resolve(__dirname, './src'),
      'types': resolve(__dirname, './src/types'),
      'assets': resolve(__dirname, './src/assets'),
      'contexts': resolve(__dirname, './src/contexts'),
      'db': resolve(__dirname, './src/db'),
      'components': resolve(__dirname, './src/components'),
      'pages': resolve(__dirname, './src/pages'),
      'theme': resolve(__dirname, './src/theme'),
      'utils': resolve(__dirname, './src/utils'),
      'hooks': resolve(__dirname, './src/hooks')
    }
  },
  plugins: [react()]
})
