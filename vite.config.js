import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // Define a base URL para o seu aplicativo.
  // '/' é o valor padrão e geralmente o ideal para SPAs.
  base: '/',

  // Plugins que o Vite vai usar.
  // @vitejs/plugin-react é essencial para projetos React.
  plugins: [react()],
  
  // Configuração para o servidor de desenvolvimento.
  server: {
    // A propriedade `historyApiFallback` do `connect-history-api-fallback`
    // é essencial para garantir que o servidor de desenvolvimento
    // redirecione todas as solicitações para o `index.html`.
    // Isso é crucial para o React Router, pois impede erros 404
    // ao recarregar a página ou acessar rotas diretamente.
    historyApiFallback: true,
  },

  // Configuração de resolução de módulos.
  resolve: {
    // Cria um alias para o diretório 'src'
    // facilitando a importação de componentes.
    // Ex: import Componente from '@/components/Componente';
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  
  // Configurações de build para a produção.
  build: {
    // O diretório onde os arquivos de produção serão gerados.
    outDir: 'dist',
    
    // Limite de aviso para o tamanho dos chunks.
    chunkSizeWarningLimit: 1000,
    
    // Opções avançadas do Rollup.
    rollupOptions: {
      output: {
        // Separa os módulos de 'node_modules' em um chunk separado chamado 'vendor'.
        // Isso melhora o cache no navegador, pois as dependências raramente mudam.
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});