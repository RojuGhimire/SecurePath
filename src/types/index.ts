import { NAVLINKS } from "@/constants";

export type Linknames = (typeof NAVLINKS)[number]["name"];

export type ActiveLinkContextType = {
    activeLink: string;
    setActiveLink: React.Dispatch<React.SetStateAction<Linknames>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export interface ServiceCardProps {
    title: string;
    description: string;
    image: string;
}

export interface ViewportContextType {
    width: number;
}
