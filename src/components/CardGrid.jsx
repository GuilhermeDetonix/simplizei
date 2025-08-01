import cardsData from '../data_loads/abrirCNPJ.json'; // Ajuste o caminho conforme necessário

const CardGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
      {cardsData.cards.map((card) => (
        <div key={card.id} className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col">
          <img
            src={card.image}
            alt={card.alt}
            className="w-full h-48 object-cover"
          />
          <div className="p-5 flex flex-col flex-grow">
            <h3 className="text-blue-900 font-semibold text-lg mb-2 leading-snug">
              {card.title}
            </h3>
            <p className="text-gray-700 text-sm flex-grow">
              {card.description}
            </p>
            {/* <a
              href={card.link}
              className="mt-4 text-sm text-blue-700 font-medium flex items-center gap-1 hover:underline"
            >
              Leia mais
              <span className="text-blue-700 text-xl leading-none">→</span>
            </a> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;