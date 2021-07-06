import styled from "styled-components";

export const blue = "#5969f3";
export const altBlue = "#012970";
export const gray = "#535354";

// Break Points
export const screenSm = "576px";
export const screenMd = "768px";
export const screenLg = "992px";
export const screenXl = "1200px";

// Styles
export const Container = styled.div`
  width: 85%;
  margin: 50px auto;

  @media screen and (max-width: ${screenMd}) {
    width: 95%;
  }
`;
