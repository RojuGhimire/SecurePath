import Homepage from "@/components/Home/Homepage";
import AdminLogin from "@/Pages/AdminLogin";
import { Route, Routes } from "react-router-dom";
import TermsAndConditions from "@/Pages/Terms";
import ActiveLinkContextProvider from "@/context/active-link-context";

const AppRoutes = () => {
  return (
    <div>
      <ActiveLinkContextProvider>
      <Routes>
        
        <Route path="/" element={<Homepage />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>
      </ActiveLinkContextProvider >
    </div>
  );
};

export default AppRoutes;
