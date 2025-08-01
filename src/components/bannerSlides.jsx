import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cards = [
  {
    ano: "2020",
    texto: "Conquistamos 30.000 clientes e passamos a oferecer conta bancária digital em parceria com uma instituição financeira.",
  },
  {
    ano: "2021",
    texto: "Passamos a oferecer plano de saúde para PJ, fundamos o Simplizei.bank e criamos o plano Experts, para atender clientes com necessidades específicas, com apoio de um assessor.",
  },
  {
    ano: "2022",
    texto: "Atingimos o marco de 50.000 clientes na Simplizei e lançamos a nossa solução de Escritório Virtual.",
  },
  {
    ano: "2023",
    texto: "Expandimos a nossa atuação para Brasília. Passamos a apoiar microempreendedores que queriam dar um próximo passo para tornarem suas empresas uma ME.",
  },
];

const BannerSlides = () => {
  const [slideAtual, setSlideAtual] = useState(1);
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (index) => setSlideAtual((index % cards.length) + 1),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 340,
        settings: { slidesToShow: 1, centerMode: true, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section className="bg-[#002D74] text-white pt-16 pb-10 px-6 md:px-20 relative" style={{ marginBottom: "200px" }}>
      {/* Título e Descrição */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Nós revolucionamos a contabilidade no Brasil.
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-4">
            Ao abrir sua empresa, Vítor Torres percebeu o quanto serviços de
            contabilidade eram burocráticos...
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            Surge, então, a Simplizei. Investindo em segurança...
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <img
              src="/assets/img/1.jpeg" // Substitua pelo caminho correto da imagem
              alt="Fulano da Silva"
              className="rounded-full border-4 border-white 
             w-48 h-48          /* Mobile (default) */
             md:w-48 md:h-48     /* md:768px */
             lg:w-64 lg:h-64    /* lg:1024px */
             xl:w-80 xl:h-80    /* xl:1280px */
             2xl:w-96 2xl:h-96  /* 2xl:1536px */
             object-cover
             transition-all duration-300 ease-in-out"
            />
            <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 bg-blue-900 text-white text-xs px-3 py-1 rounded text-center">
              <p className="font-semibold">Fulano da Silva</p>
            </div>
          </div>
        </div>
      </div>

      {/* Título Linha do Tempo */}
      <h3 className="text-white text-xl md:text-2xl font-semibold text-center mt-16 mb-4">
        Conheça nossa história de sucesso ao longo destes 10 anos
      </h3>

      {/* Contador + Arrows */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="bg-white text-[#002D74] w-8 h-8 rounded-full flex items-center justify-center shadow"
          aria-label="Anterior"
        >
          &lt;
        </button>
        <span className="bg-white text-[#002D74] px-5 py-1 rounded-full font-semibold text-sm">
          {slideAtual}/{cards.length}
        </span>
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="bg-white text-[#002D74] w-8 h-8 rounded-full flex items-center justify-center shadow"
          aria-label="Próximo"
        >
          &gt;
        </button>
      </div>

      {/* Carrossel */}
      <div className="max-w-7xl mx-auto h-[200px] w-full" style={{ position: "absolute", bottom: "-160px", left: "50%", transform: "translateX(-50%)", overflow: "hidden" }}>
        <Slider {...settings} ref={sliderRef}>
          {cards.map((card, index) => (
            <div key={index} className="px-2 md:px-3">
              <div className="bg-white text-gray-600 rounded-2xl shadow-md p-4 sm:p-5 transition-all duration-300 hover:shadow-lg
                      w-[90vw] sm:w-[250px] md:w-[280px] lg:w-[320px] xl:w-[360px] 
                      min-h-[160px] sm:min-h-[200px] md:min-h-[150px] flex flex-col">
                <h4 className="text-base text-blue-900 sm:text-lg md:text-xl font-semibold mb-2">
                  {card.ano}
                </h4>
                <p className="text-xs sm:text-sm md:text-[0.85rem] leading-snug text-ellipsis overflow-hidden">
                  {card.texto}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Botão final */}
      <div className="flex justify-center mt-10">
        <button className="bg-cyan-400 hover:bg-cyan-500 text-white font-semibold px-6 py-2 rounded-full transition">
          Fale com um especialista
        </button>
      </div>
    </section>
  );
};

export default BannerSlides;
