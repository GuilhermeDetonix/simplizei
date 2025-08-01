import React from 'react';
import { motion } from 'framer-motion';

const PlanosCertificado = () => {
  return (
    <section className="bg-[#f8fbfd] py-12 px-4 md:px-10 lg:px-20">
      <div className="text-center mb-10">
        <h2 className="siteTitulo">
          Seu Certificado Digital pode sair de graça<span className="text-cyan-400">.</span>
        </h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Escolha o Plano Padrão ou Experts e tenha seu certificado sem pagar nada.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Plano Padrão */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col sm:flex-row bg-white rounded-xl shadow-lg p-6 items-center gap-6"
        >
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-[#002b7f] mb-2">Plano Padrão</h3>
            <div className="flex items-baseline space-x-1">
              <span className="text-base">R$</span>
              <span className="text-5xl font-bold text-[#002b7f]">127</span>
              <span className="text-sm text-gray-600">/mês</span>
            </div>
          </div>
          <div className="relative w-[190px] h-[190px] min-w-[140px]">
            <img
              src="/assets/img/mulher3.png"
              alt="Contadora Simplizei"
              className="rounded-full object-cover w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
            <div className="absolute opacity-[0.8] bottom-0 left-1/2 transform -translate-x-1/2 bg-[#002b7f] text-white text-xs p-1 rounded-full px-3 shadow-lg whitespace-nowrap">
              <strong>Contadora Simplizei</strong>
            </div>
          </div>
        </motion.div>

        {/* Plano Experts */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col sm:flex-row bg-white rounded-xl shadow-lg p-6 items-center gap-6"
        >
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-[#002b7f] mb-2">Plano Experts</h3>
            <div className="flex items-baseline space-x-1">
              <span className="text-base">R$</span>
              <span className="text-5xl font-bold text-[#002b7f]">359</span>
              <span className="text-sm text-gray-600">/mês</span>
            </div>
          </div>
          <div className="relative w-[190px] h-[190px] min-w-[140px]">
            <img
              src="/assets/img/homem2.png"
              alt="Contador Simplizei"
              className="rounded-full object-cover w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
            <div className="absolute opacity-[0.8] bottom-0 left-1/2 transform -translate-x-1/2 bg-[#002b7f] text-white text-xs p-1 rounded-full px-3 shadow-lg whitespace-nowrap">
              <strong>Contador Simplizei</strong>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="text-center mt-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="bg-cyan-400 text-[#002b7f] hover:bg-cyan-300 transition-colors font-semibold px-6 py-3 rounded-full shadow-md"
        >
          Conheça nossos planos
        </motion.button>
      </div>
    </section>
  );
};

export default PlanosCertificado;
