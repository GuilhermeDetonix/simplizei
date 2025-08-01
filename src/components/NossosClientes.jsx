import { useRef, useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const cards = [
  {
    title: "Conta bancária digital PJ",
    text: "No Simplizei, sua conta PJ é gratuita e integrada à contabilidade da sua empresa. Você conta ainda com Pix ilimitados e sem tarifas.",
    image: "/assets/img/mulher1.png",
  },
  {
    title: "Emissor e importador de notas fiscais",
    text: "Com o nosso emissor e importador gratuito de notas fiscais é possível replicar as notas que são recorrentes com apenas um clique.",
    image: "/assets/img/mulher4.png",
  },
  {
    title: "Plano de saúde para PJ",
    text: "Condições exclusivas e as melhores opções de planos e operadoras de saúde do país, além de planos para 1 pessoa.",
    image: "/assets/img/mulher3.png",
  },
  {
    title: "Cobrança online de clientes",
    text: "Parcele seus produtos e serviços em até 12x para seus clientes e receba online, sem precisar utilizar maquininha ou ter um site.",
    image: "/assets/img/homem2.png",
  },
  {
    title: "Escritório Virtual da Simplizei",
    text: "Para quem, por segurança, não quer associar o endereço ao local comercial e quer passar mais credibilidade.",
    image: "/assets/img/mulher2.png",
  },
];

const CustomSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1536, // 2xl
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '40px'
        }
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '60px'
        }
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '30px'
        }
      }
    ],
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#f5f8fc]">
      <div className="mx-auto">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="siteTitulo font-bold text-blue-900">
            Simplificamos o dia a dia dos nossos clientes.
          </h2>
          <p className="text-gray-600 mt-3 mx-auto text-sm sm:text-base">
            Oferecemos diversas soluções aliadas à gestão da sua contabilidade.
          </p>

          {/* Custom navigation with slide count */}
          <div className="flex items-center justify-center mt-6 gap-4">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="p-2 hover:bg-blue-100 rounded-full transition focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="text-blue-700 w-6 h-6" />
            </button>

            <span className="text-blue-900 font-semibold text-base sm:text-lg">
              <span className="sr-only">Slide</span> {(currentSlide % cards.length) + 1} / <span className="sr-only">de</span> {cards.length}
            </span>

            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="p-2 hover:bg-blue-100 rounded-full transition focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Próximo slide"
            >
              <ChevronRight className="text-blue-700 w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="px-2 sm:px-4" style={{ height: "500px", overflow: "hidden" }}>
          <Slider ref={sliderRef} {...settings} style={{ maxHeight: '500px', whitespace: 'nowrap' }}>
            {cards.map((card, index) => (
              <div key={index} className="px-2 sm:px-3 lg:min-w-[280px] focus:outline-none relative overflow-hidden">
                <div className="bg-white rounded-xl relative shadow-md hover:shadow-lg transition-shadow h-[400px] p-6 flex flex-col overflow-hidden w-full">
                  <div className="flex-grow">
                    <h3 className="text-blue-900 font-semibold text-lg md:text-xl h-[70px]">{card.title}</h3>
                    <p className="text-gray-700 mt-2 smallText">{card.text}</p>
                  </div>
                  {card.image && (
                    <div className="flex items-center justify-center h-[220px] lg:h-[190px] absolute bottom-0 left-0 right-0 rounded-b-xl">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="object-contain max-h-full max-w-full"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center mt-10 gap-4 flex-wrap">
          <button className="bg-cyan-400 hover:bg-cyan-500 text-white py-2 px-6 sm:px-8 rounded-full font-semibold text-sm sm:text-base transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2" onClick={() => window.open(`/como-funciona-a-simplizei`, '_self')}>
            Saiba como funciona
          </button>
          <button className="border border-blue-700 text-blue-700 hover:bg-blue-50 py-2 px-6 sm:px-8 rounded-full font-semibold text-sm sm:text-base transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={() => window.open(`/planos-simplizei`, '_self')}>
            Saiba quanto custa
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomSlider;