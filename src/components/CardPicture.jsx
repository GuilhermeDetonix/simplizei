import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    title: 'O que é conta bancária PJ? Vale a pena ter uma?',
    text: 'A conta bancária PJ nada mais é que uma conta corrente, poupança ou de investimentos aberta em uma instituição...',
    image: '/assets/img/pessoas_juridicas.jpg',
  },
  {
    title: 'Conta Digital PJ: dicas de abertura e melhores bancos para simplificar as finanças',
    text: 'Um serviço menos burocrático, mais transparente e sem tarifas. Essas são...',
    image: '/assets/img/conta_bancaria.png',
  },
  {
    title: 'Gestão financeira empresarial: como fazer seu negócio crescer',
    text: 'Se você tem dúvidas sobre o conceito de “o que é gestão financeira?”, a gestão financeira empresarial é o conjunto ...',
    image: '/assets/img/upscale.jpg',
  },
];

const PJInfoSection = () => {
  return (
    <section className="w-full mx-auto bg-white py-16 px-6 md:px-12 bg-gradient-to-t from-white to-[#F8FBFE]">
      <div className="lg:w-3/4 mx-auto text-center">
        {/* Título */}
        <h2 className="text-2xl md:text-3xl font-bold text-sky-900 mb-4">
          Tudo o que você precisa saber sobre conta <br className="hidden sm:block" /> bancária PJ e organização financeira<span className="text-cyan-500">.</span>
        </h2>
        <p className="text-gray-600 mb-10 text-sm md:text-base">
          Preparamos diversos conteúdos para apoiar sua jornada de sucesso.
        </p>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-sm md:text-base font-semibold text-sky-900 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm flex-1">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PJInfoSection;
