import { useAos } from "../hooks/useAos";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Second from "../components/Second";
import Third from "../components/Third";
import Fourth from "../components/Fourth";
import Fifth from "../components/Fifth";
import Sixth from "../components/Sixth";
import Footer from "../components/Footer";

export default function IndexPage() {
  useAos();
  return (
    <>
      <Nav homeHref="" serviceHref="./service.html" active="home" />
      <Hero img="/assets/img/hero-img.webp" />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <Footer />
    </>
  );
}
