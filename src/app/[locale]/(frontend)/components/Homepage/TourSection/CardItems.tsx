import Image from "next/image";
import CardParent from "./CardParent";
import CardWrapper from "./CardWrapper";
import Map from '@/src/assets/icons/map-pin.svg';
import Calendar from '@/src/assets/icons/calendar.svg'; // <-- import etmeyi unutma
import ExternalLink from '@/src/assets/icons/external-link.svg';
import Button from "../../Global/Button";
import { Fragment } from "react/jsx-runtime";

export type item = {
    date: string;
    venue: string;
    location: string;
    status: string;
};

interface Props {
    items: item[];
}

const CardItems = ({ items }: Props) => {
    // Eğer items yoksa veya boşsa render etme
    if (!items || items.length === 0) {
        return null;
    }

    return (
        <Fragment>
            {items.map((show, index) => (
                <CardWrapper key={`${show.venue}-${show.date}-${index}`}>
                    <CardParent>
                        <div className="flex-1 space-y-2.5 w-full">
                            <div className="flex w-full justify-between">
                                <div className="flex gap-x-2.5 text-primary font-semibold">
                                    <Image src={Calendar} alt="calendar-icon" className="w-5 h-5 invert" />
                                    <span className="font-display text-lg">{show.date}</span>
                                </div>
                                <span
                                    className={`px-3 py-1 rounded-full text-sm font-semibold ${show.status === "Sold Out"
                                        ? "bg-[#D64545] text-muted-foreground"
                                        : show.status === "Presale"
                                            ? "bg-[#F5C242] text-secondary"
                                            : "bg-[#16A34A] text-primary"
                                        }`}
                                >
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

                        <Button
                            className="bg-[#00FF82]/50 hover:shadow-glow transition-all w-full"
                            disabled={show.status === "Sold Out"}
                        >
                            Get Tickets
                            <Image src={ExternalLink} alt="external-link" className="w-4 h-4 ml-2 invert" />
                        </Button>
                    </CardParent>
                </CardWrapper>
            ))}
        </Fragment>
    );
};

export default CardItems;
