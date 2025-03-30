import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { Linknames } from "@/types";
import { useActiveLinkContext } from "@/context/active-link-context";


export function useLinkInView(linkName: Linknames, threshold = 0.75) {
    const { ref, inView } = useInView({
        threshold,
    });
    const { setActiveLink, timeOfLastClick } = useActiveLinkContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            
            setActiveLink(linkName);
        }
    }, [inView, setActiveLink, timeOfLastClick, linkName]);

    return {
        ref,
    };
}