const BeneficiosME = () => {
    const benefits = [
        {
            title: "Evite ultrapassar o faturamento limite",
            description:
                "O MEI tem um teto de faturamento anual de 81 mil. Se você prevê que vai ultrapassar esse limite em mais de 20% é possível se antecipar.",
            name: "Leandro Fabris",
            role: "Nutricionista e cliente Simplizei desde 2023",
            imageUrl: "/assets/img/1.jpeg",
        },
        {
            title: "Mantenha seu CNPJ regularizado",
            description:
                "Evite multas ou desenquadramento do seu MEI por não cumprir alguma das determinações legais desse regime.",
            name: "Jacqueline Luchesi",
            role: "Comunicadora e cliente Simplizei desde 2022",
            imageUrl: "/assets/img/4.jpeg",
        },
        {
            title: "Diversifique seu negócio",
            description:
                "O MEI não é permitido para algumas atividades. Transformar seu MEI em ME é a solução ideal para você se manter regularizado.",
            name: "Rafael Pinheiro",
            role: "Diretor Comercial e cliente Simplizei desde 2023",
            imageUrl: "/assets/img/2.jpeg",
        },
        {
            title: "Tenha mais funcionários",
            description:
                "Com o MEI não é possível ter mais de um funcionário. Expandindo sua empresa, você pode ter mais colaboradores.",
            name: "Nara Macuje",
            role: "Diretora de Comunicação e cliente Simplizei desde 2022",
            imageUrl: "/assets/img/5.jpeg",
        },
    ];

    return (
        <section className="w-full px-4 py-16 bg-white">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl siteTitulo mb-12">
                    Vantagens de transformar seu <span className="text-blue-600">MEI</span> em <span className="text-blue-800">ME</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="relative bg-white rounded-xl shadow-lg p-6 pb-20 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 ease-in-out  overflow-hidden">
                            <div>
                                <h3 className="text-lg font-bold text-blue-900 mb-2 h-16">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm text-gray-600">{benefit.description}</p>
                            </div>
                            <div className="relative h-[120px] sm:h-[150px] md:h-[180px]">
                                <img
                                    src={benefit.imageUrl}
                                    alt={benefit.name}
                                    className="w-[180px] h-[180px] sm:w-[320px] sm:h-[320px] md:w-[300px] md:h-[300px] lg:w-[220px] lg:h-[220px] xl:w-[240px] xl:h-[240px] rounded-full absolute right-[-20%] sm:right-[-15%] md:right-[-30%] bottom-[-70%] sm:bottom-[-60%] md:bottom-[-50%] object-cover border-4 border-white shadow-lg transform transition-all duration-300 hover:scale-105"
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-10">
                    <button className="bg-cyan-400 hover:bg-cyan-500 text-white font-semibold px-6 py-3 rounded-full transition-all">
                        Fale com um especialista
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BeneficiosME;
