import Hero, { SiteHeader } from "./Sections/Hero";
import TrustBar from "./Sections/TrustBar";
import Services from "./Sections/Services";
import WhyChooseUs from "./Sections/WhyChooseUs";
import Featured from "./Sections/Featured";
import Process from "./Sections/Process";
import About from "./Sections/About";
import CTA from "./Sections/CTA";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyChooseUs />
        <Featured />
        <Process />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
