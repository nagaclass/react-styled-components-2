import { useState } from "react";

// Components
import Navbar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import LandingSection from "../components/LandingSection";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar setIsOpen={setIsOpen} />
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <LandingSection />
    </>
  );
};

export default HomePage;
