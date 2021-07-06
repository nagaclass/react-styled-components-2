import styled from "styled-components";
import { altBlue, blue } from "../../constants";

export const TestimonialsWrapper = styled.section`
  margin: 100px 0;
`;

export const LightTxt = styled.h5`
  color: ${blue};
  text-transform: uppercase;
  margin-bottom: 5px;
  text-align: center;
`;

export const LargeTxt = styled.h1`
  color: ${altBlue};
  font-size: 3rem;
  text-align: center;
  margin-bottom: 40px;
`;

export const TestimonialItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 25px;
`;

export const StarsWrap = styled.div`
  display: flex;
  margin-bottom: 10px;

  svg {
    color: yellow;
  }
`;
export const Text = styled.p`
  color: #535354;
  font-weight: 400;
  margin-bottom: 20px;
  font-style: italic;
  letter-spacing: 1px;
  text-align: center;
`;

export const Name = styled.h4`
  color: #000;
`;

export const Job = styled.h6`
  color: #444444;
  font-weight: 600;
  margin-top: 5px;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
`;
