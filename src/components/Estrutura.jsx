import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CadastroFuncionario from '../components/CadastroFuncionario';

const estruturas = [
  {
    title: "Aquisição e Mercado",
    text: "Esta área tem como objetivo encontrar estratégias para garantir a aquisição de novos clientes para a Simplizei.",
  },
  {
    title: "Corporativo",
    text: "O objetivo das áreas corporativas é dar sustentação e apoio estratégico às demais áreas da companhia.",
  },
  {
    title: "Produtos ao cliente",
    text: "Esta área consiste em garantir que o nosso cliente tenha uma experiência personalizada e eficiente de acordo com o plano contratado.",
  },
  {
    title: "Serviços ao cliente",
    text: "Nesta frente nosso objetivo é garantir a entrega de todos os serviços e rotinas contratados pelo cliente.",
  },
];

const MacroestruturasSection = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <section className="w-full px-4 py-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Conheça nossas macroestruturas
          <span className="text-cyan-500">.</span>
        </h2>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-12">
          {estruturas.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-lg transition duration-300"
            >
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Botão */}
        <div className="mt-10">
          <button className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-6 py-3 rounded-full transition duration-300" onClick={() => setShowForm(true)}>
            Venha trabalhar conosco
          </button>
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

export default MacroestruturasSection;
