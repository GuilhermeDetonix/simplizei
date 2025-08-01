import { motion } from 'framer-motion';
import {
  FaTrophy,
  FaUserCheck,
  FaRegClock,
  FaRedo,
  FaChartLine,
  FaEnvelopeOpenText,
} from 'react-icons/fa';
import { BsPeople } from 'react-icons/bs';

const AberturaCnpjSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-10 max-w-7xl mx-auto">
      {/* Banner Principal */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-blue-900 rounded-3xl h-[570px] sm:h-[350px] md:h-[300px] lg:h-[250px] pb-0 text-white flex flex-col lg:flex-row items-center justify-between gap-6 relative"
      >
        {/* Conteúdo de Texto */}
        <div className="flex-1 text-center lg:text-left z-10 p-6 sm:p-8 md:p-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Somos líderes em abertura de CNPJ no Brasil.
          </h2>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-cyan-300 font-bold text-base sm:text-lg">
            <p>+1.200 <span className="text-white font-normal">especialistas</span></p>
            <p>+70.000 <span className="text-white font-normal">profissionais atendidos</span></p>
            <p>+50 <span className="text-white font-normal">cidades atendidas</span></p>
          </div>
        </div>

        {/* Imagem do Contador */}
        <div className="w-full sm:w-[400px] h-[200px] sm:h-[185px] relative flex-shrink-0">
          <img
            src="/assets/img/homem2.png"
            alt="Contador especialista"
            className="w-full h-full object-contain object-bottom absolute bottom-0 left-0 sm:left-auto sm:right-0"
            style={{
              maxWidth: '100%',
              height: 'auto',
              transform: 'translateY(10%)'
            }}
          />
          <div className="bg-blue-900/90 p-2 sm:p-3 text-xs sm:text-sm absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 rounded-lg text-center min-w-[120px]">
            <p className="font-semibold">Contador Certificado</p>
          </div>
        </div>
      </motion.div>

      {/* Grid de Benefícios */}
      <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-[#002b6b]">
        {[
          {
            icon: <FaTrophy className="text-2xl sm:text-3xl flex-shrink-0" />,
            title: "10 anos de expertise contábil",
            description: "Entregamos uma contabilidade segura e digital para você."
          },
          {
            icon: <FaRegClock className="text-2xl sm:text-3xl flex-shrink-0" />,
            title: "Agilidade na abertura do CNPJ",
            description: "Abrimos seu CNPJ em até 5 dias em São Paulo."
          },
          {
            icon: <FaRedo className="text-2xl sm:text-3xl flex-shrink-0" />,
            title: "Contabilidade completa",
            description: "Além das nossas soluções para facilitar o seu dia a dia."
          },
          {
            icon: <BsPeople className="text-2xl sm:text-3xl flex-shrink-0" />,
            title: "Contadores certificados",
            description: "Todo o nosso time de contadores possui registro no CRC."
          },
          {
            icon: <FaChartLine className="text-2xl sm:text-3xl flex-shrink-0" />,
            title: "Otimização tributária",
            description: "Mantemos seu CNPJ regularizado e pagando o mínimo de impostos."
          },
          {
            icon: <FaEnvelopeOpenText className="text-2xl sm:text-3xl flex-shrink-0" />,
            title: "Vários canais de atendimento",
            description: "Atendimento via WhatsApp, telefone, chat e e-mail."
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex items-start gap-4 p-4 sm:p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            {item.icon}
            <div>
              <h4 className="font-bold mb-2 text-base sm:text-lg">{item.title}</h4>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Botão CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-12 sm:mt-16 text-center"
      >
        <button className="bg-cyan-400 hover:bg-cyan-500 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-base sm:text-lg" onClick={() => window.open(`https://api.whatsapp.com/send?phone=${import.meta.env.VITE_APP_WHATSAPP_NUMBER}&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Simplizei.`, '_blank')}>
          Fale com um especialista
        </button>
      </motion.div>
    </section>
  );
};

export default AberturaCnpjSection;