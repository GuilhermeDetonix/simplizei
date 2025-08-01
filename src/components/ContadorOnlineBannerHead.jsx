import { motion } from 'framer-motion';

const BannerContadorOnlineHead = ({ imagem = '', titulo = '', descricao = '', buttons = [] }) => {
    var buttonsDOM = {
        btns: (
            <>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                    onClick={() => window.open(`/abrir-empresa`, '_self')}
                >
                    Abra sua empresa grátis
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-800 font-semibold px-6 py-3 rounded-full transition-all duration-300"
                    onClick={() => window.open(`/planos-simplizei`, '_self')}
                >
                    Conheça nossos planos
                </motion.button>
            </>
        )
    }
    if (buttons.length > 0) {
        let newButtons = buttons.map(e => {
            return (
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`border-2 border-white ${e.classes ? e.classes : 'text-white hover:bg-white hover:text-blue-800'} font-semibold px-6 py-3 rounded-full transition-all duration-300`}
                    onClick={() => window.open(e.link, '_self')}
                >
                    {e.text}
                </motion.button>
            )
        })
        buttonsDOM = { btns: newButtons }
    }

    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-l from-gray-900 to-blue-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-0 flex flex-col lg:flex-row items-center">
                {/* Conteúdo Textual */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-1/2 text-center lg:text-left z-10 px-4 sm:px-6 lg:px-8 py-4 lg:py-4"
                >
                    <h2 className="siteTitulo text-white leading-tight mb-4">
                        {titulo || 'O maior contador online do Brasil em número de abertura de empresas.'}
                    </h2>

                    {/* Linha gradiente com Tailwind puro */}
                    <div className="w-full py-3">
                        <div className="h-[2px] bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full" />
                    </div>

                    <p className="text-base text-blue-100 mb-8 leading-relaxed">
                        {descricao || 'Com mais de uma década de experiência, oferecemos soluções abrangentes que cobrem desde a abertura até a gestão completa da contabilidade da sua empresa.'}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        {buttonsDOM.btns}
                    </div>
                </motion.div>

                {/* Imagem */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full lg:w-1/2 relative mt-8 lg:mt-0"
                >
                    <img
                        src={imagem || "/assets/img/mulher_homem.jpeg"}
                        alt="Profissionais de contabilidade"
                        className="w-full h-auto max-h-[400px] object-cover object-center lg:object-right lg:rounded-l-[100px] xl:rounded-l-[150px] shadow-xl transform lg:translate-x-[35px]"
                        loading="lazy"
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'top',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default BannerContadorOnlineHead;