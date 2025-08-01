import '../styles/ContadorOnlineBannerHead.css';

const BannerCurvo = ({ imagem = '', titulo = ``, descricao = ``, imageSobreposta = '' }) => {
    return (
        <section className="relative bg-gradient-to-l from-[#000] to-blue-900 rounded-bl-[100px] md:rounded-bl-[150px] lg:rounded-bl-[200px] overflow-hidden min-h-[500px] pb-20 lg:pb-0">
            {/* Container principal */}
            <div className="container mx-auto flex flex-col lg:flex-row items-center">
                {/* Conteúdo textual */}
                <div className="w-full lg:w-1/2 z-5 text-white px-4 md:px-6 lg:px-8 xl:px-10 order-2 lg:order-1 mt-8 lg:mt-0">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
                        {titulo || `O maior contador online do Brasil em número de abertura de empresas.`}
                    </h2>
                    
                    {/* Linha gradiente */}
                    <div className="w-full py-3">
                        <div className="h-[2px] bg-gradient-to-r from-cyan-400 to-blue-800 rounded-full" />
                    </div>
                    
                    <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                        {descricao || `Com mais de uma década de experiência, oferecemos soluções abrangentes que cobrem desde a abertura até a gestão completa da contabilidade da sua empresa.`}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30" onClick={() => window.open(`/cadastrar`, '_self')}>
                            Abra sua empresa grátis
                        </button>
                        <button className="border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full transition-all duration-300" onClick={() => window.open(`/planos-simplizei`, '_self')}>
                            Conheça nossos planos
                        </button>
                    </div>
                </div>
                
                {/* Imagem principal */}
                <div className="w-full lg:w-1/2 relative order-1 lg:order-2">
                    <img 
                        src={imagem || "/assets/img/mulher_homem.jpeg"} 
                        className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover object-center lg:rounded-l-[150px] lg:object-right"
                        alt="Clientes satisfeitos"
                        loading="lazy"
                    />
                </div>
            </div>
            
            {/* Imagem sobreposta (opcional) */}
            {imageSobreposta && (
                <img
                    src={imageSobreposta}
                    className="hidden xl:block absolute bottom-10 left-2/3  transform -translate-x-2/3 translate-y-1/4
                    w-[300px] md:w-[365px] lg:w-[400px]
                    h-auto object-contain opacity-95 hover:opacity-100 order-3 z-10
                    transition-all duration-500 ease-in-out"
                    alt="Destaque"
                    loading="lazy"
                    
                />
            )}
        </section>
    );
};

export default BannerCurvo;