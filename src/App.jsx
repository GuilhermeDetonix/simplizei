import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MeiSection from './components/MeiSection';
import BenefitsSlider from './components/BenefitsSlider';
import ProcessTabs from './components/ProcessTabs';
// import PlansSection from './components/PlansSection';
import PlansSection from './components/PlanosSimplizei';
// import PlansSection from './components/PlansSistema';
import FAQSection from './components/FAQSection';
import Testimonials from './components/Testimonials';
import AboutSection from './components/AboutSection';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ContactModal from './components/ContactModalSite';

function App() {
  return (
    <div className="bg-white text-gray-800 font-lato md:max-w-[1300px] lg:w-[80vw] mx-auto md:px-4">
      <Header />
      <main>
        <HeroSection />
        <MeiSection />
        <BenefitsSlider />
        <ProcessTabs />
        <PlansSection />
        <FAQSection />
        {/* <Testimonials /> */}
        <AboutSection />
        <CTA />
        <ContactModal />
      </main>
      <Footer />
    </div>
  );
}

export default App;