import '../styles/Solucoes.css';

const Solucoes = () => {
    const features = [
        {
            image: "/assets/icons/5230989.png",
            title: "10 anos de expertise contábil",
            description: "Entregamos uma contabilidade segura para você."
        },
        {
            image: "/assets/icons/8101423.png",
            title: "Agilidade na abertura do CNPJ",
            description: "Abrimos seu CNPJ em até 5 dias em São Paulo."
        },
        {
            image: "/assets/icons/6785419.png",
            title: "Contabilidade completa",
            description: "Soluções que vão facilitar o dia a dia da sua empresa."
        },
        {
            image: "/assets/icons/3227027.png",
            title: "Contadores certificados",
            description: "Todo o nosso time de contadores possui registro no CRC."
        },
        {
            image: "/assets/icons/17479485.png",
            title: "Otimização tributária",
            description: "Mantemos seu CNPJ regularizado e pagando o mínimo de impostos."
        },
        {
            image: "/assets/icons/1077909.png",
            title: "Diversos canais de atendimento",
            description: "Nosso atendimento é via WhatsApp, chat e e-mail."
        }
    ];

    return (
        <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="siteTitulo mb-4">
                    Por que a Simplizei é a melhor solução em contabilidade online?
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {features.map((feature, index) => (
                    <div key={index} className="bg-blue-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                        <img src={feature.image} alt={feature.title} className="w-12 h-12 mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">{feature.title}</h3>
                        <p className="text-gray-700">{feature.description}</p>
                    </div>
                ))}
            </div>

            <div className="border-t border-gray-200 pt-8 text-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg hover:shadow-blue-500/30" onClick={() => window.open(`/abrir-empresa`, '_self')} >
                    Abra sua empresa grátis
                </button>
            </div>
        </section>
    );
};

export default Solucoes;