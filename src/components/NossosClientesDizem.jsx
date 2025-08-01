import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import YellowStar from "./YellowStar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
        name: "Engenharia",
        person: "Maria Eduarda de Souza",
        role: "Engenheira e cliente",
        since: "Simplizei desde 2023",
        text: `É bom ser cliente da Simplizei porque consigo controlar as finanças da minha empresa de maneira simples. A plataforma é acessível e eu acho tudo o que eu preciso de maneira fácil e prática. Todas às vezes que eu precisei de atendimento fui muito bem atendido, não tenho do que reclamar. Eu indico a Simplizei.`,
        image: "/assets/img/mulher3.jpeg",
    },
    {
        name: "Arquitetura",
        person: "Maria Lopes",
        role: "Arquiteta e cliente",
        since: "Simplizei desde 2022",
        text: `A Simplizei me dá liberdade para focar no que importa no meu negócio. Atendimento muito bom e prático.`,
        image: "/assets/img/mulher4.jpeg",
    },
    {
        name: "Medicina",
        person: "Dr. João Silva",
        role: "Médico e cliente",
        since: "Simplizei desde 2021",
        text: `Com a Simplizei, consigo organizar todos os meus tributos sem dor de cabeça. Total confiança no serviço.`,
        image: "/assets/img/homem_note.jpeg",
    },
];

const TestimonialsSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);

    const settings = {
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        beforeChange: (_, next) => setCurrentSlide(next),
        cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    };

    const handleTabClick = (index) => {
        sliderRef.current.slickGoTo(index);
        setCurrentSlide(index);
    };

    return (
        <section className="bg-gradient-to-b from-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-7xl mx-auto">
                {/* Cabeçalho */}
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-3">
                        Confira o que nossos clientes falam sobre nós.
                    </h2>
                    <h3 className="siteSubTitulo">Confira o que nossos clientes falam sobre nossos serviços</h3>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-4">
                        <div className="flex items-center gap-2">
                            Nossas avaliações feitas<br />por nossos clientes:
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/assets/img/reclame-aqui.svg" alt="RA1000" className="w-16 sm:w-20 h-auto" />
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/assets/img/google.svg" alt="Google" className="w-8 sm:w-10 h-auto" />
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <YellowStar key={i} className="w-4 h-4 sm:w-5 sm:h-5" />
                                ))}
                                <span className="text-sm sm:text-base text-gray-700 font-medium ml-1">4.6</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Carrossel */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* Controles */}
                    <div className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-200 px-4 sm:px-6">
                        <div className="flex space-x-2 sm:space-x-4 overflow-x-auto w-full sm:w-auto py-3 scrollbar-hide">
                            {testimonials.map((item, index) => (
                                <button
                                    key={index}
                                    className={`px-3 py-2 text-sm sm:text-base font-medium whitespace-nowrap transition-colors duration-200 ${index === currentSlide
                                        ? "text-blue-700 border-b-2 border-blue-700"
                                        : "text-gray-500 hover:text-blue-600"
                                        }`}
                                    onClick={() => handleTabClick(index)}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center space-x-2 py-3 sm:py-0">
                            <button
                                onClick={() => sliderRef.current.slickPrev()}
                                className="p-2 text-blue-700 hover:bg-blue-50 rounded-full transition-colors duration-200"
                                aria-label="Slide anterior"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <span className="text-sm sm:text-base text-blue-800 font-medium px-1">
                                {currentSlide + 1} / {testimonials.length}
                            </span>
                            <button
                                onClick={() => sliderRef.current.slickNext()}
                                className="p-2 text-blue-700 hover:bg-blue-50 rounded-full transition-colors duration-200"
                                aria-label="Próximo slide"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Slides */}
                    <div className="p-4 sm:p-6 lg:p-8">
                        <Slider ref={sliderRef} {...settings}>
                            {testimonials.map((item, index) => (
                                <div key={index} className="outline-none">
                                    <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
                                        {/* Imagem */}
                                        <div className="flex-shrink-0 w-full lg:w-auto">
                                            <div className="relative mx-auto lg:mx-0">
                                                <div className="flex justify-center"> {/* Container principal para centralização */}
                                                    <div className="rounded-full overflow-hidden w-32 h-32 sm:w-40 sm:h-40 border-4 border-white shadow-md mx-auto">
                                                        <img
                                                            src={item.image}
                                                            alt={item.person}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mt-4 text-center lg:text-left">
                                                    <h3 className="font-semibold text-lg text-blue-900 flex justify-center">{item.person}</h3>
                                                    <div className="text-xs sm:text-sm text-white bg-blue-800 px-3 py-1.5 inline-block mt-1.5 rounded-full">
                                                        {item.role} • {item.since}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Texto */}
                                        <div className="flex-1 mt-4 lg:mt-0">
                                            <blockquote className="text-gray-800 text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-loose italic px-2 sm:px-4 relative">
                                                <div className="absolute top-0 left-0 text-4xl text-blue-100 font-serif">“</div>
                                                <p className="pt-6 pb-2 pl-6 pr-2">
                                                    {item.text}
                                                </p>
                                                <div className="absolute bottom-0 right-0 text-4xl text-blue-100 font-serif">”</div>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>

                {/* CTA */}
                <div className="flex justify-center mt-10 sm:mt-12">
                    <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg" onClick={() => window.open(`/cadastrar`, '_self')}>
                        Abra sua empresa grátis
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSlider;