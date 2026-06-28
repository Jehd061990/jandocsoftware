import Hero, { SiteHeader } from "./Sections/Hero";
import Services from "./Sections/Services";
import Featured from "./Sections/Featured";
import About from "./Sections/About";
import Contact from "./Sections/Contact";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Featured />
        <About />
        <Contact />
      </main>
    </>
  );
}
