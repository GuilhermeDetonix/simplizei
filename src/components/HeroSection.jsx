import React from 'react';

const HeroSection = () => {
  const benefits = [
    "Planos de acordo com o seu perfil.",
    "Assessores especializados no segmento do seu negócio.",
    "Você escolhe como quer ser atendido: por telefone, WhatsApp, chat ou e-mail.",
    "Sua empresa 100% regularizada e pagando o mínimo de impostos."
  ];

  return (
    <section className="bg-blue-50 w-full overflow-hidden">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Conteúdo textual - ocupa toda a largura em mobile */}
          <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-blue-900 leading-tight">
              Da abertura do CNPJ até a contabilidade completa, conte com a gente.
            </h1>
            
            <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 text-green-500 mt-0.5 mr-2 sm:mr-3" 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 text-base sm:text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 md:mt-8">
              <button onClick={() => window.open('/cadastrar', '_self')} className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold transition-all duration-300">
                Abra sua empresa grátis
              </button>
              <button className="border-2 border-blue-700 text-blue-700 hover:bg-blue-50 px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold transition-all duration-300" onClick={() => window.open('/trocar-de-contador', '_self')}>
                Troque de contador
              </button>
            </div>
          </div>
          
          {/* Imagem - oculta em mobile e aparece a partir de lg */}
          <div className="hidden lg:block lg:h-[35rem] w-1/2">
            <img 
              src="/assets/img/mulher3.jpeg" 
              alt="Consultor financeiro" 
              className="rounded-l-[500px] w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;