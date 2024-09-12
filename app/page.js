import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Services from "./components/services";
import WhyChooseMe from "./components/WhyChooseMe";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <WhyChooseMe />
      <Contact />
    </div>
  );
}
