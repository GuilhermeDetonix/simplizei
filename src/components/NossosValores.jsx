import {
  Heart,
  Users,
  CircleDot,
  ThumbsUp,
  BarChart,
  ArrowUpRight
} from "lucide-react";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CadastroFuncionario from '../components/CadastroFuncionario';

const valores = [
  {
    icon: <Heart className="text-blue-700 w-6 h-6" />,
    title: "Agimos com propósito",
    text: "Tomamos decisões que beneficiam nossos clientes e desta forma impactamos positivamente no país. Nossa paixão por fazer a diferença transparece em tudo o que fazemos."
  },
  {
    icon: <Users className="text-blue-700 w-6 h-6" />,
    title: "Construímos juntos",
    text: "Somos uma só Simplizei, formada por áreas integradas com objetivos e propósitos em comum. Juntos, conseguimos alcançar o que sozinhos não seria possível."
  },
  {
    icon: <CircleDot className="text-blue-700 w-6 h-6" />,
    title: "Trabalhamos com simplicidade",
    text: "Descomplicar está no nosso sangue. Acabamos com a burocracia e a complexidade na hora de tomar decisões, resolver problemas e criar produtos."
  },
  {
    icon: <ThumbsUp className="text-blue-700 w-6 h-6" />,
    title: "Somos verdadeiros",
    text: "Construímos relacionamentos verdadeiros através da franqueza, confiança e respeito. Entendemos que as diferentes perspectivas nos desafiam a enxergar novas ideias e oportunidades."
  },
  {
    icon: <BarChart className="text-blue-700 w-6 h-6" />,
    title: "Entregamos resultados com excelência",
    text: "Com pensamento inovador, excelência e velocidade, agimos como donos assumindo a responsabilidade para si sempre que necessário."
  },
  {
    icon: <ArrowUpRight className="text-blue-700 w-6 h-6" />,
    title: "Estamos 1% melhores todos os dias",
    text: "Nossas atitudes se tornam cada vez melhores e servem de exemplo para todos. Juntos, multiplicamos pessoas cada vez mais preparadas, competentes e realizadas."
  }
];

const ValoresSection = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <section className="bg-[#f9fbfd] py-20 px-6 rounded-[60%_0_0_50%] md:rounded-[15%_0_0_15%] lg:rounded-[30%_0_30%_0] my-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Valores que nos guiam
        </h2>

        {/* Grid de valores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14 text-left">
          {valores.map((valor, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="mt-1">{valor.icon}</div>
              <div>
                <h3 className="text-blue-900 font-semibold text-lg">
                  {valor.title}
                </h3>
                <p className="text-gray-700 text-sm mt-1 leading-relaxed">
                  {valor.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Botão */}
        <div className="mt-12">
          <button className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-6 py-3 rounded-full transition duration-300" onClick={() => setShowForm(true)}>
            Faça parte do nosso time
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

export default ValoresSection;
