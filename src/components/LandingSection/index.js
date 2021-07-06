import {
  ContentWrapper,
  HeadSubTitle,
  HeadTitle,
  LandingImg,
  LandingSectionWrap,
  LeftCol,
  RightCol,
} from "./LandingSectionEl";

import Image from "../../images/svg-1.svg";
import CustomLink from "../CustomLink";

const LandingSection = () => {
  return (
    <LandingSectionWrap>
      <ContentWrapper>
        <LeftCol>
          <HeadTitle>
            We offer modern solutions for growing your business
          </HeadTitle>
          <HeadSubTitle>
            We are team of talented designers making websites with Bootstrap
          </HeadSubTitle>
          <CustomLink text="Get Started" to="/" />
        </LeftCol>
        <RightCol>
          <LandingImg src={Image} />
        </RightCol>
      </ContentWrapper>
    </LandingSectionWrap>
  );
};

export default LandingSection;
