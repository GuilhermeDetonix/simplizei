const PricesComparation = () => {
  return (
    <section className="w-full px-4 py-12 md:px-12 bg-gradient-to-b from-gray-100 to-blue-50 rounded-[20px_20px_0_0]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#002f6d] mb-2">
          Por que a Simplizei é a melhor opção?
        </h2>
        <p className="text-gray-600 mb-10">
          Benefícios que vão além da contabilidade e estão inclusos no plano Multibenefícios e disponíveis para o plano Experts.
        </p>

        <div className="overflow-hidden rounded-xl border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 bg-gray-100 font-semibold text-[#002f6d]">
            <div className="p-4 text-left"> </div>
            <div className="p-4 text-center">Simplizei.</div>
            <div className="p-4 text-center">Média do mercado</div>
          </div>

          {[
            ['Abertura / consultoria e preparação', 'Zero', 'R$ 600 - R$ 1.200/ano'],
            ['Custos do certificado digital', 'Zero', 'R$ 400 - R$ 600/ano'],
            ['Consultas online com psicólogos e nutricionistas', 'Zero', 'R$ 2.500 - R$ 6.000/ano'],
            ['Conta PJ', 'Zero', 'R$ 200 - R$ 240/ano'],
            ['Mensalidade contabilidade', 'R$ 1.500 - R$ 4.500/ano', 'R$ 5.000 - R$ 6.000/ano'],
          ].map(([label, valueA, valueB], idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 md:grid-cols-3 border-t border-gray-200 hover:bg-blue-50 transition duration-200 ease-in-out`}
            >
              <div className="p-4 text-left text-sm md:text-base font-medium text-gray-700">
                {label}
              </div>
              <div className="p-4 text-center text-[#00b2e3] font-bold bg-blue-100">{valueA}</div>
              <div className="p-4 text-center text-gray-700">{valueB}</div>
            </div>
          ))}

          <div className="p-4 text-center text-sm text-[#0056b3] font-semibold bg-gray-200">
            Planos até 25% mais baratos que o mercado
          </div>
        </div>

        <div className="mt-8 rounded-xl bg-[#002f6d] text-white p-8">
          <p className="text-sm mb-1">Uma economia de até</p>
          <p className="text-3xl md:text-4xl font-bold text-[#00f0ff] mb-4">
            R$ 10.000 por ano*
          </p>
          <p className="text-sm md:text-base font-medium">
            Com o Multibenefícios você tem o plano de contabilidade que apoia a carreira que você escolheu e traz os benefícios que você merece.
          </p>
          <p className="text-xs mt-2 opacity-70">
            *Custos referentes aos serviços de contabilidade e consultas online
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricesComparation;
