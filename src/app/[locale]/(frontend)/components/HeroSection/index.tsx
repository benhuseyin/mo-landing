import Image from "next/image";
import HeroImg from "@/src/assets/images/mo-hero.webp"

const HeroSection = () => {
    return (
        <section>
            <Image src={HeroImg} alt="Mahmut Orhan Hero Image" className="max-h-screen w-full object-cover" priority={true} />
        </section>
    );
}

export default HeroSection