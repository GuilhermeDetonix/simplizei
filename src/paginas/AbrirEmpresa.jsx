import Header from '../components/Header';
import Footer from '../components/Footer';

import BannerAbraEmpresa from '../components/BannerAbraEmpresa.jsx';
import BenefitsBanner from '../components/BannerColumns';


import PricesComparations from '../components/PricesComparation';
import ProcessTabs from '../components/ProcessTabs.jsx';
import PlansSection from '../components/PlanosSimplizei';
import FAQSection from '../components/FAQSection.jsx';
import Testimonials from '../components/Testimonials.jsx';
import CardsCustom from '../components/CardsStatic';
import TextoImagemArredondada from '../components/TextoImagemArredondada.jsx';
import ContactModal from '../components/ContactModalSite';

const AbrirEmpresa = () => {
    var buttons = [
        {
            text: 'Abra sua empresa grátis',
            hoverColor: 'cyan-500',
            textColor: 'blue-900',
            color: 'blue-200',
            onClick: () => window.open(`/cadastrar`, '_blank')
        },
        {
            text: 'Fale com um especialista',
            hoverColor: 'blue-300',
            textColor: 'blue-100',
            color: 'blue-900',
            onClick: () => window.open(`https://api.whatsapp.com/send?phone=${import.meta.env.VITE_APP_WHATSAPP_NUMBER}&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Simplizei.`, '_blank')
        }
    ];
    return (
        <div className="bg-white text-gray-800 font-lato md:max-w-[1300px] lg:w-[80vw] mx-auto md:px-4">
            <Header />
            <main>
                <BannerAbraEmpresa
                    buttons={buttons}
                />
                <BenefitsBanner />
                <PricesComparations />
                <ProcessTabs />
                <TextoImagemArredondada />
                <PlansSection />
                <FAQSection />
                {/* <Testimonials /> */}
                <CardsCustom />
                <ContactModal />
            </main>
            <Footer />
        </div>
    );
}

export default AbrirEmpresa;

