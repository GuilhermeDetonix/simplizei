import React from "react";

// Exemplo de dados — substitua os paths pelas imagens reais
const areas = [
  { nome: "Advocacia", imagem: "/assets/img/advogado.jpg" },
  { nome: "Arquitetura", imagem: "/assets/img/arquitetura.jpg" },
  { nome: "Comércio", imagem: "/assets/img/comercio.jpg" },
  { nome: "Consultoria", imagem: "/assets/img/consultoria.jpg" },
  { nome: "Educação e Cursos", imagem: "/assets/img/escola.jpg" },
  { nome: "Engenharia", imagem: "/assets/img/engenharia.jpg" },
  { nome: "Gestão e Negócios", imagem: "/assets/img/negocios.jpg" },
  { nome: "Marketing e Publicidade", imagem: "/assets/img/marketing.jpg" },
];

const AreasAtuacao = () => {
  return (
    <section className="py-10 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
        Conheça as soluções exclusivas para cada área de atuação<span className="text-cyan-500">.</span>
      </h2>
      <p className="text-gray-600 mt-2 max-w-xl mx-auto">
        Selecione a área de atuação da empresa que você vai abrir e confira os planos e benefícios para seu perfil.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 max-w-6xl mx-auto">
        {areas.map((area, index) => (
          <button
            key={index}
            className="flex items-center justify-between rounded-lg border border-blue-200 transition duration-300 group hover:bg-blue-800 w-full"
          >
            <span className="text-sm sm:text-base font-medium text-blue-900 group-hover:text-white text-left px-4">
              {area.nome}
            </span>
            <img
              src={area.imagem}
              alt={area.nome}
              className="w-30 h-20 object-cover rounded-l-[30px] ml-4"
            />
          </button>
        ))}
      </div>

      <button className="mt-8 px-6 py-3 bg-cyan-400 hover:bg-cyan-500 text-white font-semibold rounded-full transition duration-300" onClick={() => window.open(`/servicos`, '_self')}>
        Confira mais áreas de atuação ↓
      </button>
    </section>
  );
};

export default AreasAtuacao;
