import Image from "next/image";

import Calendar from '@/src/assets/icons/calendar.svg'
import Map from '@/src/assets/icons/map-pin.svg'
import ExternalLink from '@/src/assets/icons/external-link.svg'

const tourDates = [
    {
        date: "DEC 15, 2025",
        venue: "Tomorrowland Winter",
        location: "Alpe d'Huez, France",
        status: "On Sale"
    },
    {
        date: "JAN 20, 2026",
        venue: "Ministry of Sound",
        location: "London, UK",
        status: "Sold Out"
    },
    {
        date: "FEB 10, 2026",
        venue: "Amnesia Ibiza",
        location: "Ibiza, Spain",
        status: "On Sale"
    },
    {
        date: "MAR 05, 2026",
        venue: "Fabric",
        location: "London, UK",
        status: "Presale"
    }
];

export const TourSection = () => {
    return (
        <section className="py-24 px-4 relative bg-[#121212]" id="tour">
            <div className="container mx-auto max-w-6xl">
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

                <div className="space-y-4">
                    {tourDates.map((show, index) => (
                        <div
                            key={index}
                            className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
                        >
                            <div className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                                <div className="flex-1 space-y-2">
                                    <div className="flex items-center gap-3 text-primary font-semibold">
                                        <Image src={Calendar} alt="calendar-icon" className="w-5 h-5 invert" />
                                        <span className="font-display text-lg">{show.date}</span>
                                    </div>
                                    <h3 className="font-display text-2xl font-bold group-hover:text-primary transition-colors">
                                        {show.venue}
                                    </h3>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Image src={Map} alt="map-icon" className="w-4 h-4" />
                                        <span>{show.location}</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${show.status === "Sold Out"
                                        ? "bg-muted text-muted-foreground"
                                        : show.status === "Presale"
                                            ? "bg-secondary/20 text-secondary"
                                            : "bg-primary/20 text-primary"
                                        }`}>
                                        {show.status}
                                    </span>
                                    {show.status !== "Sold Out" && (
                                        <button className="bg-gradient-primary hover:shadow-glow transition-all">
                                            Get Tickets
                                            <Image src={ExternalLink} alt="external-link" className="w-4 h-4 ml-2" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};