import { useEffect, useRef, useState } from 'react';
import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BenefitsSlider = ({ title = '', subTitulo = '', textos = [] }) => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  const benefits = [
    {
      title: "Bancária PJ",
      description: "Conta integrada à empresa com Pix e sem tarifas.",
      image: "./assets/img/cnpj.png"
    },
    {
      title: "Benefícios",
      description: "Benefícios além da contabilidade: saúde, bem-estar e mais.",
      image: "./assets/img/beneficios.png"
    },
    {
      title: "Impostos",
      description: "Controle de obrigações e rotina fiscal de forma simples.",
      image: "./assets/img/impostos.png"
    },
    {
      title: "Cobrança online",
      description: "Venda com boleto ou Pix sem maquininha ou site.",
      image: "./assets/img/cobranca-online.webp"
    },
    {
      title: "Contabilidade completa",
      description: "Relatórios e apuração de impostos de forma automatizada.",
      image: "./assets/img/contabilidade.png"
    }
  ];

  useEffect(() => {
    setSlideCount(benefits.length);

    const timeout = setTimeout(() => {
      const $slider = $(sliderRef.current);
      if ($slider.length > 0 && !$slider.hasClass('slick-initialized')) {
        $slider.slick({
          arrows: false,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          draggable: true,
          swipe: true,
          responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } }
          ]
        });

        // Atualiza o slide atual quando muda
        $slider.on('afterChange', (event, slick, current) => {
          setCurrentSlide(current);
        });
      }
    }, 100);

    return () => {
      clearTimeout(timeout);
      const $slider = $(sliderRef.current);
      if ($slider.length > 0 && $slider.hasClass('slick-initialized')) {
        $slider.slick('unslick');
      }
    };
  }, []);

  const goToPrev = () => {
    $(sliderRef.current).slick('slickPrev');
  };

  const goToNext = () => {
    $(sliderRef.current).slick('slickNext');
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50 px-4">
      <div className="container mx-auto px-4 text-center md:max-w-[55vw]">
        <h2 className="text-2xl md:text-4xl siteTitulo font-bold mb-8 text-blue-900">
          {title && title.length > 0 ? title : `Escritório de contabilidade online feito para você.`}
        </h2>

        {/* Controles do slider */}
        <div className="flex justify-center items-center mb-6 gap-2">
          <button
            onClick={goToPrev}
            className="p-2 rounded-full bg-blue-200 hover:bg-blue-300"
            aria-label="Slide anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>

          {/* <span className="text-sm font-bold text-blue-900">
            {currentSlide + 1} / {slideCount}
          </span> */}

          <button
            onClick={goToNext}
            className="p-2 rounded-full bg-blue-200 hover:bg-blue-300"
            aria-label="Próximo slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div ref={sliderRef}>
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-left relative overflow-hidden max-w-[200px]">
              <h3 className="mb-2 text-blue-900 font-bold text-lg">{benefit.title}</h3>
              <p className="text-xs">{benefit.description}</p>
              <div>
                <img src={benefit.image} alt={benefit.title} className="absolute bottom-[-0.2rem] object-contain" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 space-x-4">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full font-semibold" onClick={() => window.open('/planos-simplizei', '_self')}>
            Ver planos
          </button>
          <button className="border border-blue-700 text-blue-700 px-6 py-2 rounded-full font-semibold" onClick={() => window.open('/login', '_self')}>
            Já tenho empresa
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSlider;