import {
  Image,
  ImgWrap,
  PersonAbout,
  PersonJob,
  PersonName,
  SocialMedia,
  TeamPersonWrap,
} from "./WorkingTeamEl";

import {
  TwitterOutlined,
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
} from "@ant-design/icons";

const TeamPerson = ({ avatar, name, job, about }) => {
  return (
    <TeamPersonWrap>
      <ImgWrap>
        <Image src={avatar} />
        <SocialMedia>
          <TwitterOutlined />
          <FacebookFilled />
          <InstagramFilled />
          <LinkedinFilled />
        </SocialMedia>
      </ImgWrap>
      <PersonName>{name}</PersonName>
      <PersonJob>{job}</PersonJob>
      <PersonAbout>{about}</PersonAbout>
    </TeamPersonWrap>
  );
};

export default TeamPerson;
