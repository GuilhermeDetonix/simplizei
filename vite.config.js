import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  // Configuração base para garantir que os assets sejam carregados corretamente
  base: './',

  plugins: [react()],

  // Configurações do servidor de desenvolvimento
  server: {
    watch: {
      usePolling: true,
      interval: 1000,
    },
    hmr: {
      overlay: false,
      clientPort: 5173
    },
    host: '0.0.0.0',
    port: 5173
  },

  // Configurações de resolução de imports
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')  // Alias para imports a partir de src/
    },
  },

  // Configurações de build
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1000,  // Aumenta limite para evitar warnings

    // Opções para Rollup
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Separa node_modules em vendor para melhor cache
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});