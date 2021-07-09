import { useState, useEffect } from "react";

// Components
import Navbar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import LandingSection from "../components/LandingSection";
import WhoAreWe from "../components/WhoAreWe";
import OurValuesSection from "../components/OurValuesSection";
import OurProjectsCount from "../components/OurProjectsCount";
import FeaturesSection from "../components/FeaturesSection";
import MobileAppSection from "../components/MobileAppSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import WorkingTeam from "../components/WorkingTeam";
import Footer from "../components/Footer";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  });

  return (
    <>
      <Navbar setIsOpen={setIsOpen} />
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <LandingSection />
      <WhoAreWe />
      <OurValuesSection />
      <OurProjectsCount />
      <FeaturesSection />
      <MobileAppSection />
      <ServicesSection />
      <TestimonialsSection />
      <WorkingTeam />
      <Footer />
    </>
  );
};

export default HomePage;
