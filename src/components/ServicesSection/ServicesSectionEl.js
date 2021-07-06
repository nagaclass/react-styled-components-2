import styled from "styled-components";
import { altBlue, blue, gray } from "../../constants";

export const ServicesSectionWrap = styled.section`
  margin: 100px 0;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
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

export const ServiceItemWrap = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
  transition: 0.4s ease-in-out;
  border-bottom: 3px solid ${({ color }) => (color ? color : blue)};
  border-radius: 0px 0px 10px 10px;
  margin-bottom: 15px;

  &:hover {
    background-color: ${({ color }) => (color ? color : blue)};

    svg,
    h3,
    span,
    p {
      color: #fff;
    }
  }
`;

export const IconWrap = styled.div`
  padding: 10px 15px;
  font-size: 35px;
  margin-bottom: 18px;
  background-color: ${({ color }) => (color ? color : blue)};
  color: #fff;
  border-radius: 5px;
`;

export const Title = styled.h3`
  color: #444444;
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

export const Desc = styled.p`
  color: ${gray};
  font-weight: 400;
`;

export const SeeMore = styled.span`
  cursor: pointer;
  color: ${({ color }) => (color ? color : blue)};
  font-weight: 600;
  margin-top: 20px;
`;
