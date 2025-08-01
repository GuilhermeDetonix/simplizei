import Header from '../components/Header';
import Footer from '../components/Footer';

import CardsWithIcons from '../components/CardsWithIcons';
import CTA from '../components/CTA';
import FormContact from '../components/FormContact';
import CardsStaticWithImage from '../components/CardsStaticWithImage';
import BannerWithName from '../components/BannerWithName';
import ContactModal from '../components/ContactModalSite';

function Consultoria() {
    let listCards = [
        {
            title: "Como se inscrever?",
            desc: "Quer bater um papo personalizado com a nossa contadora e tirar suas dúvidas? Para isso, basta preencher o formulário acima com todos os seus dados.",
            icon: "/assets/icons/10185922.png",
        },
        {
            title: "Onde será a reunião?",
            desc: "Após a sua inscrição, entraremos em contato com você para agendar uma reunião online com a  nossa contadora.",
            icon: "/assets/icons/3374620.png",
        },
        {
            title: "Quanto custa?",
            desc: "Nossa assessoria técnica contábil é totalmente grátis por tempo  limitado. São poucas vagas, então,  inscreva-se e aproveite!",
            icon: "/assets/icons/7376520.png",
        },
    ]
    return (
        <div className="bg-white text-gray-800 font-lato md:max-w-[1300px] lg:w-[80vw] mx-auto md:px-4">
            <Header />
            <main>
                <BannerWithName/>
                <FormContact />
                <CardsStaticWithImage />
                <CardsWithIcons
                    lista={listCards}
                    title='Veja como funciona a nossa assessoria técnica contábil'
                    buttons={['nada']}
                    subTitle='_'
                />
                <CTA
                    title="Abra sua empresa com quem é líder no mercado em serviço de contabilidade"
                    subTitle="_"
                    backgroundImage="/assets/img/mulher_notebook.jpg"
                />
                <ContactModal />
            </main>
            <Footer />
        </div>
    );
}

export default Consultoria;