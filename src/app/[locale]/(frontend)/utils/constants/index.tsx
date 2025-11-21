import { TourDateStatus } from "@/src/types/enums";

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