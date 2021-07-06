import { Container } from "../../constants";
import { LightTxt } from "../FeaturesSection/FeaturesSectionEl";
import data from "./data";
import ServiceItem from "./ServiceItem";
import { LargeTxt, Row, ServicesSectionWrap } from "./ServicesSectionEl";

const ServicesSection = () => {
  return (
    <ServicesSectionWrap>
      <Container>
        <LightTxt>services</LightTxt>
        <LargeTxt>Veritatis et dolores facere numquam et praesentium</LargeTxt>
        <Row>
          {data.map((item, idx) => (
            <ServiceItem key={idx} {...item} />
          ))}
        </Row>
      </Container>
    </ServicesSectionWrap>
  );
};

export default ServicesSection;
