import { useState } from "react";

// Components
import Navbar from "../cmponents/Navbar";
import SideBar from "../cmponents/Sidebar";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Navbar setIsOpen={setIsOpen} />
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default HomePage;
