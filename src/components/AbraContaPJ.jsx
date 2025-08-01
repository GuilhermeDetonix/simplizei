import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Circle } from 'lucide-react';

const TimelineSection = () => {
    return (
        <section className="py-20 px-4 max-w-7xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-12 leading-tight">
                Abra sua conta bancária PJ no <span className="text-blue-700">Simplizei.bank</span><br />
                em apenas <span className="text-blue-500">3 passos</span><span className="text-blue-400">.</span>
            </h2>

            <div className="relative">
                {/* Linha animada */}
                <motion.div
                    initial={{ width: '20%' }}
                    animate={{ width: '70%' }}
                    transition={{ duration: 1 }}
                    className="absolute top-5 left-[15%] h-[2px] bg-blue-200 z-0 hidden md:block"
                />

                {/* Etapas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    <div className="flex flex-col items-center space-y-4">
                        <div className="bg-blue-900 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-md z-10 border-4 border-white">
                            1
                        </div>
                        <p className="text-gray-700 text-sm">
                            Se você é cliente da Simplizei,<br />
                            baixe o aplicativo do<br />
                            Simplizei.bank no seu celular.
                        </p>
                    </div>

                    <div className="flex flex-col items-center space-y-4">
                        <div className="bg-blue-900 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-md z-10  border-4 border-white">
                            2
                        </div>
                        <p className="text-gray-700 text-sm">
                            Com o seu CNPJ em mãos, tire<br />
                            uma foto do seu rosto e envie<br />
                            uma foto do seu documento pessoal.
                        </p>
                    </div>

                    <div className="flex flex-col items-center space-y-4">
                        <div className="w-10 h-10 rounded-full bg-cyan-400 text-white flex items-center justify-center shadow-md z-10 animate-ping-slow relative border-4 border-white">
                            <CheckCircle size={22} />
                            <div className="absolute inset-0 rounded-full bg-cyan-400 opacity-30 blur-md animate-pulse"></div>
                        </div>
                        <p className="text-gray-700 text-sm">
                            Pronto! Você já tem a gestão<br />
                            financeira da sua empresa na<br />
                            palma da sua mão.
                        </p>
                    </div>
                </div>
            </div>

            {/* Texto final e botões */}
            <div className="mt-10 text-gray-500 text-xs sm:text-sm">
                Sujeito à análise e aprovação de cadastro.
            </div>

            <div className="mt-6 font-semibold text-gray-800">
                Baixe agora o aplicativo no seu celular.
            </div>

            <div className="mt-4 flex items-center justify-center gap-4 flex-wrap">
                <img
                    src="/assets/img/app-store.webp"
                    alt="App Store"
                    className="h-10 object-contain"
                />
                <img
                    src="/assets/img/google-play-store.webp"
                    alt="Google Play"
                    className="h-10 object-contain"
                />
            </div>
        </section>
    );
};

export default TimelineSection;
