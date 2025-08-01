import React from 'react';
import { motion } from 'framer-motion';

const StaticCardsWithButtons = () => {
    return (
        <section className="w-full bg-white py-16 px-4 md:px-8">
            <div className="max-w-5xl mx-auto text-center">
                {/* Título */}
                <h2 className="siteTitulo mb-10">
                    Quando adquirir o seu certificado digital?
                </h2>

                {/* Cards superiores */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {/* Card 1 */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="bg-white border border-gray-100 shadow-md rounded-xl p-6 flex flex-col items-center text-center"
                    >
                        <h3 className="text-lg font-bold text-sky-900 mb-2">Na abertura de empresa</h3>
                        <p className="text-gray-600 text-sm mb-4">
                            Após contratar a Simplizei, vamos realizar os processos de abertura de empresa. Assim que o CNPJ for emitido, você deve adquirir o certificado digital A1.
                        </p>
                        <button className="bg-cyan-400 hover:bg-cyan-500 text-white text-sm font-medium px-5 py-2 rounded-full transition-all" onClick={() => { window.location.href = '/abrir-empresa' }}>
                            Abra sua empresa grátis
                        </button>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="bg-white border border-gray-100 shadow-md rounded-xl p-6 flex flex-col items-center text-center"
                    >
                        <h3 className="text-lg font-bold text-sky-900 mb-2">Na mudança de contador</h3>
                        <p className="text-gray-600 text-sm mb-4">
                            Após contratar a Simplizei, você deve adquirir o certificado digital A1 para configurarmos sua conta. Se você já possuir um certificado deste modelo, basta cadastrá-lo.
                        </p>
                        <button className="bg-cyan-400 hover:bg-cyan-500 text-white text-sm font-medium px-5 py-2 rounded-full transition-all" onClick={() => { window.location.href = '/troque-de-contador' }}>
                            Troque de contador
                        </button>
                    </motion.div>
                </div>

                {/* Rodapé */}
                <div className="bg-white text-center">
                    <h3 className="text-md md:text-xl font-bold text-sky-900 mb-2">Não tem o certificado?</h3>
                    <p className="text-gray-600 text-sm mb-4">
                        Nós geramos um cupom para você adquirir o seu com desconto.
                    </p>
                    <button className="bg-cyan-400 hover:bg-cyan-500 text-white text-sm font-medium px-6 py-2 rounded-full transition-all" onClick={() => window.open(`https://api.whatsapp.com/send?phone=${import.meta.env.VITE_APP_WHATSAPP_NUMBER}&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Simplizei.`, '_blank')}>
                        Fale com um especialista
                    </button>
                </div>
            </div>
        </section>
    );
};

export default StaticCardsWithButtons;
