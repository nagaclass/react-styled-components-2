import styled from "styled-components";
import { Link } from "react-scroll";
import { altBlue, blue } from "../../constants";

export const CustomLinkWrapp = styled(Link)`
  background-color: ${blue};
  width: fit-content;
  padding: 10px 30px;
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
  transition: 0.4s ease;

  &:hover {
    background-color: ${altBlue};
  }
`;
