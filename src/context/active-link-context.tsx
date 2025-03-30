import React, { useState, createContext, useContext } from "react";

import { ActiveLinkContextType, Linknames } from "@/types";

export const ActiveLinkContext = createContext<ActiveLinkContextType | null>(
  null
);

export default function ActiveLinkContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeLink, setActiveLink] = useState<Linknames>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveLinkContext.Provider
      value={{
        activeLink,
        setActiveLink,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveLinkContext.Provider>
  );
}

export function useActiveLinkContext() {
  const context = useContext(ActiveLinkContext);

  if (context === null) {
    throw new Error(
      "useActiveLinkContext must be used within an ActiveLinkContextProvider"
    );
  }

  return context;
}
