import React from 'react';
import { motion } from 'framer-motion';

const SecuritySection = () => {
    return (
        <section className="w-full bg-[#f8fbfe] py-28 px-6 md:px-12 md:py-28 flex justify-center">
            <div className="relative max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">

                {/* Texto */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 text-center lg:text-left"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-sky-900 mb-4 text-left">
                        O Simplizei.bank é confiável.
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 text-left">
                        A segurança financeira da sua empresa é a nossa prioridade. Por isso, adotamos as melhores práticas do mercado para assegurar suas finanças. Todos os valores depositados no Simplizei.bank são mantidos separados e garantidos em títulos públicos, através da nossa instituição de pagamento parceira, garantindo sua total tranquilidade.
                    </p>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 text-left">
                        Estamos sempre em busca das melhores soluções tecnológicas para aumentar a proteção na utilização dos nossos canais, produtos e serviços.
                    </p>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 text-left">
                        Nós nos preocupamos com a proteção dos seus dados e do seu dinheiro em todas as etapas, desde o cadastro até o seu relacionamento com a gente. Por isso, nós não entramos em contato para pedir senhas de acesso ou código de segurança por e-mail, SMS, WhatsApp, redes sociais ou telefone.
                    </p>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 text-left">
                        Essas informações são de uso pessoal e intransferível. Caso tenha alguma dúvida, confira nossas dicas de segurança e conte com o suporte do nosso time através dos nossos canais oficiais de comunicação.
                    </p>

                    {/* <button className="bg-cyan-400 hover:bg-cyan-500 text-sky-900 font-semibold px-6 py-3 rounded-md transition-all duration-300 text-sm md:text-base shadow-md">
            DICAS DE SEGURANÇA
          </button> */}
                </motion.div>

                {/* Imagem com círculo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative flex-1 flex justify-center items-center py-28"
                >
                    {/* Círculo */}
                    <div className="absolute w-72 h-72 md:w-80 md:h-80 bg-blue-800 rounded-full z-0" />

                    {/* Imagem */}
                    <img
                        src="/assets/img/mulher3.png"
                        alt="Contadora Simplizei"
                        className="absolute z-10 w-64 md:w-72 object-contain top-[100px] left-0 lg:top-[-210px] transiction-all duration-300 ease-in-out"
                        style={{
                            zIndex: 10,
                            position: 'sticky',
                            width: 280,
                            transform: 'translateY(-76px)',
                        }}
                    />

                    {/* Legenda */}
                    <div className="absolute bottom-[170px] md:bottom-[160px] bg-blue-700 text-white text-xs md:text-sm px-3 py-2 rounded-md shadow z-20">
                        <strong>Contadora Simplizei</strong><br />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SecuritySection;
