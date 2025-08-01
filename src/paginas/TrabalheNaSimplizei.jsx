import Header from '../components/Header';
import Footer from '../components/Footer';
import BannerCurvo from '../components/HeaderTextImageCurvo';
import BannerImageOutSide from '../components/bannerImageOutSide';
import NossosValores from '../components/NossosValores';
import MacroestruturasSection from '../components/Estrutura';
import HeroSectionCircles from '../components/HeroImpactSection';
import ContactModal from '../components/ContactModalSite';


const TrabalheNaSimplizei = () => {
    
    return (
        <div className="bg-white text-gray-800 font-lato md:max-w-[1300px] lg:w-[80vw] mx-auto md:px-4">
            <Header />
            <main>
                <BannerCurvo
                    titulo="Simplifique sua contabilidade com a Simplizei"
                    descricao="Abertura de empresas e gestão contábil simplificadas com segurança e tranquilidade para mais de 50 mil clientes."
                    imagem="/assets/img/comemoracao_simplizei.jpeg"
                    imageSobreposta="/assets/img/homem_mulher_simplizei.png"
                />
                <HeroSectionCircles />
                <NossosValores />
                <MacroestruturasSection />
                <BannerImageOutSide
                    title="Junte-se à nossa equipe"
                    description="Estamos em busca de talentos para fazer parte da nossa equipe."
                    image="/assets/img/mulher3.png"
                />
                <ContactModal />
            </main>
            <Footer />
        </div>
    );
}

export default TrabalheNaSimplizei;