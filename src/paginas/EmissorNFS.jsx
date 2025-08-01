import Header from '../components/Header';
import Footer from '../components/Footer';

import ContadorOnlineVantagens from '../components/ContatorOnlineVantagens';
import NossosClientesDizem from '../components/NossosClientesDizem';
import BannerTextSubTextImage from '../components/BannerTextSubTextImage';
import CardsWithIcons from '../components/CardsWithIcons';
import TimeLineHorizontalImage from '../components/TimeLineHorizontalImage';
import CTA from '../components/CTA';
import FAQSection from '../components/FAQSection';
import ContactModal from '../components/ContactModalSite';

function ContadorOnline() {
    return (
        <div className="bg-white text-gray-800 font-lato md:max-w-[1300px] lg:w-[80vw] mx-auto md:px-4">
            <Header />
            <main>
                <BannerTextSubTextImage
                    titulo="Emissor Gratuito de NFS-e"
                    descricao="Emita suas notas fiscais eletrônicas de prestação de serviços com mais rapidez e segurança."
                    imagem="/assets/img/mulher3.jpeg"
                />
                <CardsWithIcons />
                <TimeLineHorizontalImage />
                <ContadorOnlineVantagens />
                <FAQSection />
                <NossosClientesDizem />
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

export default ContadorOnline;