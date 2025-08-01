import React from 'react';

const CallToActionSection = () => {
  return (
    <section className="w-full py-10 px-4 flex justify-center relative">
      <div className="bg-[#f8fbfe] rounded-xl shadow-md max-w-3xl w-full p-6 md:p-10 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 leading-snug mb-6">
          Quer abrir uma conta bancária PJ integrada à contabilidade <br className="hidden sm:inline" />
          da sua empresa, mas ainda não é cliente Simplizei?
        </h2>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button onClick={() => window.open(`/abrir-empresa`, '_self')}
            className="bg-cyan-300 hover:bg-cyan-400 text-sky-900 font-bold py-2.5 px-5 rounded-md shadow transition-all duration-200 text-sm md:text-base"
          >
            ABRA SUA EMPRESA GRÁTIS
          </button>
          <button
            className="border border-sky-900 hover:bg-sky-900 hover:text-white text-sky-900 font-bold py-2.5 px-5 rounded-md shadow transition-all duration-200 text-sm md:text-base"
            onClick={() => window.open(`/trocar-de-contador`, '_self')}
          >
            TROQUE DE CONTADOR
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;