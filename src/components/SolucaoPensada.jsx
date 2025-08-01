import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Zap, CreditCard, Globe } from 'lucide-react';

const items = [
    {
        title: 'Integração automática com a contabilidade',
        description: 'Envie as informações financeiras automaticamente, sem que você precise enviar extratos bancários todo mês.',
        image: '/assets/img/smarthphone.png',
    },
    {
        title: 'Abertura de conta mais rápida',
        description: 'Temos os documentos da sua empresa em primeira mão, deixando sua conta pronta para receber mais rápido.',
        image: '/assets/img/_app2.png',
    },
    {
        title: 'Pague o mínimo de impostos',
        description: 'Receber valores da empresa na conta PF cria o risco de tributação como pessoa física de até 27,5%.',
        image: '/assets/img/_app4.png',
    },
    {
        title: 'Débito automático de impostos e da mensalidade',
        description: 'O débito automático deixa sua rotina mais prática. Pagamentos em dia e sua empresa sem multas.',
        image: '/assets/img/_app3.png',
    },
    {
        title: 'Receba pagamentos do exterior',
        description: 'Receba do exterior com segurança, direto na sua conta PJ.',
        image: '/assets/img/_app1.png',
    },
];

var icones = [
    {
        text: "Realize Pix gratuitos e ilimitados",
        icon: "/assets/icons/2974638.png"
    },
    {
        text: "Efetue até 10 TED gratuitos por mês",
        icon: "/assets/icons/4500824.png"
    },
    {
        text: "Faça saques nas redes credenciadas",
        icon: "/assets/icons/5776691.png"
    }
]

const CarrouselSolucoes = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const containerRef = useRef(null);

    const itemsPerView = {
        mobile: 1,
        tablet: 2,
        desktop: 3
    };

    const getItemsPerView = () => {
        if (typeof window === 'undefined') return itemsPerView.desktop;
        if (window.innerWidth < 640) return itemsPerView.mobile;
        if (window.innerWidth < 1024) return itemsPerView.tablet;
        return itemsPerView.desktop;
    };

    const [itemsVisible, setItemsVisible] = useState(getItemsPerView());

    React.useEffect(() => {
        const handleResize = () => {
            setItemsVisible(getItemsPerView());
            setCurrentSlide(0); // Reset slide on resize
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxSlide = items.length - 1;

    const nextSlide = () => {
        setCurrentSlide(prev => prev >= maxSlide ? 0 : prev + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(prev => prev <= 0 ? maxSlide : prev - 1);
    };

    // Mouse drag handlers
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
        containerRef.current.style.cursor = 'grabbing';
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        if (containerRef.current) {
            containerRef.current.style.cursor = 'grab';
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        if (containerRef.current) {
            containerRef.current.style.cursor = 'grab';
        }
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        const threshold = 50; // Minimum drag distance to trigger slide change

        if (Math.abs(walk) > threshold) {
            if (walk > 0) {
                prevSlide();
            } else {
                nextSlide();
            }
            setIsDragging(false);
            containerRef.current.style.cursor = 'grab';
        }
    };

    const translateX = -(currentSlide * (100 / itemsVisible));

    return (
        <section className="w-full bg-gradient-to-b from-white to-blue-50 py-12 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="siteTitulo bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mb-6">
                        Soluções pensadas para simplificar o seu dia a dia
                    </h2>
                    <p className="text-gray-600 siteSubTitulo mx-auto leading-relaxed">
                        Conheça as vantagens exclusivas da nossa conta PJ desenvolvida para otimizar sua gestão financeira
                    </p>
                </div>

                {/* Carousel Section */}
                <div className="mb-16 lg:w-3/4 mx-auto">
                    {/* Navigation Header */}
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl lg:text-2xl font-bold text-blue-900">
                            Principais benefícios
                        </h3>

                        {/* Navigation Controls */}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={prevSlide}
                                className="p-3 bg-white rounded-full hover:bg-blue-50 transition-all duration-300 shadow-lg border border-blue-100 group"
                                aria-label="Slide anterior"
                            >
                                <ChevronLeft className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
                            </button>

                            <button
                                onClick={nextSlide}
                                className="p-3 bg-white rounded-full hover:bg-blue-50 transition-all duration-300 shadow-lg border border-blue-100 group"
                                aria-label="Próximo slide"
                            >
                                <ChevronRight className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
                            </button>
                        </div>
                    </div>

                    {/* Carousel Container */}
                    <div
                        className="overflow-hidden rounded-2xl cursor-grab select-none"
                        ref={containerRef}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                    >
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(${translateX}%)` }}
                        >
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 px-3 mb-4 min-w-[250px]"
                                    style={{ width: `${100 / itemsVisible}%` }}
                                >
                                    <div className={`bg-gradient-to-br backdrop-blur-sm max-w-[250px] rounded-2xl shadow-lg hover:shadow-xl p-3 h-96 flex flex-col items-center text-center border border-white/50 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2 group pointer-events-none relative overflow-hidden`}>
                                        <h3 className="text-l font-bold text-blue-900 mb-4 line-clamp-2 group-hover:text-blue-700 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-700 text-xs leading-relaxed line-clamp-4 flex-grow">
                                            {item.description}
                                        </p>
                                        <div className="mb-6 h-[350px] w-[95%] lg:w-[350px] transform translate-y-[100px] lg:traslate-y-[10px] transition-transform duration-300 absolute bottom-[-40px] lg:bottom-[-40px] overflow-hidden bg-blue-100 rounded-[60%]">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-[80%] sm:transform translate-y-[20px] lg:translate-y-[60px] lg:w-1/2 h-[250px] lg:h-[170px] mx-auto object-cover mt-4 rounded-t-[30%] transition-transform duration-300 transform"
                                                style={{ objectPosition: 'top' }}
                                                draggable={false}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Progress Indicators */}
                    <div className="flex justify-center mt-8 gap-2">
                        {items.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                    ? 'bg-blue-600 w-8'
                                    : 'bg-blue-200 hover:bg-blue-300'
                                    }`}
                                aria-label={`Ir para slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Additional Benefits */}
                <div className="mb-12">
                    <h3 className="siteTitulo text-center mb-10">
                        Confira outras vantagens da nossa conta
                    </h3>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-4xl mx-auto">
                        {icones.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center gap-4 group hover:scale-105 transition-transform duration-300"
                            >
                                <div className="p-4 bg-white rounded-full shadow-lg border-2 border-gray-100 group-hover:border-blue-200 transition-colors duration-300">
                                    <img src={item.icon} alt={item.title} className="w-12 h-12" />
                                </div>
                                <p className="text-sm text-blue-900 text-center max-w-xs leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center p-8 md:p-12 bg-gradient-to-t from-blue-50 to-white rounded-2xl">
                    <button className="bg-white text-blue-600 px-10 py-4 rounded-2xl text-lg font-bold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105" onClick={() => window.open(`/abrir-empresa`, '_self')}
                    >
                        ABRA SUA CONTA PJ GRÁTIS
                    </button>
                    <p className="text-blue-900 mt-4 text-base font-medium">
                        Abertura 100% online e sem taxas
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CarrouselSolucoes;