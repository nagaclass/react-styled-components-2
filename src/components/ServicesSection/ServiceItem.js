import {
  Desc,
  IconWrap,
  SeeMore,
  ServiceItemWrap,
  Title,
} from "./ServicesSectionEl";
import { CommentOutlined } from "@ant-design/icons";

const ServiceItem = ({ color, Icon, title, desc }) => {
  return (
    <ServiceItemWrap color={color}>
      <IconWrap color={color}>
        <CommentOutlined />
      </IconWrap>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
      <SeeMore color={color}>See More</SeeMore>
    </ServiceItemWrap>
  );
};

export default ServiceItem;
