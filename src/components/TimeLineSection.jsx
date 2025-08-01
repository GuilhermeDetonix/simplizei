import '../styles/app.css';
import { motion } from "framer-motion";

const TimelineSection = ({ titulo = {}, points = [], buttons = [] }) => {
  var steps = [
    {
      id: 1,
      text: "Entendemos mais sobre o perfil da sua empresa, quais são suas necessidades e o motivo de precisar transformar seu MEI.",
    },
    {
      id: 2,
      text: "Você contrata um dos nossos planos anuais e verificamos se é necessário alguma regularização do MEI.",
    },
    {
      id: 3,
      text: "Cuidamos da transformação do MEI em ME, e te apoiamos em todos os processos com a nova empresa.",
    },
  ];

  if (points && points.length > 0) {
    steps = points.map((step, index) => {
      return {
        id: index + 1,
        text: step.text,
        title: step.title
      }
    })
  }

  return (
    <section className="bg-[#f6f8fb] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-16">
          {Object.values(titulo).length > 0 ? titulo : (
            <>
              Entenda como apoiamos a transformação <br className="hidden md:block" />
              do seu <span className="text-blue-800">MEI na prática</span>.
            </>
          )}
        </h2>

        {/* Timeline */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-16 md:gap-8">
          {/* Animated line */}
          <div className="hidden md:block absolute top-5 left-0 w-full h-1 bg-transparent z-0">
            <div className="w-0 transform translate-x-[21%] h-full bg-blue-800 origin-left animate-grow-line" />
          </div>

          {steps.map((step) => (
            <div key={step.id} className="relative flex flex-col items-center text-center w-full md:w-1/3 z-10">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-800 text-white font-bold rounded-full z-10 border-8 border-[#f6f8fb]">
                {step.id}
              </div>
              <div className='h-[60px] lg:h-[100px]'>
                {step.title ? (
                  <p className="mt-4 text-l font-bold text-blue-800">{step.title}</p>
                ) : ''}
                <p className="mt-4 text-xs text-gray-700 max-w-xs">{step.text}</p>

              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-12">
          {buttons && buttons.length > 0 ? buttons.map((button, index) => (
            <motion.button
              key={index}
              className={`${button.classes && button.classes.length > 0 ? button.classes : 'bg-cyan-300 hover:bg-cyan-400 text-[#002D74] font-semibold'} px-6 py-2 rounded-full transition-colors duration-300 transform hover:scale-105`}
              onClick={button.onClick}
            >
              {button.text}
            </motion.button>
          )) : (
            <>
              <button className="bg-cyan-400 hover:bg-cyan-500 text-white font-semibold px-6 py-3 rounded-full transition-all shadow-sm" onClick={() => window.open(`https://api.whatsapp.com/send?phone=${import.meta.env.VITE_APP_WHATSAPP_NUMBER}&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Simplizei.`, '_blank')}>
                Fale com um especialista
              </button>
              <button className="border border-blue-800 text-blue-800 hover:bg-blue-50 font-semibold px-6 py-3 rounded-full transition-all shadow-sm" onClick={() => window.open(`/planos-simplizei`, '_self')}>
                Conheça nossos planos
              </button>
            </>
          )
          }
        </div>
      </div>

    </section>
  );
};

export default TimelineSection;
