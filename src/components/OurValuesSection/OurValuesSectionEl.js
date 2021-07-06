import styled from "styled-components";
import { altBlue, blue, gray } from "../../constants";

export const OurValuesSectionWrapp = styled.section`
  margin: 30px 0;
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

export const ValuesRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
`;

export const ValuesItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
`;

export const ItemTitle = styled.h3`
  color: ${altBlue};
  font-weight: 600;
  margin: 15px 0;
  font-size: 1.5rem;
`;

export const Para = styled.p`
  color: ${gray};
  font-weight: 400;
`;
