import styled from "styled-components";
import { altBlue, blue, gray, screenMd } from "../../constants";

export const FeaturesSectionWrap = styled.section`
  margin: 80px 0;
`;

export const LightTxt = styled.h5`
  color: ${blue};
  text-transform: uppercase;
  margin-bottom: 5px;
  text-align: center;
`;

export const LargeTxt = styled.h1`
  color: ${altBlue};
  font-size: 2rem;
  text-align: center;
  margin-bottom: 40px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

export const ImageWrap = styled.div`
  @media screen and (max-width: ${screenMd}) {
    margin-bottom: 20px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const FeaturesPoints = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemTxt = styled.h4`
  color: ${altBlue};
  margin-left: 15px;
`;

export const Icon = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;

  svg {
    background-color: #ecf3ff;
    padding: 3px;
    font-size: 25px;
    transition: 0.4s ease-in-out;

    &:hover {
      background-color: ${blue};
      color: #fff;
    }
  }
`;
