import About from "@/components/sections/About";
import HeroSection from "@/components/sections/HeroSection";
import RootLayout from "@/layouts/RootLayout";
import Hero2 from "../sections/Hero2";
import Service from "../sections/Service";
import Banner from "../sections/Banner";
import Software from "../sections/Software";
import Price from "../sections/Price";
import Meeting from "../sections/Meeting";
import Banner2 from "../sections/Banner2";
import Footer from "../sections/Footer";
import Footer2 from "../sections/Footer2";
// import Contact from "../sections/Contact";
import ContactSection from "../sections/Contact2";
import FAQ from "../sections/Faq";
import AccountingStats from "../sections/AccountingStat";
const Homepage: React.FC = () => {
  return (
    <RootLayout>
      <div className="flex flex-col w-full   ">
        <HeroSection />
        <Hero2 />
        <About />
        <Service />
        <Banner />
        <Software />
        <Price />
        <AccountingStats />
        <Meeting />
        <FAQ />
        {/* <Contact /> */}
        <ContactSection />
        <Banner2 />
        <Footer />
        <Footer2 />
      </div>
    </RootLayout>
  );
};

export default Homepage;
