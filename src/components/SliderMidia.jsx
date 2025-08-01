import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const noticias = [
  {
    data: '17/06/2025',
    titulo: 'Abertura de empresas de saúde cresce 51% no primeiro trimestre',
    resumo: 'As profissões de saúde obrigadas a emitir recibo digital via Receita Saúde cresceram 51% no...',
    fonte: 'Veja Negócios',
    imagem: "/assets/img/assessContabil2.png"
  },
  {
    data: '20/06/2025',
    titulo: 'Sua MEI ultrapassou o teto? Como mudar para Simples Nacional e evitar multa',
    resumo: 'O total de Microempreendedores Individuais (MEIs) que foram...',
    fonte: 'UOL',
    imagem: "/assets/img/mei.png"
  },
  {
    data: '13/06/2025',
    titulo: 'Pix Automático: como a novidade impacta micro e pequenas empresas',
    resumo: 'A chegada do Pix no governo Bolsonaro mudou a realidade de muitas empresas e a vida de...',
    fonte: 'Terra',
    imagem: "/assets/img/pix_automatico.png"
  },
  {
    data: '16/06/2025',
    titulo: 'Pix passa a ter a modalidade automática',
    resumo: 'Eduardo de Freitas, contador, fala mais sobre o tema. Confira a matéria completa.',
    fonte: 'Globoplay',
    imagem: "/assets/img/pix.png"
  },
  {
    data: '23/05/2025',
    titulo: 'Contabilidade do MEI e dos empreendedores no final da declaração do Imposto de Renda',
    resumo: 'À medida que nos aproximamos do prazo final da declaração do Imposto de Renda...',
    fonte: 'G1',
    imagem: "/assets/img/contadora.png"
  }
];

const SliderMidia = () => {
  const sliderRef = useRef(null);
  const [slideAtual, setSlideAtual] = useState(1);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    slidesPerRow: 1,
    height: 700,
    afterChange: (index) => setSlideAtual(index + 1),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesPerRow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesPerRow: 1 },
      },
    ],
  };

  return (
    <section className="bg-white text-center py-5">
      <h2 className="text-blue-900 mb-12 font-bold text-base sm:text-6xl md:text-3xl">
        Simplizei na mídia.
      </h2>

      {/* Contador + Arrows */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="bg-white text-[#002D74] w-8 h-8 rounded-full flex items-center justify-center shadow"
          aria-label="Anterior"
        >
          <ChevronLeft />
        </button>
        <span className="bg-white text-[#002D74] px-5 py-1 rounded-full font-semibold text-sm">
          {slideAtual}/{noticias.length}
        </span>
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="bg-white text-[#002D74] w-8 h-8 rounded-full flex items-center justify-center shadow"
          aria-label="Próximo"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Slider */}
      <div className="px-4" style={{ maxHeight: '600px', margin: '0 auto', overflow: 'hidden' }}>
        <Slider {...settings} ref={sliderRef}>
          {noticias.map((noticia, i) => (
            <div
              key={i}
              className="px-2 relative"
            >
              <div className="w-full bg-white rounded-xl shadow-lg text-left h-auto">
                <img
                  src={noticia.imagem}
                  alt={noticia.titulo}
                  className="rounded-t-xl h-80 w-full object-cover object-center"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-1">{noticia.data}</p>
                  <h3 className="text-blue-800 font-semibold text-sm leading-tight mb-1 h-[50px]">
                    {noticia.titulo}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 h-[100px]">{noticia.resumo}</p>
                  {/* <p className="text-sm text-blue-700 hover:underline cursor-pointer absolute bottom-[10px]">
                    Saiba mais
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* <button className="mt-8 border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50">
        Confira todas as notícias
      </button> */}
    </section>
  );
};

export default SliderMidia;
