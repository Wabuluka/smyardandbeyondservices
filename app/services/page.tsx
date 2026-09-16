import Header from "@/components/Header";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Seasons from "@/components/Seasons";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { business } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Lawn Care & Landscaping Services",
  description:
    "Lawn care, mowing, landscaping, mulch installation, hedge trimming, yard clean-ups, lawn repairs and snow plowing — year-round, run by Timothy and Elijah.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="border-b border-primary/15 bg-primary text-primary-content">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <h1 className="font-display text-4xl font-bold sm:text-5xl">
              Lawn care &amp; landscaping services
            </h1>
            <p className="mt-4 max-w-xl text-primary-content/85">
              From lawn mowing and yard work to landscaping and snow plowing, we cover every
              season and every property, all run by {business.owners[0]} and{" "}
              {business.owners[1]} themselves.
            </p>
          </div>
        </section>
        <Services />
        <Gallery />
        <Seasons />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
