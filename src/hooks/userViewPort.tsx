import React, { createContext, useContext, useEffect, useState } from "react";

import { ViewportContextType } from "@/types";

const ViewportContext = createContext<ViewportContextType | undefined>(
  undefined
);

export const ViewportProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ViewportContext.Provider value={{ width }}>
      {children}
    </ViewportContext.Provider>
  );
};

export const useViewport = () => {
  const context = useContext(ViewportContext);
  if (context === undefined) {
    throw new Error("useViewport must be used within a ViewportProvider");
  }
  const { width } = context;
  const isMobile = width < 768;
  return { width, isMobile };
};
