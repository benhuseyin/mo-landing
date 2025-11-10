import { useTranslations } from "next-intl";
import HeroSection from "../components/HeroSection";

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <main>
      <HeroSection />
    </main>
  );
}
