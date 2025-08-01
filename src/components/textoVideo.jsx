const TextoVideo = () => {
  return (
    <section className="bg-[#f5f9ff] text-[#002D74] py-16 px-4 md:px-20">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        Conheça um pouco mais sobre a Simplizei<span className="text-cyan-500">.</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Citação */}
        <div className="bg-white rounded-xl shadow-md p-6 text-base leading-relaxed">
          <p className="mb-6">
            “Garantimos que a empresa do nosso cliente esteja sempre em dia,
            simplificando assim a sua jornada como empreendedor e garantindo o seu crescimento.”
          </p>
          <p className="font-bold">Raimundo</p>
          <p className="text-sm mt-1">
            Contador responsável e técnico da Simplizei<br />
            CRC PR-045113/O-7
          </p>
        </div>

        {/* Vídeo */}
        <div className="rounded-xl overflow-hidden shadow-md">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/_VIDEO_ID_" // Substitua pelo ID correto
            title="Conheça a Simplizei"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-[315px] rounded-xl"
          ></iframe>
        </div>
      </div>

      {/* Botões */}
      <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">
        <button className="bg-cyan-400 hover:bg-cyan-500 text-white font-semibold px-6 py-2 rounded-full transition">
          Abra sua empresa grátis
        </button>
        <button className="border border-[#002D74] hover:bg-gray-100 text-[#002D74] font-semibold px-6 py-2 rounded-full transition" onClick={() => window.open(`/trocar-de-contador`, '_self')}>
          Troque de contador
        </button>
      </div>
    </section>
  );
};

export default TextoVideo;
