import React from 'react';

const CardsStaticButtons = () => {
    return (
        <section className="w-full h-full bg-[#f8fbfe] py-28 rounded-t-3xl px-4 flex justify-center">
            <div className="max-w-6xl w-full text-center">
                {/* Título */}
                <h2 className="text-2xl md:text-3xl font-bold text-sky-900 mb-2">
                    Nossa missão é simplificar a sua jornada em busca de sucesso.
                </h2>
                <p className="text-gray-600 text-sm md:text-base mb-10">
                    No Simplizei.bank você e sua empresa contam com benefícios exclusivos:
                </p>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
                    {/* Card 1 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-transform hover:scale-105 duration-200">
                        <img
                            src="https://via.placeholder.com/400x200?text=Google+Workspace"
                            alt="Google Workspace"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4 text-left">
                            <h3 className="text-sky-900 font-semibold mb-1">20% de desconto</h3>
                            <p className="text-gray-600 text-sm">
                                Contrate o pacote de ferramentas do maior site de busca do mundo com desconto.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-transform hover:scale-105 duration-200">
                        <img
                            src="https://via.placeholder.com/400x200?text=Dell+Technologies"
                            alt="Dell Technologies"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4 text-left">
                            <h3 className="text-sky-900 font-semibold mb-1">Até R$ 2 mil em desconto</h3>
                            <p className="text-gray-600 text-sm">
                                Para adquirir computadores, servidores e acessórios da marca Dell.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-transform hover:scale-105 duration-200">
                        <img
                            src="https://via.placeholder.com/400x200?text=Conquer+Plus"
                            alt="Conquer Plus"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4 text-left">
                            <h3 className="text-sky-900 font-semibold mb-1">33% de desconto</h3>
                            <p className="text-gray-600 text-sm">
                                Faça cursos em uma das maiores plataformas de aprendizagem contínua.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Rodapé */}
                <p className="text-gray-400 text-xs mb-5">Benefícios sujeitos a alteração.</p>

                {/* Botão */}
                <button
                    className="bg-cyan-400 hover:bg-cyan-500 text-sky-900 font-bold py-3 px-6 rounded-md shadow transition-all duration-300 text-sm md:text-base"
                >
                    ABRA SUA CONTA PJ GRÁTIS
                </button>
            </div>
        </section>
    );
};

export default CardsStaticButtons;
