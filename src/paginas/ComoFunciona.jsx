import Header from '../components/Header';
import Footer from '../components/Footer';

import NossosClientes from '../components/NossosClientes';
import PlansSection from '../components/PlanosSimplizei';
import BannerTextSubTextImage from '../components/BannerTextSubTextImage';
import CTA from '../components/CTA';
import FAQSection from '../components/FAQSection';
import TimeLineTabs from '../components/TimeLineTabs';
import BannerCards from '../components/BannerCards';
import ContactModal from '../components/ContactModalSite';

function ContadorOnline() {
    var cardsBanner = [
        {
            title: "CNPJ rápido e grátis",
            description: "Cuidamos da abertura do CNPJ sem você sair de casa",
            button: "Abra sua empresa",
            image: "/assets/icons/10307058.png"
        },
        {
            title: "Otimização tributária",
            description: "Para que você pague somente os impostos necessários.",
            button: "Ver mais",
            image: "/assets/icons/3374620.png"
        },
        {
            title: "Atendimento rápido",
            description: "Via telefone, chat e e-mail até às 18h e WhatsApp até às 22h.",
            button: "Ver mais",
            image: "/assets/icons/14669997.png"
        }
    ];
    return (
        <div className="bg-white text-gray-800 font-lato md:max-w-[1300px] lg:w-[80vw] mx-auto md:px-4">
            <Header />
            <main>
                <BannerTextSubTextImage
                    titulo="Como funciona a Simplizei?"
                    descricao="Há mais de 10 anos, entregamos contabilidade simples, completa e segura e outras soluções integradas para facilitar o seu dia a dia."
                    imagem="/assets/img/mulher3.jpeg"
                />
                <BannerCards
                    textos={cardsBanner}

                />
                <TimeLineTabs />
                <NossosClientes />
                <PlansSection />
                <FAQSection />
                <CTA
                    title="Ficou com alguma dúvida?"
                    subTitle="Nosso time de especialistas está pronto para atender você e tirar todas as suas dúvidas sobre os nossos serviços e soluções."
                    backgroundImage="/assets/img/mulher_notebook.jpg"
                />
                <ContactModal />
            </main>
            <Footer />
        </div>
    );
}

export default ContadorOnline;