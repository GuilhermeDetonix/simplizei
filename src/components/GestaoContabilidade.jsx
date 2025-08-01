import React from 'react';

const GestaoContabilidade = () => {
  const recursos = [
    {
      titulo: 'Plataforma 24h disponível',
      descricao: 'Você pode acompanhar e gerenciar em tempo real, de maneira simples e prática, a gestão contábil da sua empresa em nossa plataforma.',
      imagem: '',
    },
    {
      titulo: 'Simulador de impostos',
      descricao: 'No simulador, disponível em nossa plataforma online, você calcula o quanto você pagará de imposto de acordo com o seu faturamento.',
      imagem: '',
    },
    {
      titulo: 'Emissor de notas fiscais',
      descricao: 'Com o nosso emissor de notas fiscais você emite todas as suas notas de maneira simples e rápida, e em um clique replica as recorrentes.',
      imagem: '',
    },
    {
      titulo: 'Cobrança online de clientes',
      descricao: 'Parcele seus produtos e serviços em até 12x para seus clientes e receba online, em até 2 dias úteis, sem precisar utilizar maquininha ou ter um site.',
      imagem: '',
    },
  ];

  return (
    <section className="bg-[#f7f9fc] py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-[#002b6b]">
          Acompanhe a gestão da sua contabilidade em nossa plataforma<span className="text-cyan-500">.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recursos.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between transition-transform hover:scale-[1.02]"
          >
            <div>
              <h3 className="text-[#002b6b] text-lg font-bold mb-2">{item.titulo}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{item.descricao}</p>
            </div>
            {item.imagem && item.imagem.length > 0 && <img src={item.imagem} alt={`Imagem de ${item.titulo}`} className="mt-6 w-full rounded-xl object-cover" />}
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button className="bg-cyan-400 hover:bg-cyan-500 transition-colors text-white font-semibold py-3 px-6 rounded-full shadow-md text-sm md:text-base">
          Saiba mais como funciona
        </button>
      </div>
    </section>
  );
};

export default GestaoContabilidade;
