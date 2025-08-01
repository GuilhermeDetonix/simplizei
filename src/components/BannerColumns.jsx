const BenefitsBanner = ({ textos = [] }) => {
  var texts = [
    {
      title: "Abertura de empresas",
      description: "Abrimos sua empresa em 2 horas, com o enquadramento correto para que o cliente pague somente o m nimo de impostos.",
      button: "Abra sua empresa",
      image: "/assets/icons/10307058.png"
    },
    {
      title: "Contabilidade",
      description: "Cuidamos de todo o processo cont bil, desde a abertura at  a gest o completa da contabilidade da sua empresa.",
      button: "Ver mais",
      image: "/assets/icons/3374620.png"
    },
    {
      title: "Presta o de contas",
      description: "Prestamos contas e realizamos auditoria para que o cliente esteja sempre em conformidade com a lei.",
      button: "Ver mais",
      image: "/assets/icons/14669997.png"
    }
  ];

  if (textos.length > 0) {
    texts = textos;
  }

  return (
    <div className="absolute transform -translate-y-1/3 bg-white shadow-xl rounded-xl px-3 sm:px-3 py-3 sm:py-3 max-w-6xl mx-auto w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] lg:w-[95%] relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        
        {/* Item 1 */}
        {texts.map(({ title, description, button, image }, index) => (
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-blue-50 rounded-lg transition-all hover:shadow-md" key={index}>
            <img 
              src={image} 
              alt={title} 
              className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0"
            />
            <div className="text-center sm:text-left">
              <h4 className="font-semibold text-blue-900 text-sm sm:text-base">{title}</h4>
              <p className="text-gray-700 text-xs sm:text-sm mt-1">
                {description}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default BenefitsBanner;