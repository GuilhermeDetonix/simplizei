import Header from '../components/Header';
import Footer from '../components/Footer';

import BenefitsBanner from '../components/BannerColumns';

import PlansSection from '../components/PlanosSimplizei';
import FAQSection from '../components/FAQSection.jsx';
import BannerTextImageRounded from '../components/BannerTextImageRouded.jsx';
import NossosClientesDizem from '../components/NossosClientesDizem.jsx';
import BeneficiosME from '../components/BeneficiosME.jsx';
import TimeLineSection from '../components/TimeLineSection.jsx';
import NossosClientes from '../components/NossosClientes.jsx';
import ComparacaoMEI from '../components/ComparacaoMEI.jsx';
import GestaoContabilidade from '../components/GestaoContabilidade.jsx';
import CTA from '../components/CTA.jsx';
import ContactModal from '../components/ContactModalSite';


const DeixarDeSerMei = () => {
    return (
        <div className="bg-white text-gray-800 font-lato md:max-w-[1300px] lg:w-[80vw] mx-auto md:px-4">
            <Header />
            <main>
                <BannerTextImageRounded
                    title="Precisa deixar de ser MEI?"
                    subTitle="Somos especialistas na transformação de MEI em ME de empresas que precisaram expandir seus ganhos. Faça como mais de 70 mil profissionais e venha para a Simplizei."
                    backgroundImage="/assets/img/homem_mulher1.png"
                    backgroundColor="bg-gradient-to-r from-blue-800 to-black"
                    textColor="text-white"
                />
                <BenefitsBanner />
                <NossosClientesDizem />
                <BeneficiosME />
                <TimeLineSection />
                <NossosClientes />
                <ComparacaoMEI />
                <GestaoContabilidade />
                <PlansSection />
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

export default DeixarDeSerMei;

