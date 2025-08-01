
const CardsWithIcons = ({ title = '', subTitle = '', lista = [], buttons = [] }) => {
    let listCards = [
        {
            title: "Integrado a sua contabilidade",
            desc: "Tudo em um só lugar, para não ter que se preocupar com cálculo de impostos.",
            icon: "/assets/icons/17479485.png",
        },
        {
            title: "Uso ilimitado",
            desc: "Cliente Simplizei emite, gratuitamente, quantas notas precisar por mês.",
            icon: "/assets/icons/3374620.png",
        },
        {
            title: "Impostos corretos",
            desc: "O cálculo é sempre preciso e você paga apenas os impostos necessários.",
            icon: "/assets/icons/10306725.png",
        },
        {
            title: "Emissão em segundos",
            desc: "Utilize o recurso autopreenchimento para notas emitidas todos os meses.",
            icon: "/assets/icons/2972543.png",
        },
        {
            title: "Fácil de usar",
            desc: "O preenchimento é simples, sem termos técnicos e com um passo a passo prático.",
            icon: "/assets/icons/6785419.png",
        },
        {
            title: "Suporte especializado",
            desc: "Caso precise, conte com atendimento ao cliente em horário estendido.",
            icon: "/assets/icons/10809834.png",
        },
    ]

    if (lista[0] && lista[0].title.length > 0) {
        listCards = lista
    }

    return (
        <section className="py-16 px-4 md:px-10 bg-white text-center">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                    {title || (
                        <>
                            Vantagens de emitir nota fiscal <br className="hidden sm:block" />
                            de serviço com a <span className="text-blue-700">Simplizei</span>.
                        </>
                    )}
                </h2>
                <p className="text-gray-500 text-sm md:text-base mb-12">
                    {subTitle === '_' ? '' : subTitle.length > 0 ? subTitle : 'Emita suas notas fiscais eletrônica de prestação de serviços com mais rapidez e segurança.'}
                </p>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {listCards.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white p-6 rounded-xl border hover:shadow-xl transition-shadow duration-300 flex flex-col items-start text-left"
                        >
                            <img
                                src={item.icon}
                                alt=""
                                className="w-10 h-10 mb-4"
                            />
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12">
                    {
                        buttons[0] === 'nada' ? null :
                            Object.values(buttons).length > 0 && buttons.map((item, i) => (
                                <button key={i} onClick={item.onClick} className={`${item.classes || 'bg-cyan-400 hover:bg-cyan-500 text-white'} text-sm font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg mr-4`}>
                                    {item.text}
                                </button>
                            )) || (
                                <button onClick={() => window.open(`/planos-simplizei`, '_self')} className="bg-cyan-400 hover:bg-cyan-500 text-white text-sm font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
                                    Confira nossos planos
                                </button>
                            )
                    }
                </div>
            </div>
        </section>
    );
};

export default CardsWithIcons;
