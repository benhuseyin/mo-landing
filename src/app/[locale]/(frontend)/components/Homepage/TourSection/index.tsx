'use client'

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import Calendar from '@/src/assets/icons/calendar.svg'
import LoadingIcon from '@/src/assets/icons/disc-3.svg'

import Button from "../../Global/Button";
import MoBg from "@/src/assets/images/mo-tour.jpg"
import MoMobileBg from "@/src/assets/images/mo-mobile-tour-bg.webp"

import SectionOverlay from "../../Global/SectionOverlay";
import SectionWrapper from "../../Global/SectionWrapper";
import SectionParent from "../../Global/SectionParent";
import CardItems from "./CardItems";
import DatePicker from "../../Global/DatePicker";
import { formatDate } from "../../../utils/helpers/functions";

import XIcon from '@/src/assets/icons/x.svg'
import classNames from "classnames";
import { useTranslations } from "next-intl";
import { tourDates } from "../../../utils/constants";

const TourSection = () => {
    const t = useTranslations('HomePage.tour');

    const timeoutRef = useRef<number | null>(null);

    const [showAllTourCard, setShowAllTourCard] = useState(false);
    const [dateIso, setDateIso] = useState<string | null>(null);
    const [isLoadingCardItems, setIsLoadingCardItems] = useState(false)

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                window.clearTimeout(timeoutRef.current);
            }
        };
    }, []);


    const withLoading = useCallback((action: () => void, delay = 1000) => {
        if (timeoutRef.current) {
            window.clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }

        setIsLoadingCardItems(true);
        action();

        timeoutRef.current = window.setTimeout(() => {
            setIsLoadingCardItems(false);
            timeoutRef.current = null;
        }, delay);
    }, []);

    const handleShowAllTourCard = () => {
        withLoading(() => setShowAllTourCard(prev => !prev));
    };

    const handleSetFilterDate = (iso: string) => {
        withLoading(() => {
            setShowAllTourCard(false);
            setDateIso(iso);
        });
    };

    const handleResetFilter = () => {
        withLoading(() => setDateIso(null));
    };
    const visibleDates = showAllTourCard ? tourDates : tourDates.slice(0, 6);

    const filteredDates = tourDates.filter((date) => {
        if (!dateIso) return date
        return (
            date.date >= dateIso
        )
    })

    const shownItems = dateIso ? filteredDates : visibleDates

    return (
        <SectionWrapper>
            <Image
                src={MoBg}
                alt="Mahmut Orhan Tour Dates Section Background Image"
                fill
                className={classNames("object-cover object-center transition-all duration-300 hidden sm:flex", {
                    "opacity-35": isLoadingCardItems
                })}
                priority={false}
                placeholder="blur"
            />

            <Image
                src={MoMobileBg}
                alt="Mahmut Orhan Tour Dates Section Background Image"
                fill
                className={classNames("object-cover object-center transition-all duration-300 sm:hidden", {
                    "opacity-35": isLoadingCardItems
                })}
                priority={false}
                placeholder="blur"
            />

            <SectionOverlay />

            <SectionParent>
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
                        <Image src={Calendar} alt="calendar-icon" className="w-4 h-4 text-primary invert" />
                        <span className="text-sm font-medium text-primary">2025 - 2026</span>
                    </div>
                    <h2 className="font-display text-5xl md:text-6xl font-bold">{t('title')}</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        {t('description')}
                    </p>
                </div>

                <div className="flex items-center justify-center sm:justify-end gap-x-2.5">
                    <div className={classNames("transition-all duration-300", {
                        "relative bg-green-200/20 border border-green-400/30 text-white font-semibold w-full sm:w-fit shadow-[0_8px_32px_rgba(34,197,94,0.25)] shadow-green-500/30 p-5 rounded-2xl z-50 space-y-5": dateIso
                    })}>
                        <div className="flex gap-x-2.5">
                            <DatePicker value={dateIso} onChange={(iso) => handleSetFilterDate(iso)} />
                            {dateIso &&
                                <Button className="!bg-error/70 hover:!bg-error/80 sm:!bg-error/50 sm:hover:!bg-error/60 text-white/75 cursor-pointer !min-w-8 !h-8 sm:!min-w-10 sm:!h-10 !rounded-full absolute -top-4.5 left-1/2 -translate-x-1/2 sm:relative sm:top-auto sm:left-auto sm:translate-x-0" onClick={handleResetFilter}>
                                    <Image src={XIcon} alt="x-icon" className="invert size-4 cursor-pointer" />
                                </Button>
                            }
                        </div>
                        {dateIso && <p className="text-center sm:text-left text-sm pl-1">{t('filter-description')} <span className="font-bold underline underline-offset-4 block sm:inline-block">{formatDate(dateIso)}</span></p>}
                    </div>

                </div>

                <div className={classNames("min-h-[452px] duration-300 transition-all", {
                    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4": !isLoadingCardItems,
                    "flex justify-center items-center ": isLoadingCardItems
                })}>
                    {isLoadingCardItems ?
                        <Image src={LoadingIcon} alt="loading-icon" className="size-20 invert animate-spin m-auto" /> :
                        <CardItems items={shownItems} />
                    }
                </div>


                {!dateIso && !isLoadingCardItems &&
                    <Button
                        onClick={handleShowAllTourCard}
                        className="relative !bg-green-300/20 backdrop-blur-3xl border border-green-400/30 text-white font-semibold w-fit shadow-[0_8px_32px_rgba(34,197,94,0.25)] shadow-green-500/30 hover:!bg-green-500/50 hover:shadow-[0_8px_32px_rgba(34,197,94,0.45)] mx-auto animate-fade-in"
                    >
                        {showAllTourCard ? t('button-hide') : t('button-show')}
                    </Button>
                }
            </SectionParent>
        </SectionWrapper>
    );
};

export default TourSection


