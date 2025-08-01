import Header from '../components/Header';
import Footer from '../components/Footer';

import BannerAbraEmpresa from '../components/BannerAbraEmpresa.jsx';

import ProcessTabs from '../components/ProcessTabs.jsx';
import Testimonials from '../components/Testimonials.jsx';
import AberturaCnpjSection from '../components/AberturaCNPJ.jsx';
import TextsWithImageBg from '../components/TextsWithImageBg';
import CTA from '../components/CTA';
import ContactModal from '../components/ContactModalSite';


const EscritorioOnline = () => {
    var textos = {
        title: 'O maior escritório de contabilidade do Brasil.',
        description: `Há mais de 10 anos nosso escritório contábil entrega uma contabilidade segura e simplificada para mais de 70 mil clientes.<br><br>
        <span className="text-green-500" role="img" aria-label="seta para a direita">✓</span> Nosso time de contadores é certificado e o nosso atendimento rápido é realizado através do WhatsApp, chat, e-mail e telefone em horário estendido.<br>
        <span className="text-green-500" role="img" aria-label="seta para a direita">✓</span> Oferecemos soluções aliadas à nossa contabilidade para facilitar o seu dia e você focar no que importa: seu negócio.
        `,
        button: 'Abra sua empresa grátis',
        image: '/assets/img/room_simplizei.jpeg'
    };
    return (
        <div className="bg-white text-gray-800 font-lato md:max-w-[1300px] lg:w-[80vw] mx-auto md:px-4">
            <Header />
            <main>
                <BannerAbraEmpresa texts={textos}/>
                <TextsWithImageBg />
                <ProcessTabs />
                <AberturaCnpjSection />
                {/* <Testimonials /> */}
                <CTA 
                    title="Ficou com alguma dúvida?"
                    description="Nosso time de especialistas está pronto para atender você e tirar todas as suas dúvidas sobre os nossos serviços e soluções."
                />
                <ContactModal />
            </main>
            <Footer />
        </div>
    );
}

export default EscritorioOnline;

