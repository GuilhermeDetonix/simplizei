// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';

// export default defineConfig({
//   base: './',
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src')
//     }
//   },
//   build: {
//     outDir: 'dist',
//     chunkSizeWarningLimit: 1000,
//     commonjsOptions: {
//       transformMixedEsModules: true
//     }
//   }
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  // base relativo garante que assets sejam carregados corretamente mesmo em subpastas
  base: './',

  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
      interval: 1000,
    },
    hmr: {
      overlay: false, // Desativa erros de overlay que podem travar
      clientPort: 5173
    },
    host: '0.0.0.0',
    port: 5173
  },
  optimizeDeps: {
    include: [
      'firebase/app',
      'firebase/auth',
      // 'firebase/firestore',
      // 'firebase/storage',
    ],
    exclude: ['firebase'], // evita conflitos
  },

  resolve: {
    alias: {
      // '@' facilita imports relativos a partir de src/
      '@': path.resolve(__dirname, 'src'),

      // aliases explícitos do Firebase para evitar problemas
      'firebase/app': 'firebase/app',
      'firebase/auth': 'firebase/auth',
      'firebase/firestore': 'firebase/firestore',
    },
  },

  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1000, // aumenta limite para evitar warnings

    commonjsOptions: {
      transformMixedEsModules: true, // importante para firebase
    },

    rollupOptions: {
      output: {
        manualChunks(id) {
          // separa node_modules em vendor para melhor cache e performance
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});
