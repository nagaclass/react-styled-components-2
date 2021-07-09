import { Container } from "../../constants";
import {
  Icon,
  Image,
  ImageWrap,
  Item,
  LargeTxt,
  MainTxt,
  MobileAppSectionWrapp,
  RightSide,
  Row,
  SubTxt,
  TextWrap,
} from "./MobileAppSectionEl";
import {
  AreaChartOutlined,
  CheckOutlined,
  PieChartOutlined,
  RiseOutlined,
} from "@ant-design/icons";
import Img from "./../../images/features-3.png";

const MobileAppSection = () => {
  return (
    <MobileAppSectionWrapp id="mobile">
      <Container>
        <LargeTxt>Ratione mollitia eos ab laudantium rerum beatae quo</LargeTxt>
        <Row>
          <ImageWrap>
            <Image src={Img} />
          </ImageWrap>
          <RightSide>
            <Item>
              <Icon>
                <CheckOutlined />
              </Icon>
              <TextWrap>
                <MainTxt>Corporis voluptates sit</MainTxt>
                <SubTxt>
                  Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                  laboris nisi ut aliquip
                </SubTxt>
              </TextWrap>
            </Item>
            <Item>
              <Icon>
                <RiseOutlined />
              </Icon>
              <TextWrap>
                <MainTxt>Corporis voluptates sit</MainTxt>
                <SubTxt>
                  Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                  laboris nisi ut aliquip
                </SubTxt>
              </TextWrap>
            </Item>
            <Item>
              <Icon>
                <PieChartOutlined />
              </Icon>
              <TextWrap>
                <MainTxt>Corporis voluptates sit</MainTxt>
                <SubTxt>
                  Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                  laboris nisi ut aliquip
                </SubTxt>
              </TextWrap>
            </Item>
            <Item>
              <Icon>
                <AreaChartOutlined />
              </Icon>
              <TextWrap>
                <MainTxt>Corporis voluptates sit</MainTxt>
                <SubTxt>
                  Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                  laboris nisi ut aliquip
                </SubTxt>
              </TextWrap>
            </Item>
          </RightSide>
        </Row>
      </Container>
    </MobileAppSectionWrapp>
  );
};

export default MobileAppSection;
