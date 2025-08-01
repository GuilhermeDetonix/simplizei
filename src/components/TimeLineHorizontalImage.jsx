
const NotaFiscalSteps = () => {
    var texts = {
        title: "Como começar a emitir suas notas fiscais.",
        subtitle: "Veja como é fácil emitir notas fiscais eletrônicas na Simplizei.",
        step1: "Crie sua conta na Simplizei.",
        step2: "Baixe o nosso aplicativo de emiss o de notas fiscais.",
        step3: "Crie uma nota fiscal eletr nica.",
        step4: "Envie a nota fiscal para o seu cliente.",
        step5: "Acompanhe a entrega da nota fiscal.",
        image: "/assets/img/mulheres.jpeg",
    };
    var itensCard = [
        {
            title: "Tenha um Certificado Digital",
            desc: "Funciona como uma assinatura virtual, que garante a segurança e autenticidade da nota fiscal emitida.",
        },
        {
            title: "Cadastro no governo",
            desc: "É necessário cadastrar-se na Secretaria Estadual ou Municipal da localidade onde sua empresa está cadastrada.",
        },
        {
            title: "Acessar o Emissor",
            desc: "Pronto. Agora você já pode acessar o emissor de NFS-e da Simplizei para começar a emitir suas notas fiscais.",
        },
    ]
    return (
        <section className="bg-[#f6f9fc] py-16 px-4 md:px-10">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
                {/* Texto + Etapas */}
                <div className="flex-1 max-w-xl">
                    <h2 className="siteTitulo mb-4 leading-snug">
                        Como começar a emitir suas notas fiscais
                    </h2>
                    <p className="text-gray-600 mb-8 text-sm sm:text-base">
                        Com sua empresa 100% regularizada, você começa a emissão em poucos passos.
                    </p>

                    <div className="relative pl-8">
                        {itensCard.map((item, i) => (
                            <div key={i} className="mb-6 flex items-start gap-3 relative">
                                {/* Número */}
                                <div className="w-7 h-7 rounded-full bg-blue-900 text-white text-sm font-bold flex items-center justify-center absolute -left-8 top-0 z-10">
                                    {i + 1}
                                </div>
                                {/* Linha entre os círculos */}
                                {i < 2 && (
                                    <div className="absolute left-[-18px] top-8 h-[52px] w-[2px] bg-blue-800"></div>
                                )}

                                {/* Conteúdo */}
                                <div>
                                    <h3 className="text-base font-semibold text-blue-900">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Botão */}
                    <div className="mt-8 text-center">
                        <button className="bg-cyan-400 hover:bg-cyan-500 text-white font-semibold px-6 py-3 text-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300"  onClick={() => window.open(`/planos-simplizei`, '_self')}>
                            Confira nossos planos
                        </button>
                    </div>
                </div>

                {/* Imagem animada */}
                <div className="flex-1 max-w-md relative group">
                    <div className="rounded-full overflow-hidden border-4 border-white shadow-xl transform transition-transform duration-500 group-hover:scale-105">
                        <div className="border-4 bg-gradient-to-r from-blue-400 to-blue-900 rounded-full overflow-hidden">
                            <img
                                src={texts.image}
                                alt="Contadora"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Legenda da imagem */}
                    <div className="absolute bottom-4 left-4 bg-blue-900 text-white px-4 py-2 rounded-xl shadow-md text-xs leading-tight">
                        <strong>Maria Lima</strong><br />
                        Contadora Simplizei
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotaFiscalSteps;
