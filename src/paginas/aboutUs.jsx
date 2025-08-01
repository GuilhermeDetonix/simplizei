import Header from '../components/Header';
import Footer from '../components/Footer';
import BannerAboutUs from '../components/bannerAboutUs';
import TextoVideo from '../components/textoVideo';
import BannerSlides from '../components/bannerSlides';
import SliderMidia from '../components/SliderMidia';
import StaticBanners from '../components/bannersStaticos';
import Places from '../components/places';
import NossosClientes from '../components/NossosClientes';
import ContactModal from '../components/ContactModalSite';


function AboutUs() {
  return (
    <div className="bg-white text-gray-800 font-lato md:max-w-[1300px] lg:w-[80vw] mx-auto md:px-4">
      <Header />
      <main>
        <BannerAboutUs />
        <TextoVideo />
        <BannerSlides />
        <SliderMidia />
        <StaticBanners />
        <Places />
        <NossosClientes />
        <ContactModal />
      </main>
      <Footer />
    </div>
  );
}

export default AboutUs;