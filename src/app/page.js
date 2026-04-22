import Image from "next/image";
import Heropage from "./compnents/hero";
import AboutSection from "./compnents/about";
import ServiceSection from "./compnents/services";
import PortfolioSection from "./compnents/Portfolio";
import ExperienceHeader from "./compnents/resume";
import PricingSection from "./compnents/pricing";
import ContactSection from "./compnents/Contact";
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="bg-black">
      <section id="home">
        <Heropage />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="services">
        <ServiceSection />
      </section>
      <section id="portfolio">
        <PortfolioSection />
      </section>
      <section id="resume">
        <ExperienceHeader />
      </section>
      <section id="pricing">
        <PricingSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
