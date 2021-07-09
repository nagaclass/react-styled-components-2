import styled from "styled-components";
import { Link } from "react-scroll";

export const ScrollTopTopWrap = styled(Link)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  border: 30px;
  background: #5969f3;
  font-size: 17px;
  padding: 7px 10px;
  cursor: pointer;
  color: #fff;
  border-radius: 3px;
  display: ${({ isScrollable }) => (isScrollable ? "block" : "none")};
`;
