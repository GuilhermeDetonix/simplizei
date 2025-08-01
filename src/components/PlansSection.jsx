import React, { useState } from 'react';
import { Card, Typography } from "@material-tailwind/react";

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
          { name: "Contabilidade completa", included: true },
          { name: "Processo de abertura grátis", included: true },
          { name: "Certificado digital gratuito", included: true }
        ],
        beneficios: [
          { name: "Pacote de benefícios: academia, consultas com psicólogo e nutricionista", included: false }
        ],
        atendimento: [
          { name: "Via chat/e-mail", included: true },
          { name: "WhatsApp 9h às 22h", included: true },
          { name: "Telefone 9h às 18h", included: true },
          { name: "Assessor dedicado", included: false },
          { name: "Reunião com orientações", included: "Grupo" }
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
          { name: "Pacote de benefícios: academia, consultas com psicólogo e nutricionista", included: true }
        ],
        atendimento: [
          { name: "Via chat/e-mail", included: true },
          { name: "WhatsApp 9h às 22h", included: true },
          { name: "Telefone 9h às 18h", included: true },
          { name: "Assessor dedicado", included: false },
          { name: "Reunião com orientações", included: "Grupo" }
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
          { name: "Contabilidade completa", included: true },
          { name: "Processo de abertura grátis", included: true },
          { name: "Certificado digital gratuito", included: true }
        ],
        beneficios: [
          { name: "Pacote de benefícios: academia, consultas com psicólogo e nutricionista", included: "✔️ (R$30/mês)" }
        ],
        atendimento: [
          { name: "Via chat/e-mail", included: true },
          { name: "WhatsApp 9h às 22h", included: true },
          { name: "Telefone 9h às 18h", included: true },
          { name: "Assessor dedicado", included: true },
          { name: "Reunião com orientações", included: "Individual" }
        ]
      }
    }
  ];

  const comercioPlans = [
    {
      name: "COMÉRCIO START",
      description: "Ideal para pequenos e-commerces.",
      oldPrice: "320",
      price: "299",
      note: "Solução completa para iniciar seu comércio online.",
      badge: null,
      features: {
        contabilidade: [
          { name: "Contabilidade completa", included: true },
          { name: "Emissão de NF-e", included: true },
          { name: "Controle de estoque", included: false }
        ],
        suporte: [
          { name: "Atendimento personalizado", included: true },
          { name: "Consultoria fiscal", included: false },
          { name: "Suporte 24/7", included: false }
        ]
      }
    },
    {
      name: "COMÉRCIO PRO",
      description: "Gestão de estoque e vendas",
      oldPrice: "500",
      price: "449",
      note: "Para comércios com alto volume de operações.",
      badge: "RECOMENDADO!",
      features: {
        contabilidade: [
          { name: "Contabilidade completa", included: true },
          { name: "Emissão de NF-e", included: true },
          { name: "Controle de estoque", included: true }
        ],
        suporte: [
          { name: "Atendimento personalizado", included: true },
          { name: "Consultoria fiscal", included: true },
          { name: "Suporte 24/7", included: false }
        ]
      }
    },
    {
      name: "COMÉRCIO PREMIUM",
      description: "Suporte 24/7 e consultoria",
      oldPrice: "700",
      price: "649",
      note: "Solução robusta para grandes empresas de comércio.",
      badge: "SUPORTE PREMIUM",
      features: {
        contabilidade: [
          { name: "Contabilidade completa", included: true },
          { name: "Emissão de NF-e", included: true },
          { name: "Controle de estoque", included: true }
        ],
        suporte: [
          { name: "Atendimento personalizado", included: true },
          { name: "Consultoria fiscal", included: true },
          { name: "Suporte 24/7", included: true }
        ]
      }
    }
  ];

  const renderFeatureCell = (feature) => {
    if (typeof feature.included === 'boolean') {
      return feature.included ? (
        <span className="text-green-600 font-bold text-lg hover:scale-125 transition duration-200">✔️</span>
      ) : (
        <span className="text-red-500 font-bold text-lg hover:scale-125 transition duration-200">❌</span>
      );
    }
    return <span className="text-gray-600 hover:font-bold transition duration-200">{feature.included}</span>;
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Conheça nossos planos.</h2>
        <div className="flex justify-center space-x-6 sm:space-x-8 text-base font-semibold text-blue-700 mb-10 bg-gray-100 p-2 rounded-full shadow-inner max-w-max mx-auto">
          <button
            className={`tab-plan-button py-2 px-6 rounded-full transition-all duration-300 ease-in-out ${activePlanTab === 'servico' ? 'border-b-2 border-blue-700 text-blue-700' : 'text-gray-500'} hover:bg-gray-200 hover:scale-105 active:scale-95`}
            onClick={() => setActivePlanTab('servico')}
          >
            Empresas de serviço
          </button>
          <button
            className={`tab-plan-button py-2 px-6 rounded-full transition-all duration-300 ease-in-out ${activePlanTab === 'comercio' ? 'border-b-2 border-blue-700 text-blue-700' : 'text-gray-500'} hover:bg-gray-200 hover:scale-105 active:scale-95`}
            onClick={() => setActivePlanTab('comercio')}
          >
            Empresas de comércio
          </button>
        </div>

        <div className="overflow-x-auto rounded-lg hidden md:block">
          <table className="w-full text-sm text-left border-collapse table-plans">
            <thead>
              <tr className="text-center bg-gray-50 border-b">
                <th className="p-4 text-left text-base font-semibold bg-white"></th>
                {(activePlanTab === 'servico' ? servicoPlans : comercioPlans).map((plan, index) => (
                  <th
                    key={index}
                    className={`w-1/4 pt-4 relative overflow-hidden bg-white plan-card hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 ${plan.badge ? 'z-10' : ''}`}
                  >
                    <div className="descPlan h-full w-full bg-white shadow-lg border-2 border-gray-100 pl-4 pr-4 pt-8 rounded-t-2xl hover:border-blue-700 transition-all duration-300 ease-in-out" style={{ minHeight: "350px", position: "relative" }}>
                      <div className="font-bold text-blue-900 mb-1 text-2xl md:text-1xsm h-10" style={{ fontSize: "0.8rem" }}>{plan.name}</div>
                      <div className="text-xs text-gray-600 mb-2" style={{ fontFamily: "Inter, sans-serif" }}>{plan.description}</div>
                      <div className="text-xs text-gray-400 mb-2">
                        a partir de <br /><span className="text-sm line-through"> {plan.oldPrice}</span>
                      </div>
                      <div className="text-6xl font-bold text-blue-900 my-2">
                        <span className="text-sm font-bold">R$</span>{plan.price}<span className="text-sm font-normal">/mês</span>
                      </div>
                      <p className="text-xs text-gray-500 my-6" style={{ fontWeight: 'normal' }}>{plan.note}</p>
                      <button className="btn-contratar flex w-2/3 h-8 items-center justify-center mx-auto bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-2 px-2 sm:px-2 sm:py-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 transform hover:shadow-xl text-2xl md:text-1xsm " style={{ fontFamily: "Inter, sans-serif", marginBottom: "10px", bottom: "0", left: "50%", transform: "translateX(-50%)", position: "absolute", fontSize: "0.8rem" }}  onClick={() => window.open('/cadastrar', '_self')} >
                        Contratar
                      </button>
                    </div>

                    {plan.badge && (
                      <div className={`absolute top-2 right-2 text-white ${plan.badgeColor || 'bg-blue-600'} text-xs px-2 py-1 rounded-full font-bold animate-pulse border bg-blue-50 `}>
                        {plan.badge}
                      </div>
                    )}

                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {activePlanTab === 'servico' ? (
                <>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <td className="lg:p-4 sm:p-1 font-bold text-blue-900 text-base border-r border-gray-200 sm:text-[0.8rem] md:text-sm lg:text-[0.8rem] xl:text-base 2xl:text-base">Contabilidade</td>
                    <td className="p-4 text-center"></td>
                    <td className="p-4 text-center"></td>
                    <td className="p-4 text-center"></td>
                  </tr>
                  {servicoPlans[0].features.contabilidade.map((feature, index) => (
                    <tr key={`cont-${index}`} className="border-b border-gray-100 hover:bg-gray-50 transition duration-150 ease-in-out group">
                      <td className="p-4 text-gray-700 border-r border-gray-200 group-hover:bg-blue-50 transition duration-200 md:text-sm">
                        {feature.name}
                      </td>
                      {servicoPlans.map((plan, planIndex) => (
                        <td key={`cont-${index}-${planIndex}`} className="p-4 text-center border-r border-gray-200 sm:text-sm">
                          {renderFeatureCell(plan.features.contabilidade[index])}
                        </td>
                      ))}
                    </tr>
                  ))}

                  <tr className="bg-gray-50 border-b border-gray-200">
                    <td className="p-4 font-bold text-blue-900 text-base border-r border-gray-200 sm:text-[0.6rem] md:text-base lg:text-base xl:text-base 2xl:text-base">
                      <span className="md:text-[0.6rem] lg:text-base xl:text-base 2xl:text-base">Benefícios</span>
                    </td>
                    <td className="p-4 text-center"></td>
                    <td className="p-4 text-center"></td>
                    <td className="p-4 text-center"></td>
                  </tr>
                  {servicoPlans[0].features.beneficios.map((feature, index) => (
                    <tr key={`ben-${index}`} className="border-b border-gray-100 hover:bg-gray-50 transition duration-150 ease-in-out group">
                      <td className="p-4 text-gray-700 border-r border-gray-200 group-hover:bg-blue-50 transition duration-200 md:text-sm">
                        {feature.name}
                      </td>
                      {servicoPlans.map((plan, planIndex) => (
                        <td key={`ben-${index}-${planIndex}`} className="p-4 text-center border-r border-gray-200 sm:text-[0.6rem] md:text-base lg:text-base xl:text-base 2xl:text-base">
                          {renderFeatureCell(plan.features.beneficios[index])}
                        </td>
                      ))}
                    </tr>
                  ))}

                  <tr className="bg-gray-50 border-b border-gray-200">
                    <td className="p-4 font-bold text-blue-900 text-base border-r border-gray-200 sm:text-[0.6rem] md:text-base lg:text-base xl:text-base 2xl:text-base">
                      <span className="sm:text-[0.6rem] md:text-base lg:text-base xl:text-base 2xl:text-base">Atendimento</span>
                    </td>
                    <td className="p-4 text-center"></td>
                    <td className="p-4 text-center"></td>
                    <td className="p-4 text-center"></td>
                  </tr>
                  {servicoPlans[0].features.atendimento.map((feature, index) => (
                    <tr key={`atend-${index}`} className="border-b border-r border-gray-100 hover:bg-gray-50 transition duration-150 ease-in-out group">
                      <td className="p-4 text-gray-700 border-r border-gray-200 group-hover:bg-blue-50 transition duration-200 md:text-sm">
                        {feature.name}
                      </td>
                      {servicoPlans.map((plan, planIndex) => (
                        <td key={`atend-${index}-${planIndex}`} className="p-4 text-center border-r border-gray-200">
                          {renderFeatureCell(plan.features.atendimento[index])}
                        </td>
                      ))}
                    </tr>
                  ))}
                </>
              ) : (
                <>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <td className="p-4 font-bold text-blue-900 text-base border-r border-gray-200">Contabilidade</td>
                    <td className="p-4 text-center"></td>
                    <td className="p-4 text-center"></td>
                    <td className="p-4 text-center"></td>
                  </tr>
                  {comercioPlans[0].features.contabilidade.map((feature, index) => (
                    <tr key={`cont-${index}`} className="border-b border-gray-100 hover:bg-gray-50 transition duration-150 ease-in-out group">
                      <td className="p-4 text-gray-700 border-r border-gray-200 group-hover:bg-blue-50 transition duration-200">
                        {feature.name}
                      </td>
                      {comercioPlans.map((plan, planIndex) => (
                        <td key={`cont-${index}-${planIndex}`} className="p-4 text-center">
                          {renderFeatureCell(plan.features.contabilidade[index])}
                        </td>
                      ))}
                    </tr>
                  ))}

                  <tr className="bg-gray-50 border-b border-gray-200">
                    <td className="p-4 font-bold text-blue-900 text-base border-r border-gray-200">Suporte</td>
                    <td className="p-4 text-center"></td>
                    <td className="p-4 text-center"></td>
                    <td className="p-4 text-center"></td>
                  </tr>
                  {comercioPlans[0].features.suporte.map((feature, index) => (
                    <tr key={`sup-${index}`} className="border-b border-gray-100 hover:bg-gray-50 transition duration-150 ease-in-out group">
                      <td className="p-4 text-gray-700 border-r border-gray-200 group-hover:bg-blue-50 transition duration-200">
                        {feature.name}
                      </td>
                      {comercioPlans.map((plan, planIndex) => (
                        <td key={`sup-${index}-${planIndex}`} className="p-4 text-center">
                          {renderFeatureCell(plan.features.suporte[index])}
                        </td>
                      ))}
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>

        <div className='overflow-x-auto lg:hidden'>
          {(activePlanTab === 'servico' ? servicoPlans : comercioPlans).map((plan, index) => (
            <div className='card bg-white rounded-lg p-4 shadow-md' key={index}>
              <div className="bg-gray-50 rounded-lg p-4 shadow-md descPlanMini">
                <div className="font-bold text-blue-900 mb-1 text-2xl md:text-1xsm h-12 text-base">{plan.name}</div>
                <div className="text-xs text-gray-600 mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                  {plan.description}
                </div>
                <div className="text-xs text-gray-400 mb-2">
                  a partir de <br /><span className="text-sm line-through"> {plan.oldPrice}</span>
                </div>
                <div className="text-5xl font-bold text-blue-900 my-2">
                  <span className="text-sm font-bold">R$</span>{plan.price}<span className="text-sm font-normal">/mês</span>
                </div>
                <p className="text-xs text-gray-500 my-6">{plan.note}</p>

                <ul className="list-disc mb-5">
                  {Object.keys(plan.features).map((featureName) => (
                    <li key={featureName} className="text-sm text-gray-600 mb-2 list-none">
                      <div className="flex items-center p-3 bg-blue-100 w-full justify-center">
                        <strong className="text-blue-900">{featureName.toUpperCase()}</strong>
                      </div>
                      <ul className="list-disc pl-4">
                        {plan.features[featureName].filter(e => e.included).map((feature) => (
                          <li key={feature.name} className="text-sm text-gray-600 mb-1 flex justify-start py-2 text-left">
                            <svg className="w-6 h-6 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            {feature.name}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
                <button className="btn-contratar flex h-10 items-center justify-center mx-auto bg-cyan-400 hover:bg-cyan-500 text-white font-bold rounded-full shadow-md transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 transform hover:shadow-xl text-2xl w-full" style={{ fontFamily: "Inter, sans-serif", marginBottom: "10px", bottom: "0" }} >
                  Contratar
                </button>
              </div>
            </div>

          ))}

        </div>


        {/* <Card className="h-full w-full overflow-hidden mt-10">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                <td colSpan={2} className="p-4 text-center font-bold text-blue-900 text-lg bg-gray-50 border-b border-gray-200">
                  <Typography variant="h5" className="text-blue-900">
                    Soluções adicionais
                  </Typography>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="siteSubTitulo bg-white bg-blue-gray-50/50 border-r border-gray-200 p-2 text-left">
                    <svg className="w-4 h-4 text-white inline-block mr-2 rounded-full bg-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                    Escritório virtual
                </td>
                <td className="text-black-300 text-l bg-white border-gray-900 p-2">Proteção do endereço pessoal e agilidade na abertura do CNPJ por R$60/mês</td>
              </tr>
              <tr>
                <td className="siteSubTitulo bg-white bg-blue-gray-50/50 border-r border-gray-200 p-2 text-left">
                    <svg className="w-4 h-4 text-white inline-block mr-2 rounded-full bg-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                    Plano de saúde
                </td>
                <td className="text-black-300 text-l bg-white border-gray-900 p-2">Proteção do endereço pessoal e agilidade na abertura do CNPJ por R$60/mês</td>
              </tr>
            </tbody>
          </table>
        </Card> */}


      </div>
    </section>
  );
};

export default PlansSection;