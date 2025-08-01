import Header from '../components/Header';
import Footer from '../components/Footer';

import BenefitsBanner from '../components/BannerColumns';

import PlansSection from '../components/PlanosSimplizei';
import FAQSection from '../components/FAQSection.jsx';
import BannerTextImageRounded from '../components/BannerTextImageRouded.jsx';
import NossosClientesDizem from '../components/NossosClientesDizem.jsx';
import TimeLineSection from '../components/TimeLineSection.jsx';
import NossosClientes from '../components/NossosClientes.jsx';
import CTA from '../components/CTA.jsx';
import ContactModal from '../components/ContactModalSite';

const DeixarDeSerMei = () => {
    var texts = [
        {
            title: "Migração rápida",
            description: "Solicitamos toda a documentação ao seu antigo contador.",
            button: "",
            image: "/assets/icons/1006555.png"
        },
        {
            title: "Atendimento rápido",
            description: "Via telefone, chat e e-mail até às 18h e WhatsApp até às 22h.",
            button: "",
            image: "/assets/icons/2972543.png"
        },
        {
            title: "Contadores certificados",
            description: "Temos o maior time de contadores registrados do país.",
            button: "",
            image: "/assets/icons/3227027.png"
        }
    ];

    return (
        <div className="bg-white text-gray-800 font-lato md:max-w-[1300px] lg:w-[80vw] mx-auto md:px-4">
            <Header />
            <main>
                <BannerTextImageRounded
                    title="Traga a sua empresa para o maior escritório de contabilidade do Brasil"
                    subTitle="Mais de 70 mil clientes já confiaram na Simplizei para gerir a contabilidade das suas empresas."
                    backgroundImage="/assets/img/contadores.jpeg"
                    backgroundColor="bg-gradient-to-r from-blue-800 to-black"
                    textColor="text-white"
                    buttons={[
                        {
                            text: 'Fale com um especialista',
                            class: 'bg-blue-200 text-blue-900',
                            classHover: 'hover:bg-blue-900 hover:text-white',
                            onClick: () => { window.open(`https://api.whatsapp.com/send?phone=${import.meta.env.VITE_APP_WHATSAPP_NUMBER}&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Simplizei.`, '_blank') }
                        }
                    ]}
                />
                <BenefitsBanner textos={texts} />
                <NossosClientesDizem />
                <TimeLineSection />
                <NossosClientes />
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

