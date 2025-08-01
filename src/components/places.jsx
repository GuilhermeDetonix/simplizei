import React, { useState, useEffect } from 'react';
import CadastroFuncionario from '../components/CadastroFuncionario';
import { motion, AnimatePresence } from 'framer-motion';

const Places = () => {
  const [showForm, setShowForm] = useState(false);
  const escritórios = [
    {
      cidade: "São Paulo",
      endereco: [
        "R. Alexandre Herculano",
        "197 CJ 1210 – Gonzaga",
        "Santos - SP, 11050-031"
      ],
      imagem: "/assets/img/place1.jpg"
    },
    // {
    //   cidade: "Curitiba",
    //   endereco: [
    //     "R. Nunes Machado, 68, 16º andar,",
    //     "Centro, Curitiba - PR, 80420-120",
    //     "Cond. The Five - East Batel"
    //   ],
    //   imagem: "/assets/img/place2.jpg"
    // }
  ];


  return (
    <section className="py-16 bg-gray-50 px-4">
      <div className="text-center mb-12">
        <h2 className="text-blue-900 mb-12 font-bold text-base sm:text-6xl md:text-3xl">
          Conheça nosso escritório
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {escritórios.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-stretch bg-white rounded-2xl shadow-md overflow-hidden"
          >
            <div className="p-6 text-left w-full md:w-1/2">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                {item.cidade}
              </h3>
              <p className="text-sm text-gray-700 font-semibold mb-1">Endereço:</p>
              {item.endereco.map((linha, idx) => (
                <p key={idx} className="text-3xs text-gray-600">
                  {linha}
                </p>
              ))}
            </div>
            <div className="w-full md:w-1/2 h-48 md:h-auto relative">
              <img
                src={item.imagem}
                alt={"Foto do escritório de " + item.cidade}
                className="w-full h-[200px] object-cover rounded-l-[200px] "
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h3 className="sm:text-2xl text-blue-900 title md:text-3xl mb-12">
          Identificou-se com a nossa empresa?
        </h3>
        <p className="text-gray-700 mb-6">
          Venha fazer parte do nosso time e desburocratizar a vida de quem empreende com a gente!
        </p>
        <button className="bg-cyan-400 text-white font-semibold px-6 py-3 rounded-full hover:bg-cyan-500 transition" onClick={() => setShowForm(true)}>
          Confira nossas vagas
        </button>
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
}

export default Places;