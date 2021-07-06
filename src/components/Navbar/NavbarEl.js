import styled from "styled-components";
import { Link } from "react-scroll";
import { altBlue, blue, screenLg } from "../../constants";

export const NavbarWrapper = styled.nav`
  position: ${({ isScrollable }) => (isScrollable ? "fixed" : "absolute")};
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ isScrollable }) =>
    isScrollable ? "#fff" : "transparent"};
  z-index: 999;
  color: #fff;
  padding: 15px 0;
  transition: 0.5s all ease-in-out;
  border-bottom: ${({ isScrollable }) =>
    isScrollable ? "1px solid #dad9d9" : "none"};

  @media screen and (max-width: ${screenLg}) {
    background-color: #fff !important;
  }
`;

export const NavContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  cursor: pointer;
  text-transform: capitalize;
  font-weight: 600;
  letter-spacing: 2px;
  color: ${blue};
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${screenLg}) {
    display: none;
  }
`;

export const LinkItem = styled(Link)`
  margin: 0 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  color: ${altBlue};
`;

export const SignUp = styled.div`
  cursor: pointer;
  font-size: 0.9rem;
  background-color: ${blue};
  padding: 10px 30px;
  border-radius: 20px;
  text-transform: uppercase;
  font-weight: 600;
  transition: 0.5s ease;

  &:hover {
    background-color: ${altBlue};
  }

  @media screen and (max-width: ${screenLg}) {
    display: none;
  }
`;

export const ToggleMenu = styled.div`
  display: none;
  font-size: 20px;

  @media screen and (max-width: ${screenLg}) {
    display: block;
    color: #000;
    font-weigth: bold;
  }
`;
