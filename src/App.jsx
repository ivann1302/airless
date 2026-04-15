import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { StatsBar } from './sections/StatsBar';
import { Services } from './sections/Services';
import { HowWeWork } from './sections/HowWeWork';
import { WhyUs } from './sections/WhyUs';
import { Reviews } from './sections/Reviews';
import { Gallery } from './sections/Gallery';
import { About } from './sections/About';
import { Certificates } from './sections/Certificates';
import { Faq } from './sections/Faq';
import { Cta } from './sections/Cta';
import { Footer } from './sections/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <HowWeWork />
        <Reviews />
        <div className="page">
          <WhyUs />
          <About />
          <Gallery />
        </div>
        <Cta />
        <div className="page">
          <Certificates />
          <Faq />
        </div>
      </main>
      <Footer />
    </>
  );
}
