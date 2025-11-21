import Image from "next/image";
import BackgroundImage from "@/src/assets/images/mo-latest-music-cover.webp"
import { useTranslations } from "next-intl";
import SectionWrapper from "../../Global/SectionWrapper";
import SectionParent from "../../Global/SectionParent";

const LatestMusicsSection = () => {
    const t = useTranslations('HomePage');

    const title = t.rich('latest-music.title', {
        br: () => <br />
    });


    return (
        <SectionWrapper>
            <Image
                src={BackgroundImage}
                alt="Mahmut Orhan Tour Dates Section Background Image"
                fill
                className={"object-cover object-center transition-all duration-300"}
                priority={false}
                placeholder="blur"
            />
            <SectionParent>
                <div className="absolute top-1/2 text-[50px] font-bold p-5 sm:p-10">
                    <h2>{title}</h2>
                    <iframe data-testid="embed-iframe" style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/track/1IS7T8BYibhyAGxX8Jcgbr?utm_source=generator" width="100%" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" height={'100px'}></iframe>
                </div>


            </SectionParent>
        </SectionWrapper>
    );
}

export default LatestMusicsSection