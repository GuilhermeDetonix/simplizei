import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiStar, FiExternalLink } from 'react-icons/fi';

const FAQSection = (questions = []) => {
  const [activeIndex, setActiveIndex] = useState(null);

  var faqs = [
    {
      question: "O que está incluso na mensalidade?",
      answer: "A mensalidade inclui todos os serviços contábeis essenciais para sua empresa, como escrituração fiscal, emissão de relatórios, envio de obrigações acessórias e suporte contábil ilimitado."
    },
    {
      question: "A Simplizei tem contadores de verdade?",
      answer: "Sim, todos os nossos contadores são profissionais registrados no CRC, com vasta experiência em diversos segmentos de mercado. Nossa equipe passa por treinamentos constantes para manter-se atualizada."
    },
    {
      question: "Preciso de contador para abrir empresa?",
      answer: "Sim, a legislação brasileira exige a participação de um contador registrado no CRC para formalizar a abertura de empresas, além de cumprir com todas as obrigações legais e fiscais desde o primeiro dia."
    },
    {
      question: "Como posso cancelar o serviço?",
      answer: "O cancelamento pode ser feito a qualquer momento através do seu painel de cliente, sem taxas ou multas. Nossa equipe fará a transição de forma organizada para garantir que todas as obrigações sejam cumpridas."
    },
    {
      question: "Vocês emitem certificado digital?",
      answer: "Sim, oferecemos certificados digitais 100% gratuitos para nossos clientes e auxiliamos em todo o processo de emissão e instalação."
    }
  ];

  if (Object.values(questions).length > 0) {
    faqs = questions.questions;
  }


  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossos serviços.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-2">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden transition-all duration-300 ${activeIndex === index ? 'shadow-lg' : 'shadow-md hover:shadow-lg'}`}
            >
              <button
                className={`w-full flex justify-between items-center text-left p-4 sm:p-3 font-medium text-lg transition-colors ${activeIndex === index ? 'bg-blue-600 text-white' : 'bg-white text-blue-900 hover:bg-blue-300 hover:text-white'}`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="mr-4">{faq.question}</span>
                {activeIndex === index ? (
                  <FiChevronUp className="flex-shrink-0 text-xl" />
                ) : (
                  <FiChevronDown className="flex-shrink-0 text-xl" />
                )}
              </button>
              
              <div
                id={`faq-answer-${index}`}
                className={`bg-white px-6 sm:px-8 overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'py-6 border-t border-blue-100' : 'max-h-0 py-0'}`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">
            Confira o que nossos clientes falam sobre nós
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Somos reconhecidos pela excelência no atendimento e especialização em diversos segmentos.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12">
            <div className="flex items-center bg-white rounded-lg px-6 py-3 shadow-sm hover:shadow-md transition-shadow">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/217/217853.png" 
                alt="Reclame Aqui" 
                className="h-8 mr-3" 
              />
              <div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FiStar 
                      key={i} 
                      className={`text-yellow-400 ${i < 4 ? 'fill-current' : ''} text-sm`} 
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-700">Nota 9.5/10</span>
              </div>
            </div>

            <div className="flex items-center bg-white rounded-lg px-6 py-3 shadow-sm hover:shadow-md transition-shadow">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/2504/2504739.png" 
                alt="Google" 
                className="h-8 mr-3" 
              />
              <div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FiStar 
                      key={i} 
                      className={`text-yellow-400 ${i < 4 ? 'fill-current' : ''} text-sm`} 
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-700">4.7/5 (1.200+ avaliações)</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;