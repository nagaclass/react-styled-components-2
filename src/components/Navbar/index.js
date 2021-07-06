import { useEffect, useState } from "react";

import {
  LinkItem,
  Logo,
  NavbarWrapper,
  NavContainer,
  NavLinks,
  SignUp,
  ToggleMenu,
} from "./NavbarEl";

import { MenuOutlined } from "@ant-design/icons";

const Navbar = ({ setIsOpen }) => {
  const [isScrollable, setIsScrollable] = useState(false);

  const onScrollChange = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        setIsScrollable(true);
      } else {
        setIsScrollable(false);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScrollChange);
  }, []);

  return (
    <NavbarWrapper isScrollable={isScrollable}>
      <NavContainer>
        <Logo>Naga #2</Logo>
        <NavLinks>
          <LinkItem to="home" smooth duration={500}>
            Home
          </LinkItem>
          <LinkItem to="about" smooth duration={500}>
            About
          </LinkItem>
          <LinkItem to="services" smooth duration={500}>
            Services
          </LinkItem>
          <LinkItem to="portfolio" smooth duration={500}>
            Portfolio
          </LinkItem>
          <LinkItem to="team" smooth duration={500}>
            Team
          </LinkItem>
          <LinkItem to="blog" smooth duration={500}>
            Blog
          </LinkItem>
          <LinkItem to="contact" smooth duration={500}>
            Contact
          </LinkItem>
        </NavLinks>
        <SignUp>Sign Up</SignUp>
        <ToggleMenu>
          <MenuOutlined onClick={() => setIsOpen(true)} />
        </ToggleMenu>
      </NavContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
