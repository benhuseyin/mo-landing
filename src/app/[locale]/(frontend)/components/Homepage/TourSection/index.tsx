'use client'

import Image from "next/image";
import { useState } from "react";

import Calendar from '@/src/assets/icons/calendar.svg'
import Map from '@/src/assets/icons/map-pin.svg'


import Button from "../../Global/Button";
import MoBg from "@/src/assets/images/mo-tour.jpg"
import SectionOverlay from "../../Global/SectionOverlay";
import SectionWrapper from "../../Global/SectionWrapper";
import SectionParent from "../../Global/SectionParent";
import CardItems from "./CardItems";
import DatePicker from "../../Global/DatePicker";

const tourDates = [
    { date: "2025-12-15", venue: "Tomorrowland Winter", location: "Alpe d'Huez, France", status: "On Sale" },
    { date: "2026-01-20", venue: "Ministry of Sound", location: "London, UK", status: "Sold Out" },
    { date: "2026-02-10", venue: "Amnesia Ibiza", location: "Ibiza, Spain", status: "On Sale" },
    { date: "2026-03-05", venue: "Fabric", location: "London, UK", status: "Presale" },
    { date: "2026-03-20", venue: "Pacha", location: "Ibiza, Spain", status: "On Sale" },
    { date: "2026-04-01", venue: "Zouk", location: "Singapore", status: "On Sale" },
    { date: "2026-04-15", venue: "Hï Ibiza", location: "Ibiza, Spain", status: "Presale" },
    { date: "2026-05-05", venue: "Output", location: "New York, USA", status: "Sold Out" },
    { date: "2026-05-20", venue: "Berghain", location: "Berlin, Germany", status: "On Sale" },
    { date: "2026-06-01", venue: "DC-10", location: "Ibiza, Spain", status: "On Sale" },
];

const TourSection = () => {
    const [showAllTourCard, setShowAllTourCard] = useState(false);
    const [dateIso, setDateIso] = useState<string | null>(null);


    const days = Array.from({ length: 31 }).map((_, i) => ({
        label: `${i + 1}`,
        value: i + 1
    }));


    const handleShowAllTourCard = () => {
        setShowAllTourCard(!showAllTourCard);
    }

    const visibleDates = showAllTourCard ? tourDates : tourDates.slice(0, 6);

    return (
        <SectionWrapper>
            <Image
                src={MoBg}
                alt="Mahmut Orhan Tour Dates Section Background Image"
                fill
                className="object-cover object-center"
                priority={false}
                placeholder="blur"
            />

            <SectionOverlay />

            <SectionParent>
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
                        <Image src={Calendar} alt="calendar-icon" className="w-4 h-4 text-primary invert" />
                        <span className="text-sm font-medium text-primary">2025 - 2026</span>
                    </div>
                    <h2 className="font-display text-5xl md:text-6xl font-bold">Tour Dates</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Catch me live at the world's most iconic venues
                    </p>
                </div>

                <div className="flex items-center justify-end gap-x-2.5">
                    <div className="max-w-sm">
                        <DatePicker value={dateIso} onChange={(iso) => setDateIso(iso)} />
                    </div>
                    <Button
                        onClick={handleShowAllTourCard}
                        className="relative !bg-green-300/20 backdrop-blur-3xl border border-green-400/30 text-white font-semibold w-fit shadow-[0_8px_32px_rgba(34,197,94,0.25)] shadow-green-500/30 hover:!bg-green-500/50 hover:shadow-[0_8px_32px_rgba(34,197,94,0.45)] transition-all duration-300"
                    >
                        Show All
                    </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <CardItems items={visibleDates} />
                </div>
            </SectionParent>
        </SectionWrapper>
    );
};

export default TourSection