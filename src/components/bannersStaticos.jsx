const cards = [
  {
    title: "Abrir empresa",
    description:
      "Realizamos a abertura com o enquadramento correto para que o cliente pague somente o mínimo de impostos.",
    button: "Abra sua empresa grátis",
    onClick: () => { window.open(`/abrir-empresa`, '_self') },
    imagem: "/assets/img/mulher1.png"
  },
  {
    title: "Deixar de ser MEI",
    description:
      "Analisamos o perfil da empresa e apoiamos nossos clientes em todo o processo dessa importante decisão.",
    button: "Transforme MEI em ME",
    onClick: () => { window.open(`/deixar-de-ser-mei`, '_self') },
    imagem: "/assets/img/homem2.png"
  },
  {
    title: "Mude para Simplizei",
    description:
      "Cuidamos de todo o processo, inclusive solicitamos a documentação contábil da empresa ao antigo contador.",
    button: "Troque de contador",
    onClick: () => { window.open(`/trocar-de-contador`, '_self') },
    imagem: "/assets/img/mulher3.png"
  },
];

const StaticBanners = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-blue-900 mb-12 font-bold text-base sm:text-6xl md:text-3xl">
        Somos líderes em abertura de empresa e serviços contábeis.
      </h2>
      <div className="max-w-7xl mx-auto px-4 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="p-4 h-full flex flex-col items-stretch justify-between"
          >
            <div
              className="bg-gradient-to-b from-blue-50 to-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-full">
              <div className="px-6 pt-6 pb-3">
                <h3 className="sm:text-2xl text-blue-900 title md:text-lg mb-5">
                  {card.title}
                </h3>
                <p className="text-3xs text-gray-600">
                  {card.description}
                </p>
                <button 
                className="mt-5 bg-cyan-400 text-white font-semibold rounded-full px-6 py-2 hover:bg-cyan-500" 
                onClick={card.onClick ? card.onClick : undefined}>
                  {card.button}
                </button>
              </div>
              <div className="relative mt-auto">
                <div className="overflow-hidden w-full relative">
                  <img
                    src={card.imagem}
                    alt={card.title}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default StaticBanners;