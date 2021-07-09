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
        <LinkItem to="home" smooth duration={500}>
          <Logo to="home">Naga #2</Logo>
        </LinkItem>
        <NavLinks>
          <LinkItem to="home" smooth duration={500}>
            Home
          </LinkItem>
          <LinkItem to="about" smooth duration={500} offset={-50}>
            About
          </LinkItem>
          <LinkItem to="values" smooth duration={500} offset={-100}>
            Values
          </LinkItem>
          <LinkItem to="portfolio" smooth duration={500} offset={-100}>
            Portfolio
          </LinkItem>
          <LinkItem to="features" smooth duration={500} offset={-100}>
            Features
          </LinkItem>
          <LinkItem to="mobile" smooth duration={500} offset={-100}>
            Mobile
          </LinkItem>
          <LinkItem to="services" smooth duration={500} offset={-100}>
            Services
          </LinkItem>
          <LinkItem to="testimonial" smooth duration={500} offset={-100}>
            Testimonial
          </LinkItem>
          <LinkItem to="team" smooth duration={500} offset={-100}>
            Team
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
