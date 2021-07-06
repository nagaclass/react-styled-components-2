import { Container } from "../../constants";
import CustomLink from "../CustomLink";
import {
  Column,
  Description,
  Img,
  ImgWrapper,
  MainText,
  Row,
  SubText,
  WhoAreWeWrapper,
} from "./WhoAreWeEl";

import Image from "./../../images/svg-2.svg";

const WhoAreWe = () => {
  return (
    <WhoAreWeWrapper>
      <Container>
        <Row>
          <Column>
            <ImgWrapper>
              <Img src={Image} />
            </ImgWrapper>
          </Column>

          <Column>
            <SubText>who are we</SubText>
            <MainText>
              Expedita voluptas omnis cupiditate totam eveniet nobis sint iste.
              Dolores est repellat corrupti reprehenderit.
            </MainText>
            <Description>
              Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et.
              Inventore et et dolor consequatur itaque ut voluptate sed et.
              Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.
            </Description>
            <CustomLink text="Read More" to="" />
          </Column>
        </Row>
      </Container>
    </WhoAreWeWrapper>
  );
};
export default WhoAreWe;
