import About from "./components/About";
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
    </div>
  );
}
