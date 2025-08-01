import Header from '../components/Header';
import Footer from '../components/Footer';

import BannerContadorOnlineHead from '../components/ContadorOnlineBannerHead';
import ContadorOnlineVantagens from '../components/ContatorOnlineVantagens';
import Solucoes from '../components/Solucoes';
import OnlineAccounting from '../components/OnlineAccount';
import NossosClientes from '../components/NossosClientes';
import PlansSection from '../components/PlanosSimplizei';
import NossosClientesDizem from '../components/NossosClientesDizem';
import ContactModal from '../components/ContactModalSite';

function ContadorOnline() {
  return (
    <div className="bg-white text-gray-800 font-lato md:max-w-[1300px] lg:w-[80vw] mx-auto md:px-4">
      <Header />
      <main>
        <BannerContadorOnlineHead />
        <ContadorOnlineVantagens />
        <Solucoes />
        <OnlineAccounting />
        <NossosClientes />
        <PlansSection />
        <NossosClientesDizem />
        <ContactModal />
      </main>
      <Footer />
    </div>
  );
}

export default ContadorOnline;