import React from "react";
import { motion } from "framer-motion";

const TaxaCartao = () => {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-10">
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#002f87]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Sem taxa de adesão e mensalidades<span className="text-cyan-500">.</span>
        </motion.h2>

        <motion.div
          className="w-full max-w-md bg-white rounded-2xl shadow-lg p-0 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 border border-gray-100 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Texto */}
          <div className="flex-1 text-left p-5">
            <h3 className="text-lg md:text-xl font-semibold text-[#002f87] mb-4">
              Cartão de crédito
            </h3>
            <p className="text-sm text-black mb-2">
              <strong className="font-medium">Taxa à vista ou parcelado</strong><br />
              2,99% + R$ 0,99 por operação.
            </p>
            <p className="text-sm text-black">
              <strong className="font-medium">Tarifa de antecipação</strong><br />
              1,89% por parcela.
            </p>
          </div>

          {/* Imagem */}
          <motion.div
            className="flex-shrink-0 w-full md:w-[38%] h-[280px] lg:h-[140px] rounded-l-[10%] lg:rounded-l-[50%] overflow-hidden"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1.2, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src="/assets/img/dadosCartao.png" // Substitua pela sua imagem real
              alt="Homem com cartão de crédito"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TaxaCartao;
