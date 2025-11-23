import LatestMusicsSection from "../components/Homepage/LatestMusicsSection";
import HeroSection from "../components/Homepage/HeroSection";
import TourSection from "../components/Homepage/TourSection";
import ContactSection from "../components/Homepage/ContactSection";
import SocialMediaSection from "../components/Homepage/SocialMediaSection";
import ContactForm from "../components/Homepage/FormSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TourSection />
      <LatestMusicsSection />
      <SocialMediaSection />
      <ContactForm />
      <ContactSection />
    </main>
  );
}
