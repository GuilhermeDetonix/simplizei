import React, { useState } from 'react';
import { tooltip, Tooltip } from "@material-tailwind/react";
import { FiInfo } from 'react-icons/fi';

const PlansSection = () => {
    const [activePlanTab, setActivePlanTab] = useState('servico');

    const servicoPlans = [
        {
            name: "PADRÃO",
            badgeColor: "bg-blue-600",
            description: "Certificado digital incluso no plano.",
            oldPrice: "178",
            price: "127",
            note: "Você emite suas notas e paga seus impostos em nossa plataforma online.",
            badge: null,
            features: {
                contabilidade: [
                    {
                        name: "Contabilidade completa", included: true, tooltip: (
                            <>
                                Todas as obrigações contábeis e legais com Receita Federal, Estadual e Prefeitura:<br />
                                • Cálculo e emissão de guia de impostos<br />
                                • Envio de IRPJ, DIPJ, DEFIS<br />
                                • Relatórios contábeis (DRE, Balanço Patrimonial, Balancete etc)<br />
                                • Obrigações acessórias (DCTF, SPED etc)<br />
                                • Documentos assinados por contador especializado
                            </>
                        )
                    },
                    {
                        name: "Processo de abertura grátis", included: true, tooltip: (
                            <>
                                Você paga apenas as taxas do governo <br /> 
                                e realiza os protocolos físicos.<br />
                                Indicamos o melhor regime tributário e <br />
                                atividades e você recebe a documentação<br />
                                de abertura via Correios. A abertura sem sair <br />
                                de casa está disponível para a cidade de São Paulo.
                            </>
                        )
                    },
                    {
                        name: "Certificado digital gratuito", included: true, tooltip: (
                            <>
                                O certificado digital é necessário para a<br />
                                emissão de nota fiscal eletrônica e para <br />
                                acessar os serviços da Receita Federal.
                            </>
                        )
                    }
                ],
                beneficios: [
                    {
                        name: "Pacote de benefícios", included: false, tooltip: (
                            <>
                                A elegibilidade ao benefício de academia se dará<br />
                                mediante a contratação de um plano com a TotalPass.<br />
                                NO pacote saúde inclui, mensalmente, 4 consultas<br />
                                online com psicólogo e 1 consulta online com nutricionista.
                            </>
                        )
                    }
                ],
                atendimento: [
                    { name: "Atendimento via chat/e-mail", included: true, tooltip: "" },
                    { name: "Atendimento via WhatsApp", included: true, tooltip: "" },
                    { name: "Atendimento via telefone", included: true, tooltip: "" },
                    { name: "Assessor dedicado", included: false },
                    {
                        name: "Reunião online", included: "Grupo", tooltip: (
                            <>
                                Reunião exclusiva para clientes que<br />
                                abrem empresa de serviço com a Simplizei.
                            </>
                        )
                    }
                ],
                notas_fiscais: [
                    { name: "Emita quantas NF-e 55 você quiser pelo emissor da plataforma", included: "Ilimitado", tooltip: "" },
                    { name: "Emissão de notas fiscais pela equipe Simplizei", included: "Habilitado", tooltip: "" }
                ],
                financeiro: [
                    {
                        name: "Conta PJ gratuita", included: true, tooltip: (
                            <>
                                Sua conta PJ é integrada com todos seus processos<br />
                                contábeis e financeiros, sem custos adicionais e sem tarifas.
                            </>
                        )
                    },
                    { name: "Débito automático", included: true, tooltip: "" },
                    { name: "Conciliação de extrato", included: true, tooltip: "" }
                ],
                folha: [
                    { name: "Pró-labore", included: "Até 2 sócios grátis" },
                    { name: "Folha de pagamento", included: "Cobrado à parte" },
                    {
                        name: "Faturamento mensal", included: "ideal até R$ 50.000*", tooltip: (
                            <>
                                O valor do faturamento mensal influencia <br />
                                no valor da mensalidade.<br />
                                Consulte nossos especialistas <br />
                                através do nosso chat para faturamentos superiores.
                            </>
                        )
                    }
                ]
            }
        },
        {
            name: "MULTIBENEFÍCIOS",
            badgeColor: "bg-blue-600",
            description: "Benefícios para sua saúde e bem-estar.",
            oldPrice: "272",
            price: "217",
            note: "Pacote de benefícios exclusivos no plano.",
            badge: "MELHOR CUSTO-BENEFÍCIO",
            features: {
                contabilidade: [
                    {
                        name: "Contabilidade completa", included: true, tooltip: (
                            <>
                                Todas as obrigações contábeis e legais com Receita Federal, Estadual e Prefeitura:<br />
                                Cálculo e emissão de guia de impostos<br />
                                Envio de IRPJ, DIPJ, DEFIS<br />
                                Relatórios contábeis (DRE, Balanço Patrimonial, Balancete etc)<br />
                                Obrigações acessórias (DCTF, SPED etc)<br />
                                Documentos assinados por contador especializado
                            </>
                        )
                    },
                    {
                        name: "Processo de abertura grátis", included: true, tooltip: (
                            <>
                                Você paga apenas as taxas do governo e realiza os protocolos físicos.<br />
                                Indicamos o melhor regime tributário e atividades e você recebe a documentação<br />
                                de abertura via Correios. A abertura sem sair de casa está disponível para a cidade de São Paulo.
                            </>
                        )
                    },
                    {
                        name: "Certificado digital gratuito", included: true, tooltip: (
                            <>
                                O certificado digital é necessário para a<br />
                                emissão de nota fiscal eletrônica e para <br />
                                acessar os serviços da Receita Federal.
                            </>
                        )
                    }
                ],
                beneficios: [
                    {
                        name: "Pacote de benefícios", included: true, tooltip: (
                            <>
                                A elegibilidade ao benefício de academia se dará<br />
                                mediante a contratação de um plano com a TotalPass.<br />
                                NO pacote saúde inclui, mensalmente, 4 consultas<br />
                                online com psicólogo e 1 consulta online com nutricionista.
                            </>
                        )
                    }
                ],
                atendimento: [
                    { name: "Atendimento via chat/e-mail", included: true, tooltip: "Das 9h às 17h30" },
                    { name: "Atendimento via WhatsApp", included: true, tooltip: "Das 9h às 22h" },
                    { name: "Atendimento via telefone", included: true, tooltip: "Das 9h às 18h" },
                    { name: "Assessor dedicado", included: false, tooltip: "Profissional exclusivo para sua empresa" },
                    {
                        name: "Reunião online", included: "Grupo", tooltip: (
                            <>
                                Reunião exclusiva para clientes que<br />
                                abrem empresa de serviço com a Simplizei.
                            </>
                        )
                    }
                ],
                notas_fiscais: [
                    { name: "Emissão de NF-e", included: "Ilimitado", tooltip: "Emita quantas NF-e você quiser pelo emissor da plataforma" },
                    { name: "Emissão pela equipe", included: "Habilitado", tooltip: "Emissão de notas fiscais pela equipe Simplizei" }
                ],
                financeiro: [
                    {
                        name: "Conta PJ gratuita", included: true, tooltip: (
                            <>
                                Sua conta PJ é integrada com todos seus processos<br />
                                contábeis e financeiros, sem custos adicionais e sem tarifas.
                            </>
                        )
                    },
                    { name: "Débito automático", included: true, tooltip: "Débito automático de impostos e mensalidade" },
                    { name: "Conciliação de extrato", included: true, tooltip: "Importação e conciliação de extrato" }
                ],
                folha: [
                    { name: "Pró-labore", included: "Até 2 sócios grátis", tooltip: "" },
                    { name: "Folha de pagamento", included: "Cobrado à parte", tooltip: "" },
                    {
                        name: "Faturamento mensal", included: "ideal até R$ 50.000*", tooltip: (
                            <>
                                O valor do faturamento mensal influencia no valor da mensalidade.<br />
                                Consulte nossos especialistas através do nosso chat para faturamentos superiores.
                            </>
                        )
                    }
                ]
            }
        },
        {
            name: "EXPERTS ESSENCIAL",
            badgeColor: "bg-green-600",
            description: "Assessor e analista dedicados.",
            oldPrice: "449",
            price: "359",
            note: "Ideal para quem precisa de apoio nas rotinas de contabilidade.",
            badge: "ATENDIMENTO DEDICADO",
            features: {
                contabilidade: [
                    {
                        name: "Contabilidade completa", included: true, tooltip: (
                            <>
                                Todas as obrigações contábeis e legais com Receita Federal, Estadual e Prefeitura:<br />
                                Cálculo e emissão de guia de impostos<br />
                                Envio de IRPJ, DIPJ, DEFIS<br />
                                Relatórios contábeis (DRE, Balanço Patrimonial, Balancete etc)<br />
                                Obrigações acessórias (DCTF, SPED etc)<br />
                                Documentos assinados por contador especializado
                            </>
                        )
                    },
                    {
                        name: "Processo de abertura grátis", included: true, tooltip: (
                            <>
                                Você paga apenas as taxas do governo e realiza os protocolos físicos.<br />
                                Indicamos o melhor regime tributário e atividades e você recebe a documentação<br />
                                de abertura via Correios. A abertura sem sair de casa está disponível para a cidade de São Paulo.
                            </>
                        )
                    },
                    {
                        name: "Certificado digital gratuito", included: true, tooltip: (
                            <>
                                O certificado digital é necessário para a<br />
                                emissão de nota fiscal eletrônica e para <br />
                                acessar os serviços da Receita Federal.
                            </>
                        )
                    }
                ],
                beneficios: [
                    {
                        name: "Pacote de benefícios", included: "✔️ (R$30/mês)", tooltip: (
                            <>
                                A elegibilidade ao benefício de academia se dará<br />
                                mediante a contratação de um plano com a TotalPass.<br />
                                NO pacote saúde inclui, mensalmente, 4 consultas<br />
                                online com psicólogo e 1 consulta online com nutricionista.
                            </>
                        )
                    }
                ],
                atendimento: [
                    { name: "Atendimento via chat/e-mail", included: true, tooltip: "Das 9h às 17h30" },
                    { name: "Atendimento via WhatsApp", included: true, tooltip: "Das 9h às 22h" },
                    { name: "Atendimento via telefone", included: true, tooltip: "Das 9h às 18h" },
                    { name: "Assessor dedicado", included: true, tooltip: "Profissional exclusivo para sua empresa" },
                    {
                        name: "Reunião online", included: "Individual", tooltip: (
                            <>
                                Reunião exclusiva para clientes que<br />
                                abrem empresa de serviço com a Simplizei.
                            </>
                        )
                    }
                ],
                notas_fiscais: [
                    { name: "Emissão de NF-e", included: "Ilimitado", tooltip: "" },
                    { name: "Emissão pela equipe", included: "Habilitado", tooltip: "" }
                ],
                financeiro: [
                    {
                        name: "Conta PJ gratuita", included: true, tooltip: (
                            <>
                                Sua conta PJ é integrada com todos seus processos<br />
                                contábeis e financeiros, sem custos adicionais e sem tarifas.
                            </>
                        )
                    },
                    { name: "Débito automático", included: true, tooltip: "Débito automático de impostos e mensalidade" },
                    { name: "Conciliação de extrato", included: true, tooltip: "Importação e conciliação de extrato" }
                ],
                folha: [
                    { name: "Pró-labore", included: "Até 2 sócios grátis" },
                    { name: "Folha de pagamento", included: "Cobrado à parte" },
                    {
                        name: "Faturamento mensal", included: "ideal até R$ 200.000*", tooltip: (
                            <>
                                O valor do faturamento mensal influencia no valor da mensalidade.<br />
                                Consulte nossos especialistas através do nosso chat para faturamentos superiores.
                            </>
                        )
                    }
                ]
            }
        }
    ];

    const comercioPlans = [
        {
            name: "COMÉRCIO BÁSICO",
            badgeColor: "bg-orange-500",
            description: "Para quem está começando e busca uma solução eficiente.",
            oldPrice: "350",
            price: "245",
            note: "Certificado digital e folha de pagamento inclusos",
            badge: "PLANO INDICADO",
            features: {
                contabilidade: [
                    {
                        name: "Contabilidade completa",
                        included: true,
                        tooltip: "Especializada em comércio varejista"
                    },
                    {
                        name: "Processo de abertura grátis",
                        included: true,
                        tooltip: "Com orientação tributária"
                    },
                    {
                        name: "Certificado digital",
                        included: true,
                        tooltip: "Para emissão de NF-e e NFC-e"
                    }
                ],
                atendimento: [
                    {
                        name: "Atendimento via WhatsApp",
                        included: true,
                        tooltip: "Das 9h às 22h"
                    },
                    {
                        name: "Atendimento via telefone",
                        included: true,
                        tooltip: "Das 9h às 18h"
                    }
                ],
                notas_fiscais: [
                    {
                        name: "Emissão de NF-e",
                        included: "Ilimitado",
                        tooltip: "Para todo seu comércio"
                    }
                ],
                financeiro: [
                    {
                        name: "Conta PJ gratuita",
                        included: true,
                        tooltip: "Integrada com sua contabilidade"
                    }
                ],
                folha: [
                    {
                        name: "Pró-labore dos sócios",
                        included: "Até 2 sócios grátis",
                        tooltip: "Cálculo automático"
                    },
                    {
                        name: "Folha de pagamento",
                        included: true,
                        tooltip: "Para até 3 funcionários"
                    },
                    {
                        name: "Faturamento mensal",
                        included: "Ideal até R$ 100.000*",
                        tooltip: "Consulte para faturamentos maiores"
                    }
                ],
                tributacao: [
                    {
                        name: "Regime tributário",
                        included: "Simples Nacional",
                        tooltip: "Melhor opção para pequenos comércios"
                    }
                ]
            }
        },
        {
            name: "COMÉRCIO PREMIUM",
            badgeColor: "bg-purple-600",
            description: "Ideal para quem prioriza segurança e praticidade em sua gestão financeira.",
            oldPrice: "600",
            price: "479",
            note: "Solução completa para comércios com maior faturamento",
            badge: null,
            features: {
                contabilidade: [
                    { name: "Contabilidade completa", included: true },
                    { name: "Processo de abertura grátis", included: true },
                    { name: "Certificado digital", included: true }
                ],
                atendimento: [
                    { name: "Atendimento via WhatsApp", included: true },
                    { name: "Atendimento via telefone", included: true },
                    { name: "Assessor dedicado", included: true }
                ],
                notas_fiscais: [
                    { name: "Emissão de NF-e", included: "Ilimitado" },
                    { name: "Emissão de NFC-e", included: "Ilimitado" }
                ],
                financeiro: [
                    { name: "Conta PJ gratuita", included: true },
                    { name: "Conciliação bancária", included: true }
                ],
                folha: [
                    { name: "Pró-labore dos sócios", included: "Até 3 sócios grátis" },
                    { name: "Folha de pagamento", included: true },
                    { name: "Faturamento mensal", included: "Ideal até R$ 100.000*" }
                ],
                tributacao: [
                    { name: "Regime tributário", included: "Simples Nacional" },
                    { name: "Consultoria fiscal", included: true }
                ]
            }
        }
    ];



    const renderFeatureCell = (feature) => {
        if (!feature) return <div className="flex justify-center">-</div>;

        if (typeof feature.included === 'boolean') {
            return (
                <div className="flex justify-center">
                    <span className={`text-${feature.included ? 'green' : 'red'}-500 font-bold text-lg hover:scale-125 transition duration-200`}>
                        {feature.included ? '✔️' : '❌'}
                    </span>
                </div>
            );
        }
        return (
            <div className="flex justify-center">
                <span className="text-gray-600 hover:font-bold transition duration-200">
                    {feature.included || '-'}
                </span>
            </div>
        );
    };

    const renderFeatureName = (feature) => (
        <div className="flex items-center">
            <span>{feature?.name || '-'}</span>
            {feature?.tooltip && (
                <Tooltip content={feature.tooltip} placement="top">
                    <span className="ml-2 text-blue-500 hover:text-blue-700 transition-colors">
                        <FiInfo className="inline" />
                    </span>
                </Tooltip>
            )}
        </div>
    );

    const renderSection = (title, features, planIndex) => {
        if (!features || !features.length) return null;

        return (
            <>
                <tr className="bg-gray-50 border-b border-gray-200">
                    <td className="p-4 font-bold text-blue-900 text-base border-r border-gray-200">
                        {title}
                    </td>
                    {servicoPlans.map((_, i) => (
                        <td key={`empty-${i}`} className="p-4 text-center"></td>
                    ))}
                </tr>
                {features.map((feature, index) => (
                    <tr
                        key={`${title}-${index}`}
                        className="border-b border-gray-100 hover:bg-gray-50 transition duration-150 ease-in-out group"
                    >
                        <td className="p-4 text-gray-700 border-r border-gray-200 group-hover:bg-blue-50 transition duration-200">
                            {renderFeatureName(feature)}
                        </td>
                        {servicoPlans.map((plan) => {
                            const featureGroup = Object.values(plan.features)[planIndex];
                            const currentFeature = featureGroup?.[index];
                            return (
                                <td
                                    key={`${title}-${index}-${plan.name}`}
                                    className="p-4 text-center border-r border-gray-200"
                                >
                                    {renderFeatureCell(currentFeature)}
                                </td>
                            );
                        })}
                    </tr>
                ))}
            </>
        );
    };

    const sectionTitles = [
        "Contabilidade",
        "Benefícios",
        "Atendimento",
        "Notas Fiscais",
        "Serviços Financeiros",
        "Folha de Pagamento"
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Conheça nossos planos</h2>

                <div className="flex justify-center space-x-4 sm:space-x-6 text-sm sm:text-base font-semibold text-blue-700 mb-10 bg-gray-100 p-1 sm:p-2 rounded-full shadow-inner max-w-max mx-auto">
                    <button
                        className={`py-2 px-4 sm:px-6 rounded-full transition-all duration-300 ease-in-out ${activePlanTab === 'servico' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-500 hover:bg-gray-200'} hover:scale-105 active:scale-95`}
                        onClick={() => setActivePlanTab('servico')}
                    >
                        Empresas de serviço
                    </button>
                    <button
                        className={`py-2 px-4 sm:px-6 rounded-full transition-all duration-300 ease-in-out ${activePlanTab === 'comercio' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-500 hover:bg-gray-200'} hover:scale-105 active:scale-95`}
                        onClick={() => setActivePlanTab('comercio')}
                    >
                        Empresas de comércio
                    </button>
                </div>

                {/* Desktop View */}
                <div className="hidden lg:block overflow-x-auto rounded-lg">
                    <table className="w-full text-sm text-left border-collapse">
                        <thead>
                            <tr className="text-center bg-gray-50 border-b">
                                <th className="p-4 text-left text-base font-semibold bg-white w-1/4"></th>
                                {servicoPlans.map((plan, index) => (
                                    <th
                                        key={index}
                                        className={`w-1/4 pt-4 relative overflow-hidden bg-white hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 ${plan.badge ? 'z-10' : ''}`}
                                    >
                                        <div className="h-[320px] w-full bg-white border-2 border-gray-100 px-4 pt-8 pb-12 rounded-t-2xl hover:border-blue-700 transition-all duration-300 ease-in-out relative">
                                            <div className="font-bold text-blue-900 mb-1 text-xl h-12">{plan.name}</div>
                                            <div className="text-sm text-gray-600 mb-2">{plan.description}</div>
                                            <div className="text-xs text-gray-400 mb-2">
                                                a partir de <span className="text-sm line-through">R${plan.oldPrice}</span>
                                            </div>
                                            <div className="text-4xl font-bold text-blue-900 my-2">
                                                R${plan.price}<span className="text-lg font-normal">/mês</span>
                                            </div>
                                            <p className="text-xs text-gray-500 my-4">{plan.note}</p>

                                            <button
                                                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-10 flex items-center justify-center mx-auto bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full shadow-md transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-xl"
                                                onClick={() => window.open('/cadastrar', '_self')}
                                            >
                                                Contratar
                                            </button>

                                            {plan.badge && (
                                                <div className={`absolute top-2 right-2 text-white ${plan.badgeColor || 'bg-blue-600'} text-xs px-3 py-1 rounded-full font-bold animate-pulse`}>
                                                    {plan.badge}
                                                </div>
                                            )}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {Object.values(servicoPlans[0].features).map((features, index) => (
                                renderSection(sectionTitles[index], features, index)
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile View */}
                <div className="lg:hidden space-y-6">
                    {servicoPlans.map((plan, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:border-blue-300 transition-all duration-300">
                            <div className="p-6 relative">
                                {plan.badge && (
                                    <div className={`absolute top-0 right-0 text-white ${plan.badgeColor || 'bg-blue-600'} text-xs px-3 py-1 rounded-full font-bold animate-pulse`}>
                                        {plan.badge}
                                    </div>
                                )}

                                <h3 className="text-xl font-bold text-blue-900 mb-1 h-[60px]">{plan.name}</h3>
                                <p className="text-sm text-gray-600 mb-2">{plan.description}</p>

                                <div className="flex items-baseline justify-center my-4">
                                    <span className="text-sm text-gray-400 mr-2">de <span className="line-through">R${plan.oldPrice}</span></span>
                                    <span className="text-3xl font-bold text-blue-900">R${plan.price}</span>
                                    <span className="text-lg text-gray-500">/mês</span>
                                </div>

                                <p className="text-xs text-gray-500 text-center mb-6">{plan.note}</p>

                                <button
                                    className="w-full h-12 flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-95 mb-6"
                                    onClick={() => window.open('/cadastrar', '_self')}
                                >
                                    Contratar
                                </button>

                                <div className="space-y-4">
                                    {Object.entries(plan.features).map(([section, features]) => (
                                        <div key={section} className="border-t border-gray-100 pt-4">
                                            <h4 className="font-semibold text-blue-900 mb-3 uppercase text-sm">
                                                {section.replace('_', ' ')}
                                            </h4>
                                            <ul className="space-y-3">
                                                {features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <div className="flex-1">
                                                            <div className="flex items-center">
                                                                <span className="text-sm text-gray-700">{feature.name}</span>
                                                                {feature.tooltip && (
                                                                    <Tooltip content={feature.tooltip} placement="top">
                                                                        <span className="ml-1 text-blue-500">
                                                                            <FiInfo className="inline" size={14} />
                                                                        </span>
                                                                    </Tooltip>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <span className={`mr-2 mt-1 ${typeof feature.included === 'boolean' ?
                                                            (feature.included ? 'text-green-500' : 'text-red-500') : 'text-gray-500'}`}>
                                                            {typeof feature.included === 'boolean' ?
                                                                (feature.included ? '✓' : '✗') :
                                                                feature.included}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PlansSection;