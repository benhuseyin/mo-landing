import Image from "next/image";
import BackgroundImage from "@/src/assets/images/mo-latest-music-cover.webp"
import { useTranslations } from "next-intl";

const LatestMusicsSection = () => {
    const t = useTranslations('HomePage');

    const title = t.rich('latest-music.title', {
        br: () => <br />
    });


    return (
        <section className="relative">
            <div className="absolute top-1/2 text-[50px] font-bold p-5 sm:p-10">
                <h2>{title}</h2>
                <iframe data-testid="embed-iframe" style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/track/1IS7T8BYibhyAGxX8Jcgbr?utm_source=generator" width="100%" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" height={'100px'}></iframe>
            </div>

            <Image src={BackgroundImage} alt="Mahmut Orhan Latest Release" className="max-h-[600px] w-full object-cover" />
        </section>
    );
}

export default LatestMusicsSection