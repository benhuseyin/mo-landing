import { useTranslations } from "next-intl";
import HeroSection from "../components/HeroSection";
import LatestMusicsSection from "../components/LatestMusicsSection";
import { TourSection } from "../components/TourSection";

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <main>
      <HeroSection />
      <TourSection />
      <LatestMusicsSection />
    </main>
  );
}
