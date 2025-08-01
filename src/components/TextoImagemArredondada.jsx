const TextoImagemArredondada = () => {
    return (
        <section className="px-4 py-12 md:py-20 text-[#00163D] bg-gray-100">
            <div className="max-w-4xl mx-auto">
                <h2 className="siteTitulo text-center mb-4">
                    Conheça o Plano Experts:
                </h2>
                <p className="text-center mb-10 max-w-3xl mx-auto siteSubtitulo">
                    Com o nosso plano Experts você conta com o apoio de um assessor e um analista dedicados para
                    simplificar a contabilidade da sua empresa.
                </p>

                <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
                    {/* Text content */}
                    <ul className="flex-1 space-y-4 text-base md:text-lg text-gray-800">
                        <li className="flex items-start gap-2 text-sm">
                            <svg className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 text-green-500 mt-0.5 mr-2 sm:mr-3"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Assessor e analista dedicados desde a abertura até a gestão contábil da sua empresa.
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                            <svg className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 text-green-500 mt-0.5 mr-2 sm:mr-3"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Consultoria tributária para que você pague o mínimo de impostos.
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                            <svg className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 text-green-500 mt-0.5 mr-2 sm:mr-3"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Emissão de notas fiscais feita pelo nosso time.
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                            <svg className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 text-green-500 mt-0.5 mr-2 sm:mr-3"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Canal exclusivo de atendimento via telefone e WhatsApp até as 22h.
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                            <svg className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 text-green-500 mt-0.5 mr-2 sm:mr-3"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Pacote de benefícios com academia e saúde por apenas R$ 30/mês a mais.
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                            <svg className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 text-green-500 mt-0.5 mr-2 sm:mr-3"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Planos de saúde com até 30% de desconto a partir de 1 vida.
                        </li>
                    </ul>

                    {/* Image content */}
                    <div className="flex-1 flex justify-center">
                        <div className="relative w-72 h-72 rounded-full border-[3px] border-blue-900 p-2">
                            <img
                                src="/assets/img/senhor.jpg"
                                alt="Assessor Experts"
                                className="rounded-full w-full h-full object-cover"
                            />
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-blue-700 text-white rounded-full text-sm px-3 py-1 text-center shadow-md">
                                Ricardo Pereira<br />
                                <span className="text-xs font-light">Assessor</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pricing */}
                <div className="text-center mt-12">
                    <h3 className="text-2xl md:text-2xl font-semibold mb-2 text-blue-900">
                        Quanto custa o plano Experts?
                    </h3>
                    <p className="mb-4 text-blue-900">
                        <span>R$</span><span className="text-4xl font-bold"> 359</span> <span className="text-base font-normal">/mês</span>
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
                        <button className="bg-cyan-400 text-[#00163D] font-semibold rounded-full px-6 py-3 hover:bg-cyan-300 transition" onClick={() => window.open(`https://api.whatsapp.com/send?phone=${import.meta.env.VITE_APP_WHATSAPP_NUMBER}&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Simplizei.`, '_blank')}>
                            Fale com um contador
                        </button>
                        <button className="border-2 border-[#00163D] text-[#00163D] font-semibold rounded-full px-6 py-3 hover:bg-gray-100 transition" onClick={() => window.open(`/cadastrar`, '_self')}>
                            Contrate agora
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TextoImagemArredondada;
