const AboutSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-blue-900 text-center text-2xl titulo mb-12">
        Muito mais do que uma <br />contabilidade online.
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 max-w-xl">
          <p className="text-sm text-gray-800 mb-4 leading-relaxed">
            A Simplizei é a maior e mais completa contabilidade online do Brasil. Com soluções integradas e exclusivas, você
            encontra tudo o que precisa em um só lugar. Nossa equipe de contadores é especializada em abertura de empresas,
            gestão de CNPJs e muito mais. Somos líderes em abertura de empresas e em gestão de CNPJs e, desde 2018, 
            oferecemos uma das maiores contabilidades online no Brasil, para simplificar a vida de quem empreende e
            transformar a contabilidade do seu negócio.
          </p>
          <p className="text-sm text-gray-800 mb-4 leading-relaxed">
            Aqui, a <a href="/abrir-empresa" className="text-blue-700 underline hover:text-blue-800">abertura da sua empresa</a> é grátis e
            o serviço é online, simples e econômico.
          </p>
          <p className="text-sm text-gray-800 mb-4 leading-relaxed">
            Já são mais de 50 municípios atendidos e, se você procura um escritório com serviço de contabilidade em&nbsp;
            <a href="#" className="text-blue-700 underline hover:text-blue-800">São Paulo - SP</a>,
            verifique as condições especiais para a sua região.
          </p>
          <p className="text-sm text-gray-800 mb-6 leading-relaxed">
            A contabilidade online é a união da contabilidade com a tecnologia e a experiência dos mais de 80 contadores
            certificados da Simplizei.
          </p>
          <p className="text-sm text-gray-800 mb-8 leading-relaxed">
            Quer saber mais sobre como a Simplizei cuida da sua contabilidade?
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-cyan-400 text-white px-6 py-2 rounded-full font-semibold hover:bg-cyan-500 transition" onClick={() => window.open(`https://api.whatsapp.com/send?phone=${import.meta.env.VITE_APP_WHATSAPP_NUMBER}&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Simplizei.`, '_blank')}>
              Fale com um especialista
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 rounded-full border-10 border-blue-900 shadow-lg"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white">
              <img src="./assets/img/2.jpeg" alt="Charles Gularte" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-blue-900 bg-opacity-90 text-white text-center text-xs px-3 py-1 rounded-md">
              CRC PR-045133/O-7
            </div>
          </div>

          <div className="mt-8 flex gap-10 text-center text-blue-900 font-semibold text-sm">
            <div>
              <div className="text-2xl">+1.200</div>
              especialistas
            </div>
            <div>
              <div className="text-2xl">+70.000</div>
              profissionais atendidos
            </div>
            <div>
              <div className="text-2xl">+50</div>
              cidades atendidas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;