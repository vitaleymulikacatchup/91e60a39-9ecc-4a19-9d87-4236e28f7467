"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarBase from '@/components/navigation/NavbarBase';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import YearRoadmapTimeline from '@/components/sections/layouts/roadmap/YearRoadmapTimeline';
import BentoFAQ from '@/components/sections/layouts/faq/BentoFAQ';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <NavbarBase
        logoSrc="/images/logo.svg"
        logoAlt="DogCoin Meme"
        logoClassName="text-3xl"
        leftButtonText=""
        rightButtonText="Learn More"
        onLeftButtonClick={() => {}}
        onRightButtonClick={() => {}}
        className="sticky top-0"
      />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero
          title="Welcome to DogCoin"
          subtitle="Join the playful revolution in crypto!"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
          onPrimaryButtonClick={() => {}}
          onSecondaryButtonClick={() => {}}
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="About DogCoin"
          descriptions={["A new meme token designed for fun and community.", "Join our family of holders and enjoy!"]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy"
          steps={[
            { title: "Step 1", description: "Get your crypto wallet ready!", position: "left", image: "/images/placeholder1.avif", isCenter: true },
            { title: "Step 2", description: "Purchase DogCoin on our platform.", position: "center", image: "/images/placeholder2.avif", isCenter: false },
            { title: "Step 3", description: "Join our community chat!", position: "right", image: "/images/placeholder3.avif", isCenter: true }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <PatternTokenomics
          title="Tokenomics"
          description="Overview of the DogCoin economics."
          kpiItems={[
            { value: "1M", description: "Total Supply", icon: DollarSign },
            { value: "100K", description: "Market Cap", icon: Graph },
            { value: "500K", description: "Liquidity", icon: Lock }
          ]}
        />
      </div>
      <div id="roadmap" data-section="roadmap" className="scroll-mt-24">
        <YearRoadmapTimeline
          items={[
            { year: "2023", title: "Launch", description: "Experience the launch of DogCoin!" },
            { year: "2024", title: "Community Growth", description: "Building a vibrant community of holders." },
            { year: "2025", title: "Expanding Use Cases", description: "Expanding DogCoin's use cases." }
          ]}
          className="my-8"
        />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <BentoFAQ
          items={[
            { title: "What is DogCoin?", content: "A meme token designed for fun and community involvement." },
            { title: "How do I buy DogCoin?", content: "Follow the steps outlined above." },
            { title: "Is DogCoin safe?", content: "Yes, we prioritize safety and transparency." }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="DogCoin Logo"
          logoText="DogCoin"
          className="text-center"
        />
      </div>
    </SiteThemeProvider>
  );
}