import { TourDateStatus } from "@/src/types/enums";
import Image from 'next/image';

import AppleIcon from '@/src/assets/icons/apple-music.svg'
import YoutubeIcon from '@/src/assets/icons/youtube-icon.svg'
import SpotifyIcon from '@/src/assets/icons/spotify-icon.svg'
import SoundcloudIcon from '@/src/assets/icons/soundcloud-icon.svg'
import { User, Settings, Globe, Instagram, Music2, Youtube, Facebook } from 'lucide-react';

export const NavbarItems = [
    {
        label: 'HOME',
        slug: '/'
    },
    {
        label: 'DATES',
        slug: '/'
    },
    {
        label: 'MUSIC',
        slug: '/'
    },
    {
        label: 'CONTACT',
        slug: '/'
    }
]

export const tourDates = [
    { date: "2025-12-15", venue: "Tomorrowland Winter", location: "Alpe d'Huez, France", status: TourDateStatus.ON_SALE },
    { date: "2026-01-20", venue: "Ministry of Sound", location: "London, UK", status: TourDateStatus.SOLD_OUT },
    { date: "2026-02-10", venue: "Amnesia Ibiza", location: "Ibiza, Spain", status: TourDateStatus.ON_SALE },
    { date: "2026-03-05", venue: "Fabric", location: "London, UK", status: TourDateStatus.PRESALE },
    { date: "2026-03-20", venue: "Pacha", location: "Ibiza, Spain", status: TourDateStatus.ON_SALE },
    { date: "2026-04-01", venue: "Zouk", location: "Singapore", status: TourDateStatus.ON_SALE },
    { date: "2026-04-15", venue: "Hï Ibiza", location: "Ibiza, Spain", status: TourDateStatus.PRESALE },
    { date: "2026-05-05", venue: "Output", location: "New York, USA", status: TourDateStatus.SOLD_OUT },
    { date: "2026-05-20", venue: "Berghain", location: "Berlin, Germany", status: TourDateStatus.ON_SALE },
    { date: "2026-06-01", venue: "DC-10", location: "Ibiza, Spain", status: TourDateStatus.ON_SALE },
];

export const tracks = [
    {
        title: "Şaşkın",
        featuring: "John Cala Remix",
        year: "2025",
        duration: "3:01",
        spotifyId: "1ZVVDHCn3vGg6DLDMhE5FO",
        cover: "https://i.scdn.co/image/ab67616d0000b273"
    },
    {
        title: "Şaşkın",
        featuring: "",
        year: "2025",
        duration: "2:27",
        spotifyId: "19ueEPBwOhHPqX6VPnn9g8",
        cover: null
    },
    {
        title: "Maldad Pura",
        featuring: "Jasiel Nuñez",
        year: "2024",
        duration: "2:38",
        spotifyId: "2DlC8rbljmNHJMteSMWJWa",
        cover: null
    },
];

export const latestReleaseSocialMediaItems = [
    {
        href: "https://open.spotify.com/artist/3t8WiyalpvnB9AObcMufiE",
        className: "bg-green-500/20 hover:bg-green-500/30 text-green-400 hover:text-green-300 border-green-500/30",
        icon: <Image src={SpotifyIcon} alt="Apple icon" className="text-[#1DB954] size-4" />,
        label: "Spotify"
    },
    {
        href: "https://music.apple.com/us/artist/mahmut-orhan/417433523",
        className: "bg-[#ff4e6b]/20 border-[#ff4e6b]/30 hover:bg-[#ff4e6b]/40 text-[#ff4e6b] hover:text-[#ff4e6b]",
        icon: <Image src={AppleIcon} alt="Apple icon" className='size-4' />,
        label: "Apple Music"
    },
    {
        href: "https://www.youtube.com/@Mahmut_Orhan",
        className: "bg-[#FF0000]/20 hover:bg-[#ff4e6b]/30 text-[#FF0000] border-[#FF0000]/30 ",
        icon: <Image src={YoutubeIcon} alt="Youtube icon" className='size-4' />,
        label: "YouTube"
    },
    {
        href: "https://soundcloud.com/mahmut-orhan",
        className: "bg-[#ff5500]/20 hover:bg-[#ff5500]/30 hover:text-[#ff5500] text-[#ff5500] border-[#ff5500]/30 ",
        icon: <Image src={SoundcloudIcon} alt="Apple icon" className="text-[#1DB954] size-4" />,
        label: "Soundcloud"
    }
]

