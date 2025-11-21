import { TourDateStatus } from "./enums";

export type item = {
    date: string;
    venue: string;
    location: string;
    status: TourDateStatus;
};