import '../styles/HeaderAboutUs.css';

const BannerAboutUs = () => {
    return (
        <section className="bg-[#002D74] text-white relative pb-[7rem]">
            {/* Conteúdo principal */}
            <div className="flex flex-col lg:flex-row">
                {/* Texto e botões - sempre visível */}
                <div className='w-full lg:w-1/2 p-6 md:p-8 lg:p-12 text-center lg:text-left flex flex-col justify-center'>
                    <div className="space-y-4 md:space-y-6"> {/* Container interno para espaçamento */}
                        <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
                            Somos o maior escritório de contabilidade do Brasil.
                        </h1>

                        <p className="text-sm sm:text-base">
                            Há mais de 10 anos, entregamos as melhores e mais completas soluções
                            para cuidar desde a abertura até a gestão da contabilidade da sua empresa.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2">
                            <span className="text-white">Avaliações feitas por clientes:</span>
                            <div className="flex items-center gap-1">
                                <img src="/assets/img/google_icon.svg" alt="Google" className="w-5 h-5" />
                                <div className="flex text-yellow-400 text-lg">
                                    ★★★★★
                                    <span className="ml-1 text-white text-base font-semibold">4.6</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
                            <button className="bg-cyan-300 hover:bg-cyan-400 text-[#002D74] font-semibold px-6 py-2 rounded-full transition-colors duration-300 transform hover:scale-105" onClick={() => window.open('/servicos', '_self')}>
                                Confira nossos serviços
                            </button>
                        </div>
                    </div>
                </div>

                {/* Imagem com nomes - oculta em mobile */}
                <div className="hidden lg:block lg:w-1/2 relative">
                    <img
                        src="/assets/img/mulher_homem.jpeg"
                        alt="Equipe contabilidade"
                        className="rounded-l-[500px] w-full max-h-[500px] object-cover object-top"
                    />
                    {/* Diana */}
                    <div className="absolute bottom-12 left-10 bg-blue-900 px-3 py-2 rounded text-sm">
                        <p className="font-bold">Diana</p>
                        <p className="text-xs">Contadora Simplizei</p>
                    </div>
                    {/* Vinicius */}
                    <div className="absolute bottom-12 right-10 bg-blue-900 px-3 py-2 rounded text-sm text-right">
                        <p className="font-bold">Vinicius</p>
                        <p className="text-xs">Contador Simplizei</p>
                    </div>
                </div>
            </div>

            {/* Benefícios na parte inferior */}
            <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 sm:relative sm:bottom-auto sm:left-auto sm:transform-none sm:translate-x-0 sm:w-full max-w-6xl px-4" style={{ bottom: '-100px' }}>
                <div className="bg-white text-[#002D74] rounded-xl shadow-lg p-4 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    <div className="flex flex-col items-center text-center p-3">
                        <img src="/assets/icons/3280979.png" alt="Clientes" className="w-12 h-12 mx-auto" />
                        <div className="mt-2 text-lg font-semibold">Mais de 70 mil clientes</div>
                        <p className="text-xs mt-1">Somos especialistas em diversos segmentos profissionais.</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-3">
                        <img src="/assets/icons/854878.png" alt="Cidades" className="w-12 h-12 mx-auto" />
                        <div className="mt-2 text-lg font-semibold">Mais de 50 cidades atendidas</div>
                        <p className="text-xs mt-1">Atendemos todo o Brasil com a nossa contabilidade completa.</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-3">
                        <img src="/assets/icons/3227027.png" alt="Contadores" className="w-12 h-12 mx-auto" />
                        <div className="mt-2 text-lg font-semibold">Contadores certificados</div>
                        <p className="text-xs mt-1">Temos o maior time de contadores registrados do país.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerAboutUs;