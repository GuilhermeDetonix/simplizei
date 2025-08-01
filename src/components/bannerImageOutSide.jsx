import React, { useState, useEffect } from 'react';
import CadastroFuncionario from '../components/CadastroFuncionario';
import { motion, AnimatePresence } from 'framer-motion';

const BannerImageOutSide = ({ title, description, image, person }) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <section className="relative w-full overflow-hidden pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28 2xl:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center relative z-10 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-900 px-6 sm:px-8 md:px-10 lg:px-12 rounded-tl-[40px] rounded-br-[40px] md:rounded-tl-[60px] md:rounded-br-[60px] lg:rounded-tl-[80px] lg:rounded-br-[80px] shadow-xl overflow-hidden">

          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left py-8 md:py-10 lg:py-12 pr-0 lg:pr-6 xl:pr-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-[2.75rem] font-bold text-blue-900 leading-tight">
              {title || "Quer fazer parte da nossa equipe?"}
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-800 my-4 mx-auto lg:mx-0 rounded-full"></div>

            <p className="text-gray-700 mt-3 md:mt-4 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {description || "Então conheça e se inscreva em nossas vagas."}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-6 md:mt-8 justify-center lg:justify-start">
              <button className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-cyan-500/30 text-sm sm:text-base" onClick={() => setShowForm(true)}>
                Confira nossas vagas
              </button>
              <button className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 text-sm sm:text-base" onClick={() => window.open(`/quem-somos`, '_self')}>
                Conheça nossa cultura
              </button>
            </div>
          </div>

          {/* Image Container */}
          <div className="w-full lg:w-1/2 relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px]">
            {/* Visible only on desktop (lg and up) */}
            <div className="absolute inset-0 hidden md:block">
              <div className="relative w-full h-full">
                <img
                  src={image || "/default-team-member.jpg"}
                  alt={person?.name || "Team member"}
                  className="absolute bottom-0 right-0 h-full w-auto max-w-none object-contain object-right"
                  style={{
                    transform: 'translateX(15%)',
                    transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
                  }}
                  loading="lazy"
                />

                {/* Person Tag */}
                {person && person.name && (
                  <div className="absolute bottom-6 left-1/2 lg:left-auto lg:right-[25%] bg-blue-900 text-white rounded-full px-4 py-2 text-sm shadow-lg transform -translate-x-1/2 lg:translate-x-0 hover:scale-105 transition-all duration-300 z-20 min-w-[140px]">
                    <p className="font-bold whitespace-nowrap">{person.name}</p>
                    {person.role && (
                      <p className="text-xs opacity-90 whitespace-nowrap">
                        {person.role}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile fallback image (optional) */}
            <div className="md:hidden flex justify-center w-full h-full">
              <img
                src={image || "/default-team-member-mobile.jpg"}
                alt={person?.name || "Team member"}
                className="h-full w-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CadastroFuncionario
              onClose={() => setShowForm(false)}
              onSuccess={(data) => { /* tratar sucesso */ }}
              empresaNome="Nome da Empresa"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BannerImageOutSide;