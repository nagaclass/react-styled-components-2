import { Container } from "../../constants";
import {
  Count,
  Icon,
  Item,
  Num,
  OurProjectsCountWrapper,
  Row,
  Text,
} from "./OurProjectsCountEl";
import {
  SmileOutlined,
  ProjectOutlined,
  FieldTimeOutlined,
  AudioOutlined,
} from "@ant-design/icons";

const OurProjectsCount = () => {
  return (
    <OurProjectsCountWrapper id="portfolio">
      <Container>
        <Row>
          <Item>
            <Icon color="#5969f3">
              <SmileOutlined />
            </Icon>
            <Count>
              <Num>832</Num>
              <Text>happy clients</Text>
            </Count>
          </Item>
          <Item>
            <Icon color="#ee6c20">
              <ProjectOutlined />
            </Icon>
            <Count>
              <Num>322</Num>
              <Text>Projects</Text>
            </Count>
          </Item>
          <Item>
            <Icon color="#15be56">
              <FieldTimeOutlined />
            </Icon>
            <Count>
              <Num>423</Num>
              <Text>Hours of support</Text>
            </Count>
          </Item>
          <Item>
            <Icon color="#bc0d55">
              <AudioOutlined />
            </Icon>
            <Count>
              <Num>13</Num>
              <Text>hard workers</Text>
            </Count>
          </Item>
        </Row>
      </Container>
    </OurProjectsCountWrapper>
  );
};

export default OurProjectsCount;
