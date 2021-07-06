import { useState, useEffect } from "react";

// Components
import Navbar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import LandingSection from "../components/LandingSection";
import WhoAreWe from "../components/WhoAreWe";

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
    </>
  );
};

export default HomePage;
