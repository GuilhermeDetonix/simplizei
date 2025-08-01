import React from "react";
import { motion } from "framer-motion";

const BeneficiosCobranca = (textos = []) => {
  var cards = [
    {
      icon: "/assets/icons/10306725.png", // Substitua pelo seu ícone
      title: "Isento de mensalidades",
      description: "Sem cobrança de taxas ou tarifas extras.",
    },
    {
      icon: "/assets/icons/2972543.png",
      title: "Recebimento em 2 dias úteis",
      description: "Faça cobranças no cartão e receba em 2 dias úteis*",
    },
    {
      icon: "/assets/icons/3333376.png",
      title: "Cartão de Crédito",
      description: "Múltiplas bandeiras com opção de venda parcelada em até 12x.",
    },
  ];

  if (textos.length > 0) {
    cards = textos;
  }

  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-10">
        Por que o <span className="text-cyan-500">Cobre seu Cliente</span> é a melhor solução?
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white shadow-md rounded-2xl p-6 text-left hover:shadow-lg transition duration-300"
          >
            <img src={item.icon} alt="ícone" className="mb-4 w-10 h-10" />
            <h3 className="text-blue-900 font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-700 mt-1 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <p className="text-gray-500 text-sm mt-8">
        *Para as transações que não caiam em análise.
      </p>
    </section>
  );
};

export default BeneficiosCobranca;
