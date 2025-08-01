import React from 'react';

const MeiSection = () => {
  return (
    <section className="bg-gradient-to-t p-12 from-white to-blue-50 w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Conteúdo textual - ocupa toda a largura em mobile */}
        <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4 md:mb-6 leading-tight">
            Sua empresa precisa deixar de ser MEI?
          </h2>

          <p className="text-gray-700 text-base sm:text-lg mb-6 md:mb-8">
            Você não precisa esperar ultrapassar o limite de faturamento. Temos um time de
            especialistas pronto para analisar o perfil atual do seu MEI, explicar todo o processo e realizar o
            desenquadramento de forma gratuita.
          </p>

          <button onClick={() => window.open('/deixar-de-ser-mei', '_self')} className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30 text-sm sm:text-base">
            Deixar de ser MEI
          </button>
        </div>

        {/* Imagem - oculta em mobile e aparece a partir de lg */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-center">
          <img
            src="./assets/img/homem_recorte.png"
            alt="Consultora de Negócios"
            className="w-[350] h-[400] 
               max-w-[380px]      /* Mobile (default) */
               sm:max-w-[380px]   /* sm:640px */
               md:max-w-[380px]   /* md:768px */
               lg:max-w-[380px]   /* lg:1024px */
               xl:max-w-[450px]  /* xl:1280px */
               object-contain
               transition-all duration-300 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};

export default MeiSection;