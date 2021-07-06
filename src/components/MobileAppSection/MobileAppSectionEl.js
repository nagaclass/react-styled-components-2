import styled from "styled-components";
import { altBlue, gray, screenMd } from "../../constants";

export const MobileAppSectionWrapp = styled.section`
  margin: 100px 0;
`;

export const LargeTxt = styled.h1`
  color: ${altBlue};
  font-size: 2rem;
  text-align: center;
  margin-bottom: 40px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 30px;

  @media screen and (max-width: ${screenMd}) {
    grid-template-columns: 1fr;
  }
`;

export const ImageWrap = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${screenMd}) {
    margin-bottom: 30px;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
`;

export const RightSide = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

export const Item = styled.div`
  display: flex;
`;

export const Icon = styled.div`
  margin-right: 10px;

  svg {
    color: ${altBlue};
    font-size: 42px;
    margin-right: 13px;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainTxt = styled.h3`
  color: ${altBlue};
  margin-bottom: 10px;
  font-size: 1.5rem;
`;
export const SubTxt = styled.div`
  color: ${gray};
  font-weight: 400;
`;
