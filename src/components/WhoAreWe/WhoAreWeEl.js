import styled from "styled-components";
import { altBlue, blue, gray, screenMd } from "../../constants";

export const WhoAreWeWrapper = styled.section`
  padding: 20px 0;

  @media screen and (max-width: ${screenMd}) {
    margin-top: 50px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubText = styled.h4`
  color: ${blue};
  text-transform: uppercase;
`;

export const MainText = styled.h2`
  color: ${altBlue};
`;

export const Description = styled.p`
  color: ${gray};
  font-size: 1.2rem;
  font-weight: 400;
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
