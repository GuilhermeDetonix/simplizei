import React from 'react';
import { motion } from 'framer-motion';

const TextWithCard = () => {
  return (
    <section className="w-full bg-[#f8fbff] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Texto à esquerda */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="siteTitulo mb-4">
            Quanto custa o certificado digital A1?
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-6">
            Ao escolher a Simplizei para fazer sua gestão contábil, garantimos um desconto especial com a nossa parceira Soluti para você adquirir seu certificado digital.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="#"
            className="inline-block bg-cyan-400 hover:bg-cyan-500 text-white font-semibold text-sm md:text-base px-6 py-3 rounded-full transition-all shadow-md"
          >
            Conheça nossos planos
          </motion.a>
        </motion.div>

        {/* Card à direita */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full md:w-[360px] bg-white shadow-xl rounded-2xl p-6 text-center"
        >
          <img
            src="/assets/img/soluti.png"
            alt="Logo Soluti"
            className="h-15 mx-auto mb-4"
          />
          <ul className="text-gray-700 text-sm md:text-base space-y-1 text-left mb-4 list-disc list-inside">
            <li>Validade: 1 ano;</li>
            <li>Parcelamento em até 10 vezes;</li>
            <li>Desconto de 25% para clientes Simplizei.</li>
          </ul>
          <div className="text-sm text-gray-400 line-through mb-1">De R$235,00</div>
          <div className="text-2xl md:text-3xl font-bold text-[#002f5f]">R$ 175<span className="text-base">,00</span></div>
        </motion.div>
      </div>
    </section>
  );
};

export default TextWithCard;
