import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhyUs from "./components/WhyUs";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}