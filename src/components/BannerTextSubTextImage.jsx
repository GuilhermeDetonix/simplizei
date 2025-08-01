import { motion } from 'framer-motion';

const BannerTextSubTextImage = ({ imagem = '', titulo = '', descricao = '' }) => {
const textos = {
    titulo: titulo || 'O maior contador online do Brasil em número de abertura de empresas.',
    descricao: descricao || 'Com mais de uma década de experiência, oferecemos soluções abrangentes que cobrem desde a abertura até a gestão completa da contabilidade da sua empresa.',
    botaoPrimario: 'Abra sua empresa grátis',
    botaoSecundario: 'Conheça nossos planos',
    image: imagem || '/assets/img/mulher_home.png',
};

    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-l from-gray-900 to-blue-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-0 flex flex-col lg:flex-row items-center">
                {/* Conteúdo Textual */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-1/2 text-center lg:text-left z-10 px-4 sm:px-6 lg:px-8 py-8 lg:py-12"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                        {textos.titulo}
                    </h2>

                    {/* Linha gradiente com Tailwind puro */}
                    <div className="w-full py-3">
                        <div className="h-[2px] bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full" />
                    </div>

                    <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
                        {textos.descricao}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                            onClick={() => window.open(`/cadastrar`, '_self')}
                        >
                            {textos.botaoPrimario}
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.open(`/planos-simplizei`, '_self')}
                            className="border-2 border-white text-white hover:bg-white hover:text-blue-800 font-semibold px-6 py-3 rounded-full transition-all duration-300"
                        >
                            {textos.botaoSecundario}
                        </motion.button>
                    </div>
                </motion.div>

                {/* Imagem */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full lg:w-[40%] lg:h-[450px] relative mt-8 lg:mt-0"
                >
                    <img
                        src={textos.image}
                        alt="Profissionais de contabilidade"
                        className="w-full h-auto max-h-[500px] object-cover object-center lg:object-right lg:rounded-l-[100px] xl:rounded-l-[150px] shadow-xl transform lg:translate-x-[35%]"
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

export default BannerTextSubTextImage;