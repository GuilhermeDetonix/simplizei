import Header from '../components/Header';
import Footer from '../components/Footer';

import BenefitsBanner from '../components/BannerColumns';

import FAQSection from '../components/FAQSection.jsx';
import BannerTextsImageRounded from '../components/BannerTextsImageRounded.jsx';
import CTA from '../components/CTA.jsx';
import CardsWithIcons2 from '../components/CardsWithIcons2.jsx';
import SolucoesFinanceiras from '../components/CardsInLine.jsx';
import TaxaCartao from '../components/Card.jsx';
import ContactModal from '../components/ContactModalSite';


const CobrarCliente = () => {
    const buttonsBanner = [
        { text: 'Começar agora', class: 'bg-cyan-400', classHover: 'hover:bg-blue-600', onClick() { window.open(`/abrir-empresa`, '_self') } },
    ];
    var bannerTexts = [
        {
            title: "Cobrança online",
            description: "Receba dos clientes de forma online sem precisar ter maquininha ou site.",
            image: "/assets/icons/10185922.png"
        },
        {
            title: "Solução simples e intuitiva",
            description: "Em poucos cliques você cria e envia sua cobrança de maneira rápida e segura.",
            image: "/assets/icons/3374620.png"
        },
        {
            title: "Cobrança via cartão de crédito",
            description: "Gere cobranças em uma única parcela ou várias.",
            image: "/assets/icons/3333376.png"
        }
    ];
    return (
        <div className="bg-white text-gray-800 font-lato md:max-w-[1300px] lg:w-[80vw] mx-auto md:px-4">
            <Header />
            <main>
                <BannerTextsImageRounded
                    title="Cobre seu Cliente com link de pagamentos da Simplizei"
                    buttons={buttonsBanner}
                    backgroundImage="/assets/img/homem_mulher1.png"
                    backgroundColor="bg-gradient-to-r from-blue-800 to-black"
                    textColor="text-white"
                />
                <BenefitsBanner
                    textos={bannerTexts}
                />
                <CardsWithIcons2 />
                <TaxaCartao />
                <SolucoesFinanceiras />
                <FAQSection />
                <CTA
                    title="Ficou com alguma dúvida?"
                    subTitle='Nosso time de especialistas está pronto para atender você e tirar todas as suas dúvidas sobre os nossos serviços e soluções.'
                />
                <ContactModal />
            </main>
            <Footer />
        </div>
    );
}

export default CobrarCliente;

