import React from 'react';
import DOMPurify from 'dompurify';
const BannerAbraEmpresa = ({ texts = { title: '', description: '', image: '' }, buttons = [] }) => {

  const SafeHtmlRenderer = ({ html, wrapperTag = 'div', ...props }) => {
    const Wrapper = wrapperTag;

    if (!html) return null;

    const cleanHtml = DOMPurify.sanitize(html, {
      ALLOWED_TAGS: ['p', 'span', 'strong', 'em', 'a', 'br', 'ul', 'ol', 'li'],
      ALLOWED_ATTR: ['href', 'target', 'rel']
    });

    return <Wrapper {...props} dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
  };

  var textos = {
    title: 'Abra sua empresa online e aproveite vantagens que vão além da contabilidade.',
    description: 'Somos líderes e especialistas em abertura de empresas e gest o de contabilidade eficiente. Mais de 70 mil profissionais em todo o Brasil j  confiam na Simplizei.',
    button: 'Abra sua empresa grátis',
    image: '/assets/img/room_simplizei.jpeg'
  };

  if (texts.title.length > 0) {
    textos.title = texts.title;
  }
  if (texts.description.length > 0) {
    textos.description = texts.description ? <SafeHtmlRenderer html={texts.description} className="content" /> : textos.description;
  }
  if (texts.image.length > 0) {
    textos.image = texts.image;
  }

  return (
    <section className="relative overflow-hidden bg-white mb-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 mx-auto">
        {/* Texto e Botões */}
        <div className="z-10 p-10">
          <h1 className="siteTitulo">
            {textos.title}
          </h1>
          <div style={{ width: '100%', padding: '0.5rem 0' }}>
            <hr style={{
              height: '1px',
              border: 'none',
              background: 'linear-gradient(90deg, #6dd5ed, #0318909a)',
              margin: '0'
            }} />
          </div>
          <div className="mt-2 text-slate-600 text-sm max-w-xl">
            {textos.description}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            {buttons.length > 0 && buttons.map((button, index) => (
              <button key={index} className={`bg-${button.color} text-${button.textColor} text-sm font-semibold py-3 px-6 rounded-full hover:bg-${button.hoverColor} transition shadow-md`} onClick={button.onClick}>
                {button.text}
              </button>
            )) || (
                <>
                  <button className="bg-cyan-400 text-white text-sm font-semibold py-3 px-6 rounded-full hover:bg-cyan-500 transition shadow-md" onClick={() => window.open(`/cadastrar`, '_self')}>
                    Abra sua empresa grátis
                  </button>
                  <button className="border-2 border-cyan-600 text-cyan-600 font-semibold lg:py-3 lg:px-6 px-2 py-1 text-sm rounded-full hover:bg-cyan-50 transition" onClick={() => window.open(`https://api.whatsapp.com/send?phone=${import.meta.env.VITE_APP_WHATSAPP_NUMBER}&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Simplizei.`, '_blank')}>
                    Fale com um especialista
                  </button>
                </>
              )
            }
          </div>
        </div>

        {/* Imagem com borda arredondada */}
        <div className="relative z-10">
          <div className="w-full lg:w-[80%] h-[450px] lg:rounded-l-[30%] overflow-hidden ml-auto">
            <img
              src={textos.image}
              alt="Profissionais da Simplizei"
              className="lg:rounded-l-[500px] w-full h-full object-cover object-top object-left"
              loading="lazy"
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default BannerAbraEmpresa;
