import { CustomLinkWrapp } from "./CustomLinkEl";

const CustomLink = ({ text, to }) => {
  return <CustomLinkWrapp to={to}>{text}</CustomLinkWrapp>;
};

export default CustomLink;
