import React from "react";
import { Toaster } from "react-hot-toast";

import ActiveLinkContextProvider from "@/context/active-link-context";
import { ViewportProvider } from "@/hooks/userViewPort";
import Header from "@/components/Header";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ViewportProvider>
        <ActiveLinkContextProvider>
          <Header />
          <Toaster position="top-right" />

          <div className="w-full mx-auto">{children}</div>
        </ActiveLinkContextProvider>
      </ViewportProvider>
    </>
  );
};

export default RootLayout;
