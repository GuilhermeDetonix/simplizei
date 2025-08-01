import '../styles/OnlineAccounting.css';

const OnlineAccounting = () => {
    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Cabeçalho */}
                <div className="text-center mb-12">
                    <h1 className="siteTitulo mb-4">
                        Como funciona a contabilidade online da Simplizei.
                    </h1>
                    <p className="siteSubTitulo max-w-2xl mx-auto">
                        Com os nossos serviços, você economiza tempo e dinheiro enquanto cuidamos de todo o resto
                    </p>
                </div>

                {/* Listas de benefícios */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* O que nós faremos */}
                    <div className="bg-gradient-to-b from-white to-blue-100 p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-blue-800 mb-4">O que nós faremos:</h2>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <svg className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 text-green-500 mt-0.5 mr-2 sm:mr-3"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Abrimos sua empresa sem cobrar pelos honorários contábeis de abertura</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 text-green-500 mt-0.5 mr-2 sm:mr-3"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Orientamos você na escolha do CNAE, tipo de empresa, taxas do governo e certificado digital</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 text-green-500 mt-0.5 mr-2 sm:mr-3"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Calculamos as guias de impostos, folha de pagamento, seu pró-labore e dos seus sócios</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 text-green-500 mt-0.5 mr-2 sm:mr-3"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Fazemos e assinamos relatórios contábeis como balanço e DRE</span>
                            </li>
                        </ul>
                    </div>

                    {/* O que você fará */}
                    <div className="bg-gradient-to-b from-white to-green-100 p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-green-800 mb-4">O que você fará:</h2>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <svg className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 text-green-500 mt-0.5 mr-2 sm:mr-3"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Emitirá notas e pagará impostos através da nossa plataforma digital</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Rodapé com botões */}
                <div className="border-t border-gray-200 pt-8 text-center">
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg" onClick={() => window.open(`/abrir-empresa`, '_self')}>
                            Abra sua empresa grátis
                        </button>
                        <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-full transition-colors duration-300" onClick={() => window.open(`/como-funciona-a-simplizei`, '_self')}>
                            Saiba mais como funciona
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OnlineAccounting;