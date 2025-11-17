import Image from "next/image";
import CardParent from "./CardParent";
import CardWrapper from "./CardWrapper";
import Map from '@/src/assets/icons/map-pin.svg';
import Calendar from '@/src/assets/icons/calendar.svg'; // <-- import etmeyi unutma
import ExternalLink from '@/src/assets/icons/external-link.svg';
import Button from "../../Global/Button";
import { item } from "@/src/types";

interface Props {
    item: item;
}

const CardItem = ({ item }: Props) => {
    return (
        <CardWrapper>
            <CardParent>
                <div className="flex-1 space-y-2.5 w-full">
                    <div className="flex w-full justify-between">
                        <div className="flex gap-x-2.5 text-primary font-semibold">
                            <Image src={Calendar} alt="calendar-icon" className="w-5 h-5 invert" />
                            <span className="font-display text-lg">{item.date}</span>
                        </div>
                        <span
                            className={`px-3 py-1 rounded-full text-sm font-semibold ${item.status === "Sold Out"
                                ? "bg-[#D64545] text-muted-foreground"
                                : item.status === "Presale"
                                    ? "bg-[#F5C242] text-secondary"
                                    : "bg-[#16A34A] text-primary"
                                }`}
                        >
                            {item.status}
                        </span>
                    </div>

                    <h3 className="font-display text-2xl font-bold group-hover:text-primary transition-colors">
                        {item.venue}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Image src={Map} alt="map-icon" className="w-4 h-4 invert" />
                        <span>{item.location}</span>
                    </div>
                </div>

                <Button
                    className="bg-[#00FF82]/50 hover:shadow-glow transition-all w-full"
                    disabled={item.status === "Sold Out"}
                >
                    Get Tickets
                    <Image src={ExternalLink} alt="external-link" className="w-4 h-4 ml-2 invert" />
                </Button>
            </CardParent>
        </CardWrapper>
    )
}

export default CardItem