import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const TextsWithImageBg = () => {
  // Observadores de interseção para cada seção
  const [titleRef, titleInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [col1Ref, col1InView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [dividerRef, dividerInView] = useInView({ threshold: 0.5, triggerOnce: true });
  const [col2Ref, col2InView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [imageRef, imageInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [buttonRef, buttonInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="bg-[#f8fbff] py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <motion.h2
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="siteTitulo text-center mb-12"
        >
          Nossa contabilidade na prática.
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8 relative">
          {/* Container principal para texto (2/3 do espaço) */}
          <div className="lg:w-2/3 flex flex-col lg:flex-row gap-8">
            {/* Coluna 1 (1/2 do espaço de texto) */}
            <motion.div
              ref={col1Ref}
              initial={{ opacity: 0, x: -20 }}
              animate={col1InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9 }}
              className="lg:w-1/2 space-y-4"
            >
              <h3 className="text-lg md:text-xl font-bold text-[#05215d]">
                O que você vai fazer:
              </h3>
              <ul className="space-y-3 text-[#05215d]">
                {[
                  "Emitir as notas fiscais e importar seu extrato mensal na nossa plataforma.",
                  "Resolver as suas dúvidas com nosso atendimento.",
                  "Economizar mais de 80% ao mês."
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={col1InView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <Check className="text-[#00e1e6] flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.p
                initial={{ opacity: 0 }}
                animate={col1InView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xs text-gray-500 mt-2"
              >
                * Comparação com o preço médio cobrado pela contabilidade segundo calculadora de comparação de preço da Contabilizei.
              </motion.p>
            </motion.div>

            {/* Linha divisória - Agora visível e animada */}
            <motion.div
              ref={dividerRef}
              className="hidden lg:flex items-center justify-center mx-4 relative"
              initial={{ opacity: 0, height: 0 }}
              animate={dividerInView ? { opacity: 1, height: '100%' } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-px h-full bg-gradient-to-b from-transparent via-[#00e1e6] to-transparent"
                  initial={{ scaleY: 0 }}
                  animate={dividerInView ? { scaleY: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                />
              </div>
            </motion.div>

            {/* Coluna 2 (1/2 do espaço de texto) */}
            <motion.div
              ref={col2Ref}
              initial={{ opacity: 0, x: 20 }}
              animate={col2InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:w-1/2 space-y-4"
            >
              <h3 className="text-lg md:text-xl font-bold text-[#05215d]">
                O que nós vamos fazer:
              </h3>
              <ul className="space-y-3 text-[#05215d]">
                {[
                  "Entregamos uma contabilidade completa.",
                  "Mantemos a sua empresa em dia com todas as obrigações do governo, com o IRPJ incluso.",
                  "Atendimento rápido por telefone, WhatsApp, chat e e-mail.",
                  "Emissor gratuito de nota fiscal e boleto.",
                  "Calculamos guias de impostos, folha e pró-labore.",
                  "Assinamos relatórios como balanço, DRE e muitos outros."
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    animate={col2InView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <Check className="text-[#00e1e6] flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Imagem (1/3 do espaço) */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={imageInView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/3 mt-8 lg:mt-0 flex justify-center lg:justify-end"
          >
            <div className="max-w-xs md:max-w-md w-full">
              <img
                src="/assets/img/_app5.png"
                alt="App de contabilidade"
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Botão */}
        <motion.div
          ref={buttonRef}
          initial={{ opacity: 0, y: 20 }}
          animate={buttonInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#"
            className="bg-[#00e1e6] hover:bg-[#00c9cd] text-[#05215d] font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            Conheça nossos planos
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TextsWithImageBg;