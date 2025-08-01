import React, { useState } from 'react';
import { Tooltip } from "@material-tailwind/react";
import { FiInfo } from 'react-icons/fi';

const PlansSection = () => {
    const [activePlanTab, setActivePlanTab] = useState('servico');

    // Planos para empresas de serviço
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
                        name: "Contabilidade completa", 
                        included: true, 
                        tooltip: "Todas as obrigações contábeis e fiscais para sua empresa de serviços"
                    },
                    {
                        name: "Processo de abertura grátis", 
                        included: true, 
                        tooltip: "Auxílio completo na abertura da sua empresa"
                    },
                    {
                        name: "Certificado digital gratuito", 
                        included: true, 
                        tooltip: "Necessário para emissão de notas fiscais eletrônicas"
                    }
                ],
                beneficios: [
                    {
                        name: "Pacote de benefícios", 
                        included: false, 
                        tooltip: "Academia, consultas com psicólogo e nutricionista"
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
                        tooltip: "Emita quantas notas fiscais precisar" 
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
                        name: "Pró-labore", 
                        included: "Até 2 sócios grátis", 
                        tooltip: "Cálculo automático" 
                    },
                    { 
                        name: "Folha de pagamento", 
                        included: "Cobrado à parte", 
                        tooltip: "Para empresas com funcionários" 
                    },
                    { 
                        name: "Faturamento mensal", 
                        included: "Ideal até R$ 50.000*", 
                        tooltip: "Para faturamentos maiores, consulte valores" 
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
                    { name: "Contabilidade completa", included: true },
                    { name: "Processo de abertura grátis", included: true },
                    { name: "Certificado digital gratuito", included: true }
                ],
                beneficios: [
                    { name: "Pacote de benefícios", included: true }
                ],
                atendimento: [
                    { name: "Atendimento via WhatsApp", included: true },
                    { name: "Atendimento via telefone", included: true }
                ],
                notas_fiscais: [
                    { name: "Emissão de NF-e", included: "Ilimitado" }
                ],
                financeiro: [
                    { name: "Conta PJ gratuita", included: true }
                ],
                folha: [
                    { name: "Pró-labore", included: "Até 2 sócios grátis" },
                    { name: "Folha de pagamento", included: "Cobrado à parte" },
                    { name: "Faturamento mensal", included: "Ideal até R$ 50.000*" }
                ]
            }
        }
    ];

    // Planos para empresas de comércio
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

    // Renderiza uma célula de feature
    const renderFeatureCell = (feature) => {
        if (!feature) return <div className="flex justify-center">-</div>;

        if (typeof feature.included === 'boolean') {
            return (
                <div className="flex justify-center">
                    <span className={`text-${feature.included ? 'green' : 'red'}-500 font-bold text-lg`}>
                        {feature.included ? '✔️' : '❌'}
                    </span>
                </div>
            );
        }
        return (
            <div className="flex justify-center">
                <span className="text-gray-600">
                    {feature.included || '-'}
                </span>
            </div>
        );
    };

    // Renderiza o nome da feature com tooltip se existir
    const renderFeatureName = (feature) => (
        <div className="flex items-center">
            <span>{feature?.name || '-'}</span>
            {feature?.tooltip && (
                <Tooltip content={feature.tooltip}>
                    <span className="ml-2 text-blue-500 cursor-pointer">
                        <FiInfo className="inline" />
                    </span>
                </Tooltip>
            )}
        </div>
    );

    // Renderiza uma seção completa da tabela
    const renderSection = (title, features, planIndex) => {
        if (!features || !features.length) return null;

        const currentPlans = activePlanTab === 'servico' ? servicoPlans : comercioPlans;

        return (
            <>
                <tr className="bg-gray-50 border-b border-gray-200">
                    <td className="p-4 font-bold text-blue-900 text-base border-r border-gray-200">
                        {title}
                    </td>
                    {currentPlans.map((_, i) => (
                        <td key={`empty-${i}`} className="p-4 text-center"></td>
                    ))}
                </tr>
                {features.map((feature, index) => (
                    <tr key={`${title}-${index}`} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4 text-gray-700 border-r border-gray-200">
                            {renderFeatureName(feature)}
                        </td>
                        {currentPlans.map((plan) => {
                            const featureGroups = Object.values(plan.features);
                            const currentFeature = featureGroups[planIndex]?.[index];
                            return (
                                <td key={`${title}-${index}-${plan.name}`} className="p-4 text-center border-r border-gray-200">
                                    {renderFeatureCell(currentFeature)}
                                </td>
                            );
                        })}
                    </tr>
                ))}
            </>
        );
    };

    // Obtém os títulos das seções baseado no tipo de plano ativo
    const getSectionTitles = () => {
        if (activePlanTab === 'servico') {
            return [
                "Contabilidade",
                "Benefícios",
                "Atendimento",
                "Notas Fiscais",
                "Serviços Financeiros",
                "Folha de Pagamento"
            ];
        } else {
            return [
                "Contabilidade",
                "Atendimento",
                "Notas Fiscais",
                "Serviços Financeiros",
                "Folha de Pagamento",
                "Tributação"
            ];
        }
    };

    // Obtém a lista de features para o tipo de plano ativo
    const getFeaturesList = () => {
        const plans = activePlanTab === 'servico' ? servicoPlans : comercioPlans;
        return plans.length > 0 ? Object.values(plans[0].features) : [];
    };

    // Obtém os planos ativos (serviço ou comércio)
    const getCurrentPlans = () => {
        return activePlanTab === 'servico' ? servicoPlans : comercioPlans;
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Conheça nossos planos</h2>

                {/* Tabs de navegação */}
                <div className="flex justify-center gap-4 mb-10">
                    <button
                        className={`px-6 py-2 rounded-full transition-all ${activePlanTab === 'servico' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        onClick={() => setActivePlanTab('servico')}
                    >
                        Empresas de serviço
                    </button>
                    <button
                        className={`px-6 py-2 rounded-full transition-all ${activePlanTab === 'comercio' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        onClick={() => setActivePlanTab('comercio')}
                    >
                        Empresas de comércio
                    </button>
                </div>

                {/* Visualização desktop */}
                <div className="hidden lg:block overflow-x-auto rounded-lg shadow-lg">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b">
                                <th className="p-4 text-left font-semibold bg-white w-1/4"></th>
                                {getCurrentPlans().map((plan, index) => (
                                    <th key={index} className="w-1/4 pt-4 relative">
                                        <div className="bg-white border-2 border-gray-100 px-4 pt-8 pb-12 rounded-t-2xl h-[320px] relative">
                                            <div className="font-bold text-blue-900 text-xl mb-1">{plan.name}</div>
                                            <div className="text-sm text-gray-600 mb-2">{plan.description}</div>
                                            <div className="text-xs text-gray-400 mb-2">
                                                a partir de <span className="text-sm line-through">R${plan.oldPrice}</span>
                                            </div>
                                            <div className="text-4xl font-bold text-blue-900 my-2">
                                                R${plan.price}<span className="text-lg font-normal">/mês</span>
                                            </div>
                                            <p className="text-xs text-gray-500 my-4">{plan.note}</p>

                                            <button
                                                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-10 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full shadow-md transition-all hover:scale-105"
                                                onClick={() => window.open('/cadastrar', '_self')}
                                            >
                                                Contratar
                                            </button>

                                            {plan.badge && (
                                                <div className={`absolute top-2 right-2 text-white ${plan.badgeColor} text-xs px-3 py-1 rounded-full font-bold animate-pulse`}>
                                                    {plan.badge}
                                                </div>
                                            )}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {getFeaturesList().map((features, index) => (
                                renderSection(getSectionTitles()[index], features, index)
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Visualização mobile */}
                <div className="lg:hidden space-y-6">
                    {getCurrentPlans().map((plan, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                            <div className="p-6 relative">
                                {plan.badge && (
                                    <div className={`absolute top-4 right-4 text-white ${plan.badgeColor} text-xs px-3 py-1 rounded-full font-bold animate-pulse`}>
                                        {plan.badge}
                                    </div>
                                )}

                                <h3 className="text-xl font-bold text-blue-900 mb-1">{plan.name}</h3>
                                <p className="text-sm text-gray-600 mb-2">{plan.description}</p>

                                <div className="flex items-baseline justify-center my-4">
                                    <span className="text-sm text-gray-400 mr-2">de <span className="line-through">R${plan.oldPrice}</span></span>
                                    <span className="text-3xl font-bold text-blue-900">R${plan.price}</span>
                                    <span className="text-lg text-gray-500">/mês</span>
                                </div>

                                <p className="text-xs text-gray-500 text-center mb-6">{plan.note}</p>

                                <button
                                    className="w-full h-12 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg shadow-md transition-all mb-6"
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
                                                        <span className={`mr-2 mt-1 ${typeof feature.included === 'boolean' ?
                                                            (feature.included ? 'text-green-500' : 'text-red-500') : 'text-gray-500'}`}>
                                                            {typeof feature.included === 'boolean' ?
                                                                (feature.included ? '✓' : '✗') :
                                                                feature.included}
                                                        </span>
                                                        <div className="flex-1">
                                                            <div className="flex items-center">
                                                                <span className="text-sm text-gray-700">{feature.name}</span>
                                                                {feature.tooltip && (
                                                                    <Tooltip content={feature.tooltip}>
                                                                        <span className="ml-1 text-blue-500 cursor-pointer">
                                                                            <FiInfo size={14} />
                                                                        </span>
                                                                    </Tooltip>
                                                                )}
                                                            </div>
                                                        </div>
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