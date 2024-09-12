import About from "./components/About";
import CompletedProjects from "./components/CompletedProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HireMeNow from "./components/HireMeNow";
import Services from "./components/services";
import WhyChooseMe from "./components/WhyChooseMe";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <WhyChooseMe />
      <CompletedProjects />
      <HireMeNow/>
      <Contact />
      <Footer/>
    </div>
  );
}
