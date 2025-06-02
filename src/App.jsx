import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import BrandCarousel from './components/BrandCarousel';
import About from './components/About';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <div className="min-h-screen bg-vp-white font-sans">
      {/* <TopBar /> */}
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <BrandCarousel />
        <Pricing />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;