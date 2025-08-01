import Header from '../components/Header';
import Footer from '../components/Footer';

import BannerContadorOnlineHead from '../components/ContadorOnlineBannerHead';
import TimelineSection from '../components/TimeLineSection';
import CardsWithIcons from '../components/CardsWithIcons';
import StaticCardsWithButtons from '../components/StaticCardsWithButtons';
import TextWithCard from '../components/TextWithCard';
import CardsWithImageButtons from '../components/CardsWithImageButtons';
import FAQSection from '../components/FAQSection';
import CTA from '../components/CTA';
import ContactModal from '../components/ContactModalSite';


function CertificadoDigital() {

    let timeLine = [
        {
            title: 'Cadastro e compra',
            text: 'Faça o cadastro no site da Soluti e insira o cupom de desconto, exclusivo para cliente Simplizei.',
        },
        {
            title: 'Agende a validação',
            text: 'Escolha a data e horário de sua preferência para fazer a validação presencial do certificado digital A1.',
        },
        {
            title: 'Validação presencial',
            text: 'Vá na certificadora, levando os documentos solicitados, para validar. Essa etapa deve ser cumprida pelo sócio administrador.',
        },
        {
            title: 'Upload na plataforma',
            text: 'Pronto! Acesse a plataforma da Simplizei e faça o upload do seu certificado digital A1.',
        }
    ];

    let cardsIcons = [
        {
            title: "O que é certificado digital",
            desc: "É um arquivo digital que funciona como uma assinatura virtual da sua empresa e atesta a veracidade de transações e processos.",
            icon: "/assets/icons/3227027.png",
        },
        {
            title: "Por que você precisa",
            desc: "Traz maior segurança para suas informações, garante a entrega das obrigações do eSocial e permite acesso a funcionalidades exclusivas.",
            icon: "/assets/icons/7928577.png",
        },
        {
            title: "Modelo aceito e funcionalidades",
            desc: "Você precisa ter o modelo e-CNPJ A1, que servirá para emissão de notas fiscais, contratos, declarações e acesso a serviços da Receita Federal e outros.",
            icon: "/assets/icons/6785419.png",
        },
    ]
    let ButtonsCardsIcons = [
        {
            classes: 'bg-cyan-500 hover:bg-cyan-600 text-white',
            text: 'Planos com certificado gratuito',
            onClick: () => {
                window.location.href = '/planos-simplizei'
            }
        }
    ]

    var faqs = [
        {
            question: "Posso comprar o certificado em qualquer certificadora?",
            answer: `Sim. Você tem desconto na Soluti caso contrate nosso plano de contabilidade, mas pode comprar o certificado em qualquer outra certificadora para ser cliente Simplizei.`
        },
        {
            question: "Já tenho um certificado, mas de outro modelo. Posso utilizá-lo?",
            answer: `Não. Para ser cliente Simplizei, você precisa ter o certificado e-CNPJ A1 para computador. Os outros modelos não se enquadram nas nossas normas.`
        },
        {
            question: "A Simplizei é confiável?",
            answer: "Sim. Há mais de 10 anos nós unimos tecnologia de ponta à nossa experiência contábil para simplificar a vida de quem empreende no Brasil. Somos a maior equipe de contadores certificados do Brasil e contamos com um time de mais de mil especialistas prontos para cuidar da sua contabilidade. Confira mais detalhes sobre como é o nosso processo de trabalho e como a Simplizei vai cuidar da sua contabilidade."
        },
        {
            question: "A Simplizei tem contadores de verdade?",
            answer: "Sim! Somos o maior escritório de contabilidade do Brasil e temos muitos contadores trabalhando com a gente. Eles são os responsáveis por acompanhar e garantir toda rotina contábil da sua empresa para que ela esteja sempre em dia com as obrigações do governo."
        },
    ];

    return (
        <div className="bg-white text-gray-800 font-lato md:max-w-[1300px] lg:w-[80vw] mx-auto md:px-4">
            <Header />
            <main>
                <BannerContadorOnlineHead
                    titulo="Certificado digital para maior segurança na sua contabilidade"
                    descricao="Todos os clientes da Simplizei precisam ter um certificado digital A1. Isso traz mais confiança para a sua gestão contábil e muitas facilidades para o seu dia a dia."
                    buttons={[
                        { classes: 'bg-cyan-500 hover:bg-cyan-600 text-white', text: 'Como funciona', link: '/abrir-empresa' },
                        { classes: 'bg-white hover:bg-white-600 text-blue-900', text: 'Planos com certificado', link: '/planos-simplizei' },
                    ]}
                />
                <CardsWithIcons
                    lista={cardsIcons}
                    buttons={ButtonsCardsIcons}
                />
                <StaticCardsWithButtons />
                <TextWithCard />
                <TimelineSection
                    titulo={(<>Confira o passo a passo para obter<br /> o certificado digital com desconto.</>)}
                    points={timeLine}
                    buttons={[
                        { classes: 'bg-cyan-500 hover:bg-cyan-600 text-white', text: 'Abra sua empresa', link: '/abrir-empresa' },
                        { classes: 'bg-white-200 hover:bg-white-600 text-blue-900 border-2 border-blue-900', text: 'Troque de contador', link: '/trocar-de-contador' },
                    ]}
                />
                <CardsWithImageButtons />
                <FAQSection 
                    questions={faqs}    
                />
                <CTA />
                <ContactModal />
            </main>
            <Footer />
        </div>
    );
}

export default CertificadoDigital;