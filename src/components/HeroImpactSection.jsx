import React, { useState, useEffect } from 'react';
import CadastroFuncionario from '../components/CadastroFuncionario';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSectionCircles = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* SVG com título no canto superior esquerdo */}
      <div className="hidden lg:block">
        <div className="absolute -top-[-60%] -left-[-7%] w-72 h-72 md:w-[700px] md:h-[700px] rounded-full bg-[#84a0f244] flex items-center justify-center z-0">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#002654] text-center px-4">
            Seja contador(a)
            <br />
            da sua própria história<span className="text-cyan-400">.</span>
          </h2>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Texto do lado direito */}
        <div className="lg:col-start-2 space-y-6">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Somos o maior escritório de contabilidade do Brasil, líder em abertura de empresas e gestão de CNPJs, que oferece soluções completas, exclusivas e integradas, em um único lugar, para micro e pequenos empreendedores, além dos profissionais autônomos.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Com mais de 70 mil clientes, atuando em mais de 50 cidades do Brasil, a Simplizei existe para simplificar a vida de quem empreende e também para fortalecer o futuro de cada cliente, transformando o cenário do empreendedorismo no nosso país.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Por aqui, somos mais de 1.200 pessoas de vários lugares do Brasil, comprometidas com o nosso propósito de resolver um problema real brasileiro e trabalhando em busca de soluções inovadoras para facilitar a vida dos nossos clientes.
          </p>
        </div>
      </div>

      {/* Cards circulares em linha */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 relative z-10">
        {[
          { title: 'Temos experiência no mercado', value: '10', suffix: 'anos', image: '/assets/img/consultoria.jpg' },
          { title: 'Estamos presentes em mais de', value: '50', suffix: 'cidades', image: '/assets/img/engenharia.jpg' },
          { title: 'Nosso time conta com mais de', value: '1.200', suffix: 'especialistas', image: '/assets/img/comercio.jpg' },
          { title: 'Atendemos a mais de', value: '70 mil', suffix: 'clientes', image: '/assets/img/negocios.jpg' },
        ].map((item, index) => (
          <div key={index} className="m-8 min-h-[250px] min-w-[200px] bg-gradient-to-b from-gray-200 to-transparent text-l md:text-xl shadow-transparent hover:shadow-lg rounded-2xl overflow-hidden flex flex-col items-center text-start">
            <p className="p-4 mt-4 text-sm md:text-base font-semibold text-blue-800 h-[70px]">{item.title}</p>
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-[4px] border-blue-900 relative">
              <img src={item.image} alt="" className="w-full h-full object-cover brightness-50 " />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <span className="text-2xl font-bold md:text-3xl">{item.value}</span>
                <span className="text-xs md:text-sm">{item.suffix}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botões em linha abaixo dos cards */}
      <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
        <button className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-3 rounded-full font-medium transition-all w-full sm:w-auto" onClick={() => setShowForm(true)}>
          Trabalhe com a gente
        </button>
        <button className="border-2 border-[#002654] text-[#002654] hover:bg-[#002654] hover:text-white px-6 py-3 rounded-full font-medium transition-all w-full sm:w-auto" onClick={() => window.open('/consultoria', '_self')}>
          Saiba mais sobre nós
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
};

export default HeroSectionCircles;
