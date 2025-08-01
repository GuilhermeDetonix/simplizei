import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
const ComparacaoMEI = () => {
    return (
        <section className="w-full py-16 bg-white px-4 sm:px-8 lg:px-20">
            <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
                    Desenquadrar ou dar baixa no MEI?
                </h2>
                <p className="mt-2 text-gray-600 text-sm sm:text-base">
                    Entenda quais são as diferenças entre desenquadramento e baixa do MEI.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Desenquadramento */}
                <div className="relative bg-white rounded-2xl p-6 shadow-md overflow-hidden">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">
                        Desenquadramento do seu MEI:
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="w-full">
                            {/* Lista com itens */}
                            <ul className="space-y-4 text-gray-700">
                                {[
                                    "Ocorre por opção ou automaticamente em caso de ultrapassar o limite de faturamento",
                                    "Você mantém o mesmo CNPJ",
                                    "Não impede a emissão de novas notas fiscais",
                                    "Você pode manter os contratos, contas bancárias e plano de saúde vinculados ao seu CNPJ",
                                    "Caso você decida alterar alguma informação relativa ao seu CNPJ haverá um custo adicional"
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-start gap-3"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-20px" }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <div className="flex-shrink-0 mt-0.5">
                                            <Check className="text-green-500 w-5 h-5" />
                                        </div>
                                        <span className="text-sm leading-relaxed">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 h-[400px] w-[200px] sm:w-36 md:w-40 lg:w-[350px] rounded-full overflow-hidden shadow-lg">
                            <img
                                src="/assets/img/mulher4.jpeg"
                                alt="Imagem"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Baixa do MEI */}
                <div className="relative bg-white rounded-2xl p-6 shadow-md overflow-hidden">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">
                        Baixa do MEI:
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="w-full">
                            <ul className="space-y-4 text-gray-700">
                                {[
                                    "Ocorre por opção do empreendedor",
                                    "Você encerra sua inscrição no CNPJ MEI e inicia uma nova empresa",
                                    "Inicia um novo ciclo de emissão de notas",
                                    "É possível escolher uma nova razão social, atividade e incluir sócios na sua empresa",
                                    "Em razão do seu novo CNPJ, você amplia a possibilidade de realizar novos contratos"
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-start gap-3"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-20px" }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <div className="flex-shrink-0 mt-0.5">
                                            <Check className="text-green-500 w-5 h-5" />
                                        </div>
                                        <span className="text-sm leading-relaxed">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 h-[400px] w-[200px] sm:w-36 md:w-40 lg:w-[350px] rounded-full overflow-hidden shadow-lg">
                            <img
                                src="/assets/img/mulher5.jpg"
                                alt="Imagem"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Botão */}
            <div className="mt-10 text-center">
                <button className="bg-cyan-400 hover:bg-cyan-500 transition-all text-white font-semibold py-3 px-6 rounded-full shadow-md">
                    Fale com um especialista
                </button>
            </div>
        </section>
    );
};

export default ComparacaoMEI;
