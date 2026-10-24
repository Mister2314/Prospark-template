import { useAos } from "../hooks/useAos";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import GridSection from "../components/GridSection";
import ThirdS from "../components/ThirdS";
import FourthS from "../components/FourthS";
import FifthS from "../components/FifthS";
import Sixth from "../components/Sixth";
import Footer from "../components/Footer";

export default function ServicePage() {
  useAos();
  return (
    <>
      <Nav homeHref="./index.html" serviceHref="" active="service" />
      <Hero img="/assets/img/service-hero.webp" />
      <GridSection />
      <ThirdS />
      <FourthS />
      <FifthS />
      <Sixth />
      <Footer />
    </>
  );
}
