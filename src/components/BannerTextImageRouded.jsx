const BannerTextImageRounded = ({ title, subTitle, backgroundColor, backgroundImage, textColor, buttons = [] }) => {
    return (
        <section className={`relative h-[470px] md:h-[470px] overflow-hidden ${backgroundColor || 'bg-white'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 mx-auto">
                {/* Texto e Botões */}
                <div className="z-10 p-10">
                    <h1 className={`text-3xl md:text-4xl ${textColor || 'text-blue-900'}`}>
                        {title || `Abra sua empresa online e tenha benefícios que vão além da contabilidade.`}
                    </h1>
                    <div style={{ width: '100%', padding: '0.5rem 0' }}>
                        <hr style={{
                            height: '1px',
                            border: 'none',
                            background: 'linear-gradient(90deg, #6dd5ed, #0318909a)',
                            margin: '0'
                        }} />
                    </div>
                    <p className={`mt-2 text-slate-600 text-lg max-w-xl ${textColor || 'text-gray-600'}`}>
                        {subTitle || `Somos líderes e especialistas em abertura de empresas e gestão de
            contabilidade eficiente. Mais de 70 mil profissionais em todo o Brasil já confiam na Simplizei.`}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        {buttons.map((button, index) => (
                            <button key={index} className={`${button.class} ${button.classHover} font-semibold py-3 px-6 rounded-full transition shadow-md`} onClick={button.onClick}>
                                {button.text}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Imagem com borda arredondada */}
                <div className="relative z-10 hidden lg:block">
                    <div className="w-[600px] h-[450px] rounded-l-[30%] overflow-hidden ml-auto">
                        <img
                            src={backgroundImage || "/assets/img/place2.jpg"}
                            alt="Profissionais da Simplizei"
                            className="rounded-l-[500px] w-full h-full object-cover object-top"
                            lazyLoading="lazy"
                        />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default BannerTextImageRounded;
