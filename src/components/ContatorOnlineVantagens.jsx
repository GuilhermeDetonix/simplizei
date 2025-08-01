import '../styles/ContadorOnlineVantagens.css';

const ContadorOnlineVantagens = () => {
  return (
    <section className="contador-section">
      <h1 className="siteTitulo text-center mb-8">
        Tenha as vantagens do contador online <br className="mobile-break" />
        com abertura de empresa grátis.
      </h1>

      <div className="conteudo w-full mx-auto flex flex-col md:flex-col items-center justify-between">
        <div className="imagem-container md:w-full flex items-center justify-center mr-0 lg:mr-20 md:mr-10">
          <img
            src="/assets/img/mulher4.jpeg"
            alt="Vanda - Contadora Certificada"
            className="imagem-perfil"
          />
          <div className="cracha">
            <p>Vanda</p>
          </div>
        </div>

        <div className="texto-descritivo md:w-full">
          <p className="paragrafo">
            Você já parou para pensar nos benefícios que um contador online vai trazer para você e sua empresa?
            É uma forma acessível e simplificada de cuidar da rotina do seu negócio.
          </p>
          <p className="paragrafo">
            Com Simplizei, as obrigações contábeis da sua empresa ficam sempre em dia e em segurança.
            Nosso time de contadores certificados apoiará você em todas as rotinas.
          </p>
          <p className="paragrafo">
            Conte com a gente para simplificar a contabilidade para você! Temos um plano pensado para cada perfil de negócio.
          </p>

          <button className="botao-cta mt-10 mx-auto flex sm:mx-0 md:justify-self-start" onClick={() => window.open(`/cadastrar`, '_self')}>
            Abra sua empresa grátis
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContadorOnlineVantagens;
