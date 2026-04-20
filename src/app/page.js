import Image from "next/image";
import Heropage from "./compnents/hero";
import AboutSection from "./compnents/about";
import ServiceSection from "./compnents/services";
import PortfolioSection from "./compnents/Portfolio";
import ExperienceHeader from "./compnents/resume";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div>
      <Heropage/>
      <AboutSection/>
      <ServiceSection/>
      <PortfolioSection/>
      <ExperienceHeader/>
    </div>
  );
}
