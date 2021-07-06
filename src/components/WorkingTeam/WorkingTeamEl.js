import styled from "styled-components";
import { altBlue, blue, screenMd } from "../../constants";

export const WrokinTeamWrap = styled.section`
  margin: 100px 0;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
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

export const SocialMedia = styled.div`
  position: absolute;
  top: 10px;
  right: -100%;
  border: 1px solid #5969f36b;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 14px 7px;
  transition: 0.3s ease-in-out;

  @media screen and (max-width: ${screenMd}) {
    right: 10px !important;
  }

  svg {
    color: ${blue};
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 10px;
  }
`;

export const TeamPersonWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  &:hover {
    ${SocialMedia} {
      right: 10px;
    }
  }
`;

export const ImgWrap = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const PersonName = styled.h3`
  color: ${altBlue};
  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: 600;
`;
export const PersonJob = styled.div`
  color: #444;
  font-size: 0.8rem;
  margin-bottom: 6px;
  font-weight: 400;
`;
export const PersonAbout = styled.p`
  color: #535354;
  font-weight: 400;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-size: 0.8rem;
  font-style: italic;
`;
