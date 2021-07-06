import styled from "styled-components";
import { altBlue, gray, screenMd } from "../../constants";

export const LandingSectionWrap = styled.section`
  height: 600px;
  display: flex;
  align-items: center;
  background-color: #fff;

  @media screen and (max-width: ${screenMd}) {
    padding-top: 100px;
  }
`;

export const ContentWrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
`;

export const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeadTitle = styled.h1`
  color: ${altBlue};
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 20px;

  @media screen and (max-width: ${screenMd}) {
    font-size: 2rem;
  }
`;
export const HeadSubTitle = styled.h3`
  color: ${gray};
  font-weight: 400;
  font-size: 2rem;

  @media screen and (max-width: ${screenMd}) {
    font-size: 0.8rem;
  }
`;

export const RightCol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LandingImg = styled.img`
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 300px;
  margin-top: 50px;
`;