export const faqs = [
    {
        icon: <Globe className="w-6 h-6" />,
        question: "BOOKING CONTACT US, NA, SA, AU, NZ.",
        answer: "alex.becket@caa.com ",
        color: "from-purple-500 to-pink-500"
    },
    {
        icon: <User className="w-6 h-6" />,
        question: "BOOKING CONTACT ROW",
        answer: "MDSmith@wmeagency.com",
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: <Settings className="w-6 h-6" />,
        question: "MANAGEMENT",
        answer: "For brand deals you can reach us at azizfiratacar@robinmusicagency.com ",
        color: "from-orange-500 to-red-500"
    }
];

export const socialLinks = [
    {
        name: 'Instagram',
        icon: Instagram,
        url: 'https://instagram.com/mahmutorhan',
        color: 'from-purple-600 via-pink-600 to-orange-500',
        hoverColor: 'group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-orange-400'
    },
    {
        name: 'TikTok',
        icon: Music2,
        url: 'https://tiktok.com/@mahmutorhan',
        color: 'from-cyan-400 to-pink-500',
        hoverColor: 'group-hover:from-cyan-300 group-hover:to-pink-400'
    },
    {
        name: 'Spotify',
        icon: () => (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
        ),
        url: 'https://open.spotify.com/artist/mahmutorhan',
        color: 'from-green-500 to-green-600',
        hoverColor: 'group-hover:from-green-400 group-hover:to-green-500'
    },
    {
        name: 'Apple Music',
        icon: () => (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043a5.5 5.5 0 0 0-1.877-.726c-.52-.115-1.053-.177-1.586-.196a25.2 25.2 0 0 0-1.957-.01c-1.457 0-2.915-.007-4.373.005-.814.007-1.63.05-2.443.106-.74.05-1.473.145-2.193.323-1.31.317-2.31 1.062-3.043 2.18-.433.658-.684 1.375-.726 2.154-.06.714-.114 1.427-.114 2.143 0 1.97-.005 3.938.005 5.907.006.814.05 1.63.106 2.443.05.74.145 1.473.323 2.193.317 1.31 1.062 2.31 2.18 3.043.658.433 1.375.684 2.154.726.714.06 1.427.114 2.143.114 1.97 0 3.938.005 5.907-.005.814-.006 1.63-.05 2.443-.106.74-.05 1.473-.145 2.193-.323 1.31-.317 2.31-1.062 3.043-2.18.433-.658.684-1.375.726-2.154.06-.714.114-1.427.114-2.143 0-1.97.005-3.938-.005-5.907zm-5.002 7.697c0 2.095-1.51 3.11-3.193 3.11-.812 0-1.728-.264-2.383-.922-.65-.653-.975-1.564-.975-2.598V9.244c0-1.118.456-1.856 1.384-2.243.687-.286 1.416-.34 2.143-.34.265 0 .527.012.79.037v5.268c0 .54-.21.987-.63 1.34-.327.275-.725.413-1.192.413-.28 0-.558-.063-.835-.188-.343-.156-.515-.448-.515-.876V8.57c0-.253.155-.456.467-.61.157-.077.314-.116.472-.116.155 0 .313.04.472.116.312.154.468.357.468.61v3.882c.17.03.337.045.505.045.435 0 .798-.134 1.087-.402.288-.27.432-.64.432-1.112V5.715c.005-.02.01-.038.015-.056 0-.253-.133-.456-.4-.61-.133-.076-.268-.116-.404-.116-.137 0-.27.04-.403.116-.267.154-.4.357-.4.61v5.268z" />
            </svg>
        ),
        url: 'https://music.apple.com/artist/mahmutorhan',
        color: 'from-pink-500 to-rose-600',
        hoverColor: 'group-hover:from-pink-400 group-hover:to-rose-500'
    },
    {
        name: 'SoundCloud',
        icon: () => (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1m-.899.828c-.06 0-.091.037-.104.094L0 14.479l.165 1.308c0 .055.045.094.098.094s.09-.04.09-.094l.193-1.308-.193-1.332c0-.055-.045-.094-.09-.094m1.83-1.229c-.061 0-.12.045-.12.104l-.21 2.563.225 2.458c0 .06.045.12.119.12.061 0 .12-.045.12-.12l.254-2.474-.254-2.548c-.014-.06-.061-.12-.135-.12m.973-.119c-.074 0-.135.06-.135.135l-.193 2.548.193 2.414c0 .06.06.134.134.134.075 0 .135-.06.135-.134l.209-2.414-.209-2.548c-.014-.06-.074-.135-.134-.135m.869-.568c-.09 0-.149.06-.164.149l-.193 3.097.193 2.354c0 .074.074.148.164.148.075 0 .15-.074.15-.148l.209-2.354-.209-3.097c-.015-.09-.075-.149-.15-.149m.989-.515c-.09 0-.165.074-.165.163l-.164 3.612.164 2.265c0 .09.074.164.164.164.09 0 .164-.074.164-.164l.18-2.265-.18-3.612c0-.09-.074-.163-.164-.163m.915-.914c-.105 0-.195.09-.195.194l-.164 4.497.164 2.18c0 .104.09.194.195.194.09 0 .164-.09.164-.194l.193-2.18-.193-4.497c0-.104-.074-.194-.164-.194m.99-.329c-.106 0-.195.09-.195.195l-.15 4.826.15 2.07c0 .105.09.195.196.195.09 0 .194-.09.194-.194l.15-2.071-.15-4.826c0-.105-.089-.195-.194-.195m.945.195c-.104 0-.194.074-.194.193l-.135 4.631.135 1.965c0 .104.09.194.194.194.09 0 .195-.09.195-.194l.164-1.965-.164-4.631c0-.12-.09-.193-.195-.193m1.005-.524c-.119 0-.209.089-.209.208l-.119 5.155.119 1.846c0 .119.09.194.209.194.104 0 .194-.09.194-.194l.134-1.846-.134-5.155c0-.119-.09-.208-.194-.208m.959.522c-.135 0-.225.09-.225.225l-.105 4.632.105 1.771c0 .135.09.226.226.226.119 0 .225-.091.225-.226l.119-1.771-.119-4.632c-.015-.135-.09-.225-.226-.225m1.125.507c-.135 0-.239.105-.239.24l-.09 4.125.09 1.695c0 .135.09.24.24.24.119 0 .239-.105.239-.24l.09-1.695-.09-4.125c0-.135-.106-.24-.24-.24m1.065-.551c-.135 0-.24.105-.24.239l-.074 4.676.074 1.635c0 .135.105.24.24.24.134 0 .239-.105.239-.24l.09-1.635-.09-4.676c0-.134-.105-.239-.24-.239m1.124.522c-.15 0-.254.105-.254.254l-.06 4.155.06 1.575c0 .15.105.254.254.254.15 0 .255-.105.255-.254l.074-1.575-.074-4.155c0-.149-.105-.254-.255-.254m1.111-.209c-.15 0-.27.119-.27.269l-.074 4.362.074 1.5c0 .15.12.27.27.27.149 0 .269-.12.269-.27l.075-1.5-.075-4.362c0-.15-.12-.269-.27-.269m1.156.418c-.165 0-.284.119-.284.283l-.06 3.944.06 1.486c0 .165.119.284.284.284.164 0 .284-.119.284-.284l.074-1.486-.074-3.944c0-.164-.12-.283-.284-.283m1.096-.507c-.18 0-.299.134-.299.313l-.045 4.452.045 1.426c0 .18.119.314.299.314.164 0 .284-.134.284-.314l.06-1.426-.06-4.452c0-.179-.12-.313-.284-.313m1.14.179c-.18 0-.314.149-.314.328l-.045 4.273.045 1.381c0 .18.135.329.314.329.18 0 .314-.149.314-.329l.06-1.381-.06-4.273c0-.179-.134-.328-.314-.328m1.125-.104c-.195 0-.33.134-.33.328l-.029 4.377.029 1.336c0 .195.135.33.33.33.194 0 .329-.135.329-.33l.045-1.336-.045-4.377c0-.194-.135-.328-.329-.328m1.141.134c-.211 0-.359.149-.359.359l-.03 4.243.03 1.291c0 .195.148.344.359.344.195 0 .344-.149.344-.344l.031-1.291-.031-4.243c0-.21-.149-.359-.344-.359m1.156-.254c-.211 0-.359.164-.359.359l-.015 4.497.015 1.247c0 .21.148.359.359.359.21 0 .359-.149.359-.359l.029-1.247-.029-4.497c0-.195-.149-.359-.359-.359m1.171.209c-.226 0-.375.164-.375.374l-.015 4.288.015 1.217c0 .226.149.375.375.375.225 0 .374-.149.374-.375l.016-1.217-.016-4.288c0-.21-.149-.374-.374-.374m1.172-.104c-.226 0-.375.164-.375.375l-.016 4.392.016 1.172c0 .226.149.375.375.375.224 0 .374-.149.374-.375l.015-1.172-.015-4.392c0-.211-.15-.375-.374-.375m1.187.074c-.241 0-.389.18-.389.404l-.016 4.318.016 1.128c0 .24.148.389.389.389.225 0 .389-.164.389-.389l.015-1.128-.015-4.318c0-.225-.164-.404-.389-.404m1.201-.074c-.254 0-.419.179-.419.419v5.431c0 .254.165.419.419.419.254 0 .42-.165.42-.419V9.334c0-.24-.166-.419-.42-.419m1.217.045c-.27 0-.434.18-.434.434v5.342c0 .27.164.434.434.434.269 0 .434-.164.434-.434V9.424c0-.254-.165-.434-.434-.434m1.231-.06c-.285 0-.464.18-.464.465v5.417c0 .285.179.465.464.465.285 0 .465-.18.465-.465V9.424c0-.285-.18-.465-.465-.465m1.247.015c-.3 0-.479.194-.479.479v5.387c0 .3.179.479.479.479.284 0 .479-.179.479-.479V9.424c0-.285-.195-.479-.479-.479m1.262-.074c-.315 0-.509.21-.509.509v5.446c0 .3.194.509.509.509.3 0 .509-.21.509-.509V9.424c0-.3-.209-.509-.509-.509m1.291.104c-.329 0-.524.21-.524.524v5.342c0 .315.195.524.524.524.315 0 .524-.209.524-.524V9.424c0-.315-.209-.524-.524-.524m1.307-.12c-.344 0-.554.225-.554.554v5.461c0 .33.21.554.554.554.33 0 .554-.225.554-.554V9.409c0-.329-.224-.554-.554-.554m1.321.06c-.359 0-.568.225-.568.568v5.342c0 .344.21.569.568.569.33 0 .569-.225.569-.569V9.409c0-.344-.239-.568-.569-.568m1.352-.12c-.374 0-.583.24-.583.584v5.475c0 .345.209.584.583.584.359 0 .584-.239.584-.584V9.409c0-.344-.225-.584-.584-.584m1.367.12c-.389 0-.598.239-.598.598v5.342c0 .359.21.598.598.598.359 0 .598-.239.598-.598V9.409c0-.359-.239-.598-.598-.598m1.397-.15c-.404 0-.628.254-.628.628v5.506c0 .374.224.628.628.628.374 0 .628-.254.628-.628V9.349c0-.374-.254-.628-.628-.628m1.411.15c-.419 0-.643.254-.643.643v5.342c0 .389.224.643.643.643.389 0 .643-.254.643-.643V9.409c0-.389-.254-.643-.643-.643" />
            </svg>
        ),
        url: 'https://soundcloud.com/mahmutorhan',
        color: 'from-orange-500 to-orange-600',
        hoverColor: 'group-hover:from-orange-400 group-hover:to-orange-500'
    },
    {
        name: 'YouTube',
        icon: Youtube,
        url: 'https://youtube.com/@mahmutorhan',
        color: 'from-red-600 to-red-700',
        hoverColor: 'group-hover:from-red-500 group-hover:to-red-600'
    },
    {
        name: 'Facebook',
        icon: Facebook,
        url: 'https://facebook.com/mahmutorhan',
        color: 'from-blue-600 to-blue-700',
        hoverColor: 'group-hover:from-blue-500 group-hover:to-blue-600'
    }
];