import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Seasons from "@/components/Seasons";
import ServiceArea from "@/components/ServiceArea";
import About from "@/components/About";
import GoogleReviews from "@/components/GoogleReviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Gallery />
        <Seasons />
        <ServiceArea />
        <About />
        <GoogleReviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
