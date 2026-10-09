import About from "@/components/About";
import BrandsCTA from "@/components/BrandsCTA";
import Community from "@/components/Community";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marketplace from "@/components/Marketplace";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marketplace />
        <Community />
        <BrandsCTA />
        <About />
      </main>
      <Footer />
    </>
  );
}
