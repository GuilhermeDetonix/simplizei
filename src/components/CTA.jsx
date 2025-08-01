const CTA = ({ title = '', subTitle = '', backgroundImage = '', backgroundColor = '', textColor = '' }) => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-8 bg-gradient-to-b from-white to-blue-100 overflow-hidden">
      <div className="max-w-xl lg:mr-12 mb-8 lg:mb-0 text-center lg:text-left px-8">
        <h1 className="text-4xl sm:text-3xl font-bold text-blue-900 siteTitulo leading-tight mb-6 text-center">
          {title.length > 0 ? title : 'A hora de investir no sucesso da sua empresa é agora!'}
        </h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          {subTitle.length > 0 || subTitle == '_' ? subTitle.replace('_', '') : 'Faça seu cadastro digital ou converse com um dos nossos especialistas em contabilidade.'}
        </p>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out" onClick={() => window.open('/abrir-empresa', '_self')}>
            Abra sua empresa
          </button>
          <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out" onClick={() => window.open(`https://api.whatsapp.com/send?phone=${import.meta.env.VITE_APP_WHATSAPP_NUMBER}&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Simplizei.`, '_blank')}>
            Fale com um especialista
          </button>
        </div>
      </div>
      <div className="relative flex-shrink-0 overflow-hidden">
        <img src={(backgroundImage.length > 0 ? backgroundImage : '/assets/img/mulheres.jpeg')} alt="Daniela Coragem - Experiência ao Cliente" className="rounded-l-[300px] w-full h-[500px] object-cover object-top" />
        <div className="absolute bottom-4 p-2 left-auto bg-white bg-opacity-80 rounded-lg shadow-md text-sm text-gray-800">
          <p className="font-semibold">Daniela Coragem</p>
          <p>Experiência ao Cliente</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;