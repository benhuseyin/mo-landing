'use client'

import Image from "next/image";
import { useState } from "react";

import Calendar from '@/src/assets/icons/calendar.svg'
import Map from '@/src/assets/icons/map-pin.svg'
import ExternalLink from '@/src/assets/icons/external-link.svg'
import Button from "../../Global/Button";
import MoBg from "@/src/assets/images/mo-tour.jpg"
import SectionOverlay from "../../Global/SectionOverlay";

const tourDates = [
    { date: "DEC 15, 2025", venue: "Tomorrowland Winter", location: "Alpe d'Huez, France", status: "On Sale" },
    { date: "JAN 20, 2026", venue: "Ministry of Sound", location: "London, UK", status: "Sold Out" },
    { date: "FEB 10, 2026", venue: "Amnesia Ibiza", location: "Ibiza, Spain", status: "On Sale" },
    { date: "MAR 05, 2026", venue: "Fabric", location: "London, UK", status: "Presale" },
    { date: "MAR 20, 2026", venue: "Pacha", location: "Ibiza, Spain", status: "On Sale" },
    { date: "APR 01, 2026", venue: "Zouk", location: "Singapore", status: "On Sale" },
    { date: "APR 15, 2026", venue: "Hï Ibiza", location: "Ibiza, Spain", status: "Presale" },
    { date: "MAY 05, 2026", venue: "Output", location: "New York, USA", status: "Sold Out" },
    { date: "MAY 20, 2026", venue: "Berghain", location: "Berlin, Germany", status: "On Sale" },
    { date: "JUN 01, 2026", venue: "DC-10", location: "Ibiza, Spain", status: "On Sale" },
    { date: "JUN 15, 2026", venue: "Amnesia Ibiza", location: "Ibiza, Spain", status: "Presale" },
    { date: "JUL 01, 2026", venue: "Space", location: "Ibiza, Spain", status: "On Sale" },
    { date: "JUL 15, 2026", venue: "Privilege", location: "Ibiza, Spain", status: "Sold Out" },
    { date: "AUG 01, 2026", venue: "Ministry of Sound", location: "London, UK", status: "On Sale" },
    { date: "AUG 15, 2026", venue: "Fabric", location: "London, UK", status: "Presale" },
    { date: "SEP 01, 2026", venue: "Zouk", location: "Singapore", status: "On Sale" },
    { date: "SEP 15, 2026", venue: "Pacha", location: "Ibiza, Spain", status: "On Sale" },
    { date: "OCT 01, 2026", venue: "Berghain", location: "Berlin, Germany", status: "Presale" },
    { date: "OCT 15, 2026", venue: "Output", location: "New York, USA", status: "On Sale" },
    { date: "NOV 01, 2026", venue: "Tomorrowland Winter", location: "Alpe d'Huez, France", status: "Sold Out" }
];


const TourSection = () => {
    const [showAllTourCard, setShowAllTourCard] = useState(false);

    const handleShowAllTourCard = () => {
        setShowAllTourCard(!showAllTourCard);
    }

    return (
        <section className="relative py-24 px-4 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${MoBg.src})` }}
        >

            <SectionOverlay />

            <div className="container mx-auto max-w-6xl relative z-10">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                    {tourDates.map((show, index) => {
                        return (
                            showAllTourCard ? <div
                                key={index}
                                className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group border border-white/20 rounded-2xl relative bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:bg-white/15 hover:border-white/30"
                            >
                                <div className="p-6 flex flex-col items-start gap-y-5">
                                    <div className="flex-1 space-y-2.5 w-full">
                                        <div className="flex w-full justify-between">
                                            <div className="flex gap-x-2.5 text-primary font-semibold">
                                                <Image src={Calendar} alt="calendar-icon" className="w-5 h-5 invert" />
                                                <span className="font-display text-lg">{show.date}</span>
                                            </div>
                                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${show.status === "Sold Out"
                                                ? "bg-[#D64545] text-muted-foreground"
                                                : show.status === "Presale"
                                                    ? "bg-[#F5C242] text-secondary"
                                                    : "bg-[#16A34A] text-primary"
                                                }`}>
                                                {show.status}
                                            </span>
                                        </div>

                                        <h3 className="font-display text-2xl font-bold group-hover:text-primary transition-colors">
                                            {show.venue}
                                        </h3>
                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            <Image src={Map} alt="map-icon" className="w-4 h-4 invert" />
                                            <span>{show.location}</span>
                                        </div>
                                    </div>

                                    <Button className="bg-[#00FF82]/50 hover:shadow-glow transition-all w-full"
                                        disabled={show.status === "Sold Out"}
                                    >
                                        Get Tickets
                                        <Image src={ExternalLink} alt="external-link" className="w-4 h-4 ml-2 invert" />
                                    </Button>
                                </div>
                            </div> :
                                index < 6 && <div
                                    key={index}
                                    className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group border border-white/20 rounded-2xl relative bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:bg-white/15 hover:border-white/30"
                                >
                                    <div className="p-6 flex flex-col items-start gap-y-5">
                                        <div className="flex-1 space-y-2.5 w-full">
                                            <div className="flex w-full justify-between">
                                                <div className="flex gap-x-2.5 text-primary font-semibold">
                                                    <Image src={Calendar} alt="calendar-icon" className="w-5 h-5 invert" />
                                                    <span className="font-display text-lg">{show.date}</span>
                                                </div>
                                                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${show.status === "Sold Out"
                                                    ? "bg-[#D64545] text-muted-foreground"
                                                    : show.status === "Presale"
                                                        ? "bg-[#F5C242] text-secondary"
                                                        : "bg-[#16A34A] text-primary"
                                                    }`}>
                                                    {show.status}
                                                </span>
                                            </div>

                                            <h3 className="font-display text-2xl font-bold group-hover:text-primary transition-colors">
                                                {show.venue}
                                            </h3>
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Image src={Map} alt="map-icon" className="w-4 h-4 invert" />
                                                <span>{show.location}</span>
                                            </div>
                                        </div>

                                        <Button className="bg-[#00FF82]/50 hover:shadow-glow transition-all w-full"
                                            disabled={show.status === "Sold Out"}
                                        >
                                            Get Tickets
                                            <Image src={ExternalLink} alt="external-link" className="w-4 h-4 ml-2 invert" />
                                        </Button>
                                    </div>
                                </div>

                        )
                    }
                    )}

                </div>
                <Button
                    onClick={handleShowAllTourCard}
                    className="
                    mt-5
    relative
    !bg-green-300/20
    backdrop-blur-3xl
    border border-green-400/30
    text-white
    font-semibold
    w-fit
    shadow-[0_8px_32px_rgba(34,197,94,0.25)]
    shadow-green-500/30
    hover:!bg-green-500/50
    hover:shadow-[0_8px_32px_rgba(34,197,94,0.45)]
    transition-all
    duration-300
    mx-auto
  "
                >
                    Show All
                </Button>
            </div>
        </section >
    );
};

export default TourSection