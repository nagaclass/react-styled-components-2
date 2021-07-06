import { StarFilled } from "@ant-design/icons";
import {
  Image,
  Job,
  Name,
  StarsWrap,
  TestimonialItemWrap,
  Text,
} from "./TestimonialsSectionEl";

const TestimonialItem = ({ text, name, job, avatar }) => {
  return (
    <TestimonialItemWrap>
      <StarsWrap>
        <StarFilled />
        <StarFilled />
        <StarFilled />
        <StarFilled />
        <StarFilled />
      </StarsWrap>
      <Text>{text}</Text>
      <Image src={avatar} />
      <Name>{name}</Name>
      <Job>{job}</Job>
    </TestimonialItemWrap>
  );
};

export default TestimonialItem;
