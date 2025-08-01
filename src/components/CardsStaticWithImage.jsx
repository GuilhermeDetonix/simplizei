import React from 'react';
import { motion } from 'framer-motion';

var benefits = [
    {
        title: 'Orientação fiscal',
        image: '/assets/img/assessContabil2.png',
        description:
            'Ajudamos você a entender as obrigações fiscais de uma empresa, orientando sobre o cálculo de impostos, além de indicar possíveis benefícios fiscais aplicáveis.',
    },
    {
        title: 'Simulação tributária',
        image: '/assets/img/assessContabil3.png',
        description:
            'Entendemos o seu caso e simulamos o regime tributário antes da abertura da empresa, ajudando a escolher a opção mais vantajosa e adequada dentro da lei para a sua necessidade.',
    },
    {
        title: 'Apoio em decisões',
        image: '/assets/img/assessContabil.png',
        description:
            'Fornecemos informações contábeis e financeiras relevantes para que você consiga tomar decisões mais seguras e estratégicas para sua empresa, evitando riscos desnecessários.',
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6 },
    }),
};

export default function CardsStaticWithImage({ cards = [] }) {
    if (cards.length > 0) {
        benefits = cards
    }
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-16 bg-white text-center">
            <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Benefícios da nossa assessoria técnica contábil
                <span className="text-blue-600">.</span>
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {benefits.map((item, index) => (
                    <motion.div
                        key={item.title}
                        className="bg-blue-50 hover:bg-blue-100 transition-colors duration-300 p-0 rounded-xl shadow-md flex flex-col items-start text-left h-full"
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="rounded-lg mb-4 w-full object-cover aspect-video"
                        />
                        <div className='py-2 px-4'>
                            <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
