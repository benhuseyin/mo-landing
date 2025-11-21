import { TourDateStatus } from "@/src/types/enums";
import Image from 'next/image';

import AppleIcon from '@/src/assets/icons/apple-music.svg'
import YoutubeIcon from '@/src/assets/icons/youtube-icon.svg'
import SpotifyIcon from '@/src/assets/icons/spotify-icon.svg'
import SoundcloudIcon from '@/src/assets/icons/soundcloud-icon.svg'

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