import { useTranslations } from "next-intl";

const HeroSection = () => {
    const t = useTranslations('HomePage.hero');

    return (
        <section className="relative w-full h-screen overflow-hidden" id="#hero">
            <video
                autoPlay
                muted
                loop
                playsInline
                poster="https://cdn.iticket.com.tr/landing_page/cover/UZymqpmyDPjba73DRJs4IWVgCY7Fajfz.jpg"
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source
                    src="https://cdn.iticket.com.tr/landing_page/cover/mahmut_orhan_web_video_cut-QT.mp4"
                    type="video/mp4"
                />
            </video>

            <div className="relative z-10 flex flex-col items-center justify-center text-white text-center w-full h-full bg-black/30">
                <h1 className="text-5xl sm:text-6xl font-bold drop-shadow-lg">
                    {t('title')}
                </h1>
                <p className="mt-4 text-2xl font-bold sm:text-2xl drop-shadow-md">
                    {t('description')}

                </p>
            </div>

            <div className="absolute inset-0 bg-black/50 pointer-events-none" />
        </section>
    );
}

export default HeroSection