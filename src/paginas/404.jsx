import React from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import '../styles/404.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <section className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
        {/* Coluna da Imagem */}
        <div className="hidden lg:flex lg:w-1/2 justify-center items-center bg-white p-0">
          <img
            src="/assets/img/404.jpg"
            alt="Erro 404 - Página não encontrada"
            className="max-w-full h-auto object-contain animate-float"
          />
        </div>

        {/* Coluna do Conteúdo */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8 text-center animate-fade-in-down">
            <div className="text-9xl font-bold text-blue-600 mb-4">404</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Oops! Página não encontrada</h2>
            <p className="text-gray-600 mb-6">
              Parece que você se perdeu no espaço digital. A página que você está procurando pode ter sido movida, removida ou nunca existiu.
            </p>
            
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Dica: Verifique o URL digitado</span>
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => navigate(-1)}
                className="w-full px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Voltar para a página anterior
              </button>

              <button
                onClick={() => navigate('/')}
                className="w-full px-6 py-3 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 transition flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Ir para a página inicial
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Precisa de ajuda? <a href="javascript:;" onClick={() => window.open(`https://api.whatsapp.com/send?phone=${import.meta.env.VITE_APP_WHATSAPP_NUMBER}&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Simplizei.`, '_blank')} className="text-blue-600 hover:text-blue-800">Entre em contato</a> com nosso suporte.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;