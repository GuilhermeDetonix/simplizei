import React from "react";
import { motion } from "framer-motion";

const SolucoesFinanceiras = () => {
    return (
        <section className="bg-[#002f87] text-white px-4 py-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12">
                    Conheça outras soluções que vão facilitar a rotina financeira da sua empresa.
                </h2>

                <div className="grid md:grid-cols-2 gap-12 relative overflow-hidden">
                    {/* CARD 1 - Notificações Automáticas */}
                    <motion.div
                        className="bg-[#003ba0] rounded-xl p-6 border border-white/20 flex flex-col justify-between"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative">
                            <h3 className="text-xl font-semibold mb-4">Notificações automáticas</h3>
                            <p className="text-sm text-white/90 mb-6">
                                Envie suas cobranças e deixe que a Simplizei notifique seus clientes por e-mail antes e depois do vencimento.
                            </p>

                            {/* Timeline */}
                            <ul className="relative ml-4 border-l-2 border-cyan-400 pl-1 space-y-6">
                                <li className="relative pl-3">
                                    <span className="absolute w-5 h-5 bg-cyan-400 rounded-full -left-[0.9rem] top-1.1 text-center" >1</span>
                                    Envio da cobrança
                                </li>
                                <li className="relative pl-3">
                                    <span className="absolute w-5 h-5 bg-cyan-400 rounded-full -left-[0.9rem] top-1.1 text-center" >2</span>
                                    Aviso de vencimento
                                </li>
                                <li className="relative pl-3">
                                    <span className="absolute w-5 h-5 bg-cyan-400 rounded-full -left-[0.9rem] top-1.4 text-center" >3</span>
                                    Aviso de atraso no pagamento
                                </li>
                            </ul>
                            <img
                                src="/assets/img/smarthphone.png" // Substitua pela sua imagem real
                                alt="Notificações"
                                className="absolute top-[30%] right-0 mt-6 mx-auto w-40 object-contain"
                            />
                        </div>

                    </motion.div>

                    {/* CARD 2 - Conta PJ Integrada */}
                    <motion.div
                        className="bg-[#003ba0] rounded-xl p-6 border border-white/20 flex flex-col justify-between"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative">
                            <h3 className="text-xl font-semibold mb-4">Conta PJ integrada à contabilidade</h3>
                            <p className="text-sm text-white/90 mb-6">
                                Com a conta PJ da Simplizei, você recebe os pagamentos dos seus clientes direto em uma conta integrada à sua contabilidade.
                                Além disso, você fica livre de tarifas ou mensalidades.
                            </p>
                            <button className="bg-cyan-400 hover:bg-cyan-300 text-blue-900 font-semibold px-5 py-2 rounded-full transition duration-300 text-sm" onClick={() => { window.open('/conta-pj', '_self') }}>
                                Saiba mais
                            </button>
                            <img
                                src="/assets/img/smarthphone2.png" // Substitua pela sua imagem real
                                alt="Conta PJ"
                                className="absolute top-[35%] right-0 mt-6 mx-auto w-40 object-contain"
                            />
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SolucoesFinanceiras;
