import React, { useState } from 'react';
import { motion } from 'framer-motion';

const tabs = [
  {
    title: 'Abrir empresa',
    image: '/assets/img/mulher4.png',
    name: 'Diana Alves',
    credential: 'Contadora Simplizei - CRC 15P289726/O-4',
    timeline: [
      {
        step: '1',
        title: 'Orientamos você em todas as escolhas',
        desc: 'Depois de escolher um dos planos da Simplizei e preencher seu cadastro, analisamos a documentação enviada e orientamos na escolha do CNAE, tipo de empresa, pagamento de taxas do governo e necessidade do certificado digital.'
      },
      {
        step: '2',
        title: 'Realizamos todo o processo de abertura da empresa',
        desc: 'Cuidamos do processo de abertura e integração com sua conta bancária e emissão fiscal.'
      },
      {
        step: '3',
        title: 'Cuidamos da sua contabilidade',
        desc: 'Nosso time calcula impostos, envia lembretes, assina relatórios e organiza documentos da sua empresa.'
      }
    ],
    buttons: [
      { text: 'Abra sua empresa grátis', primary: true, onClick: () => { window.open(`/cadastrar`, '_self')} },
    ]
  },
  {
    title: 'Deixar de ser MEI',
    image: '/assets/img/homem.png',
    name: 'Carlos Souza',
    credential: 'Contador Especialista - CRC 13P987456/O-2',
    timeline: [
      {
        step: '1',
        title: 'Analisamos seu caso como MEI',
        desc: 'Identificamos se vale a pena sair do MEI e orientamos o processo.'
      },
      {
        step: '2',
        title: 'Realizamos a migração',
        desc: 'Executamos todo o trâmite para transformar seu MEI em uma empresa formal.'
      },
      {
        step: '3',
        title: 'Gerenciamos sua nova empresa',
        desc: 'Assumimos toda a contabilidade do novo CNPJ.'
      }
    ],
    buttons: [
      { text: 'Fale com um especialista', primary: false, onClick: () => { window.open(`https://api.whatsapp.com/send?phone=${import.meta.env.VITE_APP_WHATSAPP_NUMBER}&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Simplizei.`, '_blank') } },
    ]
  },
  {
    title: 'Mudar de contador',
    image: '/assets/img/maria.jpeg',
    name: 'Juliana Melo',
    credential: 'Contadora Sênior - CRC 17P123789/O-9',
    timeline: [
      {
        step: '1',
        title: 'Assumimos sua contabilidade',
        desc: 'Realizamos a troca de contador de forma rápida e segura.'
      },
      {
        step: '2',
        title: 'Organizamos tudo',
        desc: 'Centralizamos e digitalizamos seus documentos contábeis.'
      },
      {
        step: '3',
        title: 'Oferecemos suporte completo',
        desc: 'Conte com nossa equipe para tirar dúvidas e manter a regularidade.'
      }
    ],
    buttons: [
      { text: 'Trocar de contador agora', primary: true, onClick: () => { window.open(`/trocar-de-contador`, '_self') } },
    ]
  }
];

export default function ComoApoiamosSection() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = tabs[activeTab];

  return (
    <section className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
          Como apoiamos você na prática<span className="text-cyan-500">.</span>
        </h2>

        <div className="flex justify-center space-x-6 border-b border-gray-300 mb-10">
          {tabs.map((t, i) => (
            <button
              key={i}
              className={`pb-2 text-sm md:text-base font-medium ${activeTab === i
                ? 'text-blue-700 border-b-2 border-blue-700'
                : 'text-gray-500'
                }`}
              onClick={() => setActiveTab(i)}
            >
              {t.title}
            </button>
          ))}
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center md:items-start md:justify-between gap-10">
          {/* Timeline */}
          <div className="flex-1 relative">
            <div className="absolute top-[20px] left-[20px] w-[2px] bg-blue-500 h-[60%] z-10" />
            {tab.timeline.map((item, idx) => (
              <div key={idx} className="flex items-start mb-6">
                <div className="w-10 h-10 p-3 flex items-center justify-center rounded-full bg-blue-800 text-white font-bold mr-4 z-20 border-4 border-gray-50">
                  {item.step}
                </div>
                <div className='w-full text-left'>
                  <h4 className="font-semibold text-blue-900">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              {tab.buttons.map((btn, idx) => (
                <button
                  key={idx}
                  className={`rounded-full px-6 py-2 text-sm font-semibold ${btn.primary
                    ? 'bg-cyan-400 text-white hover:bg-cyan-500'
                    : 'border border-blue-700 text-blue-700 hover:bg-blue-50'
                    }`}
                  onClick={btn.onClick ? btn.onClick : undefined}

                >
                  {btn.text}
                </button>
              ))}
            </div>
          </div>

          {/* Imagem com animação */}
          <motion.div
            className="flex-1 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6 }}
          >
            <div className="relative">
              <img
                src={tab.image}
                alt="Consultora"
                className="rounded-full w-[280px] h-[280px] object-cover border-4 border-white shadow-xl"
              />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-blue-800 text-white text-xs px-4 py-1 rounded-full shadow-md text-center whitespace-nowrap opacity-[80%]">
                <strong>{tab.name}</strong><br />
                {tab.credential}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
