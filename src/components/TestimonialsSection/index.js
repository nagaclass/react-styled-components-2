import { Container } from "../../constants";
import testimonialData from "./data";
import TestimonialItem from "./TestimonialItem";
import {
  LargeTxt,
  LightTxt,
  TestimonialsWrapper,
} from "./TestimonialsSectionEl";
import AliceCarousel from "react-alice-carousel";

const TestimonialsSection = () => {
  const items = testimonialData.map((item, idx) => (
    <TestimonialItem key={idx} {...item} />
  ));

  const responsive = {
    0: { items: 1 },
    768: { items: 1 },
    992: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <TestimonialsWrapper id="testimonial">
      <Container>
        <LightTxt>testimonials</LightTxt>
        <LargeTxt>What they are saying about us</LargeTxt>
        <AliceCarousel
          mouseTracking
          items={items}
          autoPlay
          autoPlayInterval={3000}
          infinite
          responsive={responsive}
          disableButtonsControls
        />
      </Container>
    </TestimonialsWrapper>
  );
};

export default TestimonialsSection;
