import React, { useState } from 'react';

const ProcessTabs = () => {
  const [activeTab, setActiveTab] = useState('abertura');

  const aberturaSteps = [
    "Você realiza o cadastro no site e contrata o plano com o adiantamento de uma mensalidade.",
    "Avaliamos o modelo de negócio, confeccionamos a documentação e te enviamos.",
    "Nossa equipe te orienta como fazer o pagamento de taxas para o registro da sua empresa.",
    "CNPJ na mão! Cuidamos do processo nos órgãos públicos e avisamos quando você puder emitir nota fiscal."
  ];

  const trocaSteps = [
    "Entre em contato conosco e nos conte sobre sua empresa e o contador atual.",
    "Solicitamos a documentação necessária ao seu contador anterior de forma rápida e sem burocracia.",
    "Cuidamos de toda a transição e você passa a ter acesso aos nossos serviços e plataforma.",
    "Desfrute de uma contabilidade moderna e eficiente, com suporte dedicado."
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">
          Abrir empresa grátis é com a <span className="text-cyan-600">Simplizei</span>.
        </h2>

        <div className="flex justify-center space-x-8 text-sm font-semibold mb-8 max-w-2xl mx-auto">
          <button 
            className={`relative px-4 py-2 transition-all duration-300 ${
              activeTab === 'abertura' 
                ? 'text-cyan-600' 
                : 'text-gray-500 hover:text-blue-700'
            }`}
            onClick={() => setActiveTab('abertura')}
          >
            Abertura de empresa
            {activeTab === 'abertura' && (
              <span className="absolute bottom-0 left-0 w-full h-1 bg-cyan-500 rounded-full"></span>
            )}
          </button>
          <button 
            className={`relative px-4 py-2 transition-all duration-300 ${
              activeTab === 'trocar-contador' 
                ? 'text-cyan-600' 
                : 'text-gray-500 hover:text-blue-700'
            }`}
            onClick={() => setActiveTab('trocar-contador')}
          >
            Trocar de contador
            {activeTab === 'trocar-contador' && (
              <span className="absolute bottom-0 left-0 w-full h-1 bg-cyan-500 rounded-full"></span>
            )}
          </button>
        </div>

        <div className="transition-all duration-500">
          {activeTab === 'abertura' && (
            <div className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                <div className="flex flex-col items-center relative">
                  <div className="w-56 h-56 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full mb-6 overflow-hidden shadow-lg border-4 border-white transform hover:scale-105 transition-transform duration-300">
                    <img 
                      src="./assets/img/maria.jpeg" 
                      alt="Maria Lima" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[-80px] opacity-80 bg-gradient-to-r from-blue-800 to-cyan-600 text-white px-4 py-2 rounded-full shadow-md">
                    <p className="text-xs opacity-90">Contadora Simplizei</p>
                  </div>
                </div>

                <div className="text-left space-y-6">
                  {aberturaSteps.map((step, index) => (
                    <div 
                      key={index} 
                      className="flex items-start space-x-4 group"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold shadow-md transform group-hover:scale-110 transition-transform duration-200">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200 leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" onClick={() => window.open('/planos-simplizei', '_self')}>
                  Quero abrir minha empresa
                </button>
              </div>
            </div>
          )}

          {activeTab === 'trocar-contador' && (
            <div className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                <div className="flex flex-col items-center relative">
                  <div className="w-56 h-56 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full mb-6 overflow-hidden shadow-lg border-4 border-white transform hover:scale-105 transition-transform duration-300">
                    <img 
                      src="./assets/img/male.jpeg" 
                      alt="João Silva" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[-80px] opacity-80 bg-gradient-to-r from-blue-800 to-cyan-600 text-white px-4 py-2 rounded-full shadow-md">
                    <p className="text-xs opacity-90">Contador Simplizei</p>
                  </div>
                </div>

                <div className="text-left space-y-6">
                  {trocaSteps.map((step, index) => (
                    <div 
                      key={index} 
                      className="flex items-start space-x-4 group"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold shadow-md transform group-hover:scale-110 transition-transform duration-200">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200 leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" onClick={() => window.open('/trocar-de-contador', '_self')}>
                  Quero trocar de contador
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

    </section>
  );
};

export default ProcessTabs;