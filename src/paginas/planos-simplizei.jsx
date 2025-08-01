import Header from '../components/Header';
import Footer from '../components/Footer';

import Solucoes from '../components/Solucoes';
import PlansSection from '../components/PlanosSimplizei';
import CTA from '../components/CTA';
import FAQSection from '../components/FAQSection';
import BannerCards from '../components/BannerCards';
import ContactModal from '../components/ContactModalSite';

function PlanosSimplizei() {
    var texts = [
        {
            title: "Abertura de empresas",
            description: "Abrimos sua empresa em 2 horas, com o enquadramento correto para que o cliente pague somente o m nimo de impostos.",
            button: "Abra sua empresa",
            image: "/assets/icons/10307058.png"
        },
        {
            title: "Contabilidade",
            description: "Cuidamos de todo o processo cont bil, desde a abertura at  a gest o completa da contabilidade da sua empresa.",
            button: "Ver mais",
            image: "/assets/icons/3374620.png"
        },
        {
            title: "Presta o de contas",
            description: "Prestamos contas e realizamos auditoria para que o cliente esteja sempre em conformidade com a lei.",
            button: "Ver mais",
            image: "/assets/icons/14669997.png"
        },
        {
            title: "Presta o de contas",
            description: "Prestamos contas e realizamos auditoria para que o cliente esteja sempre em conformidade com a lei.",
            button: "Ver mais",
            image: "/assets/icons/14669997.png"
        }
    ];
    
    return (
        <div className="bg-white text-gray-800 font-lato md:max-w-[1300px] lg:w-[80vw] mx-auto md:px-4">
            <Header />
            <main>
                <BannerCards 
                    title="Mais de 70 mil clientes já escolheram a Simplizei"
                    subTitulo="Nós vamos muito além do serviço de contabilidade. Confira nossas vantagens:"
                    textos={texts}
                />
                <PlansSection />
                <Solucoes />
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

export default PlanosSimplizei;