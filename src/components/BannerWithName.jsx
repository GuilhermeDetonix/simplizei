import React from 'react';
import { motion } from 'framer-motion';

export default function BannerWithName() {
    return (
        <section className="bg-[#01245c] text-white py-16 px-6 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            {/* Lado esquerdo: texto */}
            <motion.div
                className="md:w-1/2 text-center md:text-left"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                    <h1 className="text-white block mb-6">Simplizei</h1>
                    <span className="text-cyan-300">Converse com a nossa contadora!</span>
                </div>

                <h2 className="text-base sm:text-lg text-gray-100 leading-relaxed max-w-xl mx-auto md:mx-0">
                    Na nossa assessoria técnica contábil, você entende como abrir seu CNPJ,
                    cuidar da contabilidade da sua empresa e economizar nos impostos.
                </h2>
            </motion.div>

            {/* Lado direito: imagem da contadora */}
            <motion.div
                className="md:w-1/2 flex justify-center md:justify-end relative"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] aspect-square rounded-full border-8 border-cyan-500 overflow-hidden">
                    <img
                        src="/assets/img/contadora.png"
                        alt="Contadora Simplizei"
                        className="object-cover w-full h-full"
                    />

                    {/* Tag com nome e info */}
                </div>
                <div className="absolute bottom-0 right-12 lg:right-[7rem] opacity-80 bg-blue-700 text-white rounded-xl px-4 py-2 shadow-md text-sm">
                    <p className="font-semibold">Contadora Simplizei</p>
                </div>
            </motion.div>
        </section>
    );
}
