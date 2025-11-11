import { useTranslations } from "next-intl";
import HeroSection from "../components/HeroSection";
import LatestMusicsSection from "../components/LatestMusicsSection";

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <main>
      <HeroSection />
      <LatestMusicsSection />
    </main>
  );
}
