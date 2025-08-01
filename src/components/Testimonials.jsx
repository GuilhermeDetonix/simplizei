import React, { useEffect, useRef } from 'react';
import '../styles/miniCardsInfinitSlide.css';

const Testimonials = ({testemunhos = [], button = []}) => {
  const trackRef = useRef(null);
  var testimonials = [
    {
      name: "Felipe Bernardo Ferreira",
      role: "Arquiteto e cliente desde 2021",
      image: "./assets/img/1.jpeg",
      quote: "\"A Simplizei me deu a liberdade de focar no meu negócio. Agora, eu tenho mais tempo para criar e inovar.\""
    },
    {
      name: "Ana Luisa Chagas de Oliveira",
      role: "Médica e cliente desde 2017",
      image: "./assets/img/6.jpeg",
      quote: "\"Abertura de empresa foi fácil e prática, tudo online. Atendimento excelente por e-mail e videochamada.\""
    },
    {
      name: "Vitor de Sousa",
      role: "Consultor e cliente desde 2022",
      image: "./assets/img/2.jpeg",
      quote: "\"Eu não preciso me preocupar com a parte burocrática de ser PJ porque a Simplizei cuida disso para mim.\""
    },
    {
      name: "Bruna Ricci",
      role: "Analista administrativa",
      image: "./assets/img/6.jpeg",
      quote: "\"A abertura da minha empresa foi simples, online e com um atendimento completo e humano. A Simplizei foi incrível em me apoiar em todo o processo.\""
    }
  ];

  if (testemunhos.length > 0) {
    testimonials = testemunhos
  }

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const firstHalf = track.querySelector('.slide-track');
    const clone = firstHalf.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
  }, []);

  return (
    <section className="py-8 px-0 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="container mx-auto">
        <div className="relative overflow-hidden">
          <div ref={trackRef} className="slide-wrapper group">
            <div className="slide-track">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="testimonial-card group-hover:paused"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-blue-900 truncate">{testimonial.name}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="smallText leading-relaxed break-words whitespace-normal">{testimonial.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center space-x-4">
          <button className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-2 rounded-full font-semibold" onClick={() => window.open('/cadastrar', '_self')}>
            Abrir empresa grátis
          </button>
          <button className="border border-blue-700 text-blue-700 px-6 py-2 rounded-full font-semibold" onClick={() => window.open('/trocar-de-contador', '_self')}>
            Troque de contador
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
