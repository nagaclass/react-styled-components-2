import { Container } from "../../constants";
import { CheckOutlined } from "@ant-design/icons";
import {
  FeaturesPoints,
  FeaturesSectionWrap,
  Icon,
  Image,
  ImageWrap,
  Item,
  ItemTxt,
  LargeTxt,
  LightTxt,
  Row,
} from "./FeaturesSectionEl";
import Img from "./../../images/svg-6.svg";

const FeaturesSection = () => {
  return (
    <FeaturesSectionWrap>
      <Container>
        <LightTxt>our features</LightTxt>
        <LargeTxt>Laboriosam et omnis fuga quis dolor direda fara</LargeTxt>
        <Row>
          <ImageWrap>
            <Image src={Img} />
          </ImageWrap>
          <FeaturesPoints>
            <Item>
              <Icon>
                <CheckOutlined />
                <ItemTxt>Eos aspernatur rem</ItemTxt>
              </Icon>
            </Item>
            <Item>
              <Icon>
                <CheckOutlined />
                <ItemTxt>Facilis neque ipsa</ItemTxt>
              </Icon>
            </Item>
            <Item>
              <Icon>
                <CheckOutlined />
                <ItemTxt>Volup amet voluptas</ItemTxt>
              </Icon>
            </Item>
            <Item>
              <Icon>
                <CheckOutlined />
                <ItemTxt>Rerum omnis sint</ItemTxt>
              </Icon>
            </Item>
            <Item>
              <Icon>
                <CheckOutlined />
                <ItemTxt>Alias possimus</ItemTxt>
              </Icon>
            </Item>
            <Item>
              <Icon>
                <CheckOutlined />
                <ItemTxt>Repellendus mollitia</ItemTxt>
              </Icon>
            </Item>
          </FeaturesPoints>
        </Row>
      </Container>
    </FeaturesSectionWrap>
  );
};

export default FeaturesSection;
