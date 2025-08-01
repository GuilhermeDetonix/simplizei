import Header from '../components/Header';
import Footer from '../components/Footer';

import BannerContadorOnlineHead from '../components/ContadorOnlineBannerHead';
import ContadorOnlineVantagens from '../components/ContatorOnlineVantagens';
import Solucoes from '../components/Solucoes';
import OnlineAccounting from '../components/OnlineAccount';
import NossosClientes from '../components/NossosClientes';
import PlansSection from '../components/PlanosSimplizei';
import NossosClientesDizem from '../components/NossosClientesDizem';
import AreasAtuacao from '../components/AreasDeAtuacaoEmpresa';
import Testimonials from '../components/Testimonials';
import TituloNossosClientesDizem from '../components/TituloNossosClientesDizem';
import StaticBanners from '../components/bannersStaticos';
import SliderMidia from '../components/SliderMidia';
import CTA from '../components/CTA';
import ContactModal from '../components/ContactModalSite';

function DepoimentosDeClientes() {
  return (
    <div className="bg-white text-gray-800 font-lato md:max-w-[1300px] lg:w-[80vw] mx-auto md:px-4">
      <Header />
      <main>
        <BannerContadorOnlineHead
          titulo="Junte-se à mais de 70 mil empresas que confiam na Simplizei para impulsionar seu negócio"
          descricao="Abertura de empresas e gestão contábil simplificadas com segurança e tranquilidade para mais de 50 mil clientes."
          imagem="/assets/img/mulher_homem.jpeg"
        />
        <TituloNossosClientesDizem />
        {/* <Testimonials /> */}
        <AreasAtuacao />
        <Solucoes />
        <OnlineAccounting />
        <NossosClientes />
        <PlansSection />
        <NossosClientesDizem />
        <StaticBanners />
        <SliderMidia />
        <CTA />
        <ContactModal />
      </main>
      <Footer />
    </div>
  );
}

export default DepoimentosDeClientes;