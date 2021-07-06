import { Container } from "../../constants";
import {
  Image,
  ItemTitle,
  LargeTxt,
  LightTxt,
  OurValuesSectionWrapp,
  Para,
  ValuesItem,
  ValuesRow,
} from "./OurValuesSectionEl";
import Img1 from "./../../images/svg-3.svg";
import Img2 from "./../../images/svg-4.svg";
import Img3 from "./../../images/svg-5.svg";

const OurValuesSection = () => {
  return (
    <OurValuesSectionWrapp>
      <Container>
        <LightTxt>our values</LightTxt>
        <LargeTxt>Odit est perspiciatis laborum et dicta</LargeTxt>
        <ValuesRow>
          <ValuesItem>
            <Image src={Img1} />
            <ItemTitle>Ad cupiditate sed est odio</ItemTitle>
            <Para>
              Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur
              sit. Et veritatis id.
            </Para>
          </ValuesItem>
          <ValuesItem>
            <Image src={Img2} />
            <ItemTitle>Voluptatem voluptatum alias</ItemTitle>
            <Para>
              Repudiandae amet nihil natus in distinctio suscipit id. Doloremque
              ducimus ea sit non.
            </Para>
          </ValuesItem>
          <ValuesItem>
            <Image src={Img3} />
            <ItemTitle>Fugit cupiditate alias nobis.</ItemTitle>
            <Para>
              Quam rem vitae est autem molestias explicabo debitis sint. Vero
              aliquid quidem commodi.
            </Para>
          </ValuesItem>
        </ValuesRow>
      </Container>
    </OurValuesSectionWrapp>
  );
};

export default OurValuesSection;
