import { CloseOutlined } from "@ant-design/icons";
import {
  BtnWrapper,
  CloseIcon,
  LinkItem,
  LinksWrapper,
  SidebarWrapper,
  SignupLink,
} from "./SidebarEl";

const SideBar = ({ isOpen, setIsOpen }) => {
  return (
    <SidebarWrapper isOpen={isOpen}>
      <CloseIcon>
        <CloseOutlined onClick={() => setIsOpen(!isOpen)} />
      </CloseIcon>
      <LinksWrapper>
        <LinkItem
          to="home"
          smooth
          duration={500}
          offset={-65}
          onClick={() => setIsOpen(false)}
        >
          Home
        </LinkItem>
        <LinkItem
          to="about"
          smooth
          duration={500}
          offset={-65}
          onClick={() => setIsOpen(false)}
        >
          About
        </LinkItem>
        <LinkItem
          to="values"
          smooth
          duration={500}
          offset={-65}
          onClick={() => setIsOpen(false)}
        >
          Values
        </LinkItem>
        <LinkItem
          to="portfolio"
          smooth
          duration={500}
          offset={-65}
          onClick={() => setIsOpen(false)}
        >
          Portfolio
        </LinkItem>
        <LinkItem
          to="features"
          smooth
          duration={500}
          offset={-65}
          onClick={() => setIsOpen(false)}
        >
          Features
        </LinkItem>
        <LinkItem
          to="mobile"
          smooth
          duration={500}
          offset={-65}
          onClick={() => setIsOpen(false)}
        >
          Mobile
        </LinkItem>
        <LinkItem
          to="services"
          smooth
          duration={500}
          offset={-100}
          onClick={() => setIsOpen(false)}
        >
          Services
        </LinkItem>
        <LinkItem
          to="testimonial"
          smooth
          duration={500}
          offset={-100}
          onClick={() => setIsOpen(false)}
        >
          Testimonial
        </LinkItem>
        <LinkItem
          to="team"
          smooth
          duration={500}
          offset={-100}
          onClick={() => setIsOpen(false)}
        >
          Team
        </LinkItem>
      </LinksWrapper>
      <BtnWrapper>
        <SignupLink to="">Sign up</SignupLink>
      </BtnWrapper>
    </SidebarWrapper>
  );
};

export default SideBar;
