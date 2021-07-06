import styled from "styled-components";
import { Link } from "react-scroll";
import { blue, screenLg, altBlue } from "../../constants";

export const SidebarWrapper = styled.aside`
  position: fixed;
  top: ${({ isOpen }) => (isOpen ? 0 : "-150%")};
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.7s all ease-in-out;
  text-align: center;
  @media screen and (min-width: ${screenLg}) {
    display: none !important;
  }
`;

export const CloseIcon = styled.div`
  svg {
    color: #fff;
    font-size: 2rem;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LinkItem = styled(Link)`
  color: #fff;
  margin-bottom: 20px;
  font-size: 1.2rem;
  transition: 0.3s ease;
  cursor: pointer;
  &:hover {
    color: ${blue};
  }
`;

export const BtnWrapper = styled.div`
  margin-top: 30px;
`;

export const SignupLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  background-color: ${blue};
  padding: 10px 30px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.8rem;
  transition: 0.5s ease;
  &:hover {
    background-color: ${altBlue};
  }
`;
