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
          to="services"
          smooth
          duration={500}
          offset={-65}
          onClick={() => setIsOpen(false)}
        >
          Services
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
          to="team"
          smooth
          duration={500}
          offset={-65}
          onClick={() => setIsOpen(false)}
        >
          Team
        </LinkItem>
        <LinkItem
          to="blog"
          smooth
          duration={500}
          offset={-65}
          onClick={() => setIsOpen(false)}
        >
          Blog
        </LinkItem>
        <LinkItem
          to="contact"
          smooth
          duration={500}
          offset={-65}
          onClick={() => setIsOpen(false)}
        >
          Contact
        </LinkItem>
      </LinksWrapper>
      <BtnWrapper>
        <SignupLink to="">Sign up</SignupLink>
      </BtnWrapper>
    </SidebarWrapper>
  );
};

export default SideBar;
