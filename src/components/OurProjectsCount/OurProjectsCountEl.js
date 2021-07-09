import styled from "styled-components";
import { blue, gray } from "../../constants";

export const OurProjectsCountWrapper = styled.section`
  margin: 80px 0;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 30px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.div`
  font-size: 45px;
  margin-right: 14px;
  color: ${({ color }) => (color ? color : blue)};
`;

export const Count = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.span`
  font-weight: 400;
  text-transform: capitalize;
  color: ${gray};
  font-size: 0.8rem;
`;

export const Num = styled.span`
  color: ${blue};
  font-weight: 600;
  font-size: 1.5rem;
`;
