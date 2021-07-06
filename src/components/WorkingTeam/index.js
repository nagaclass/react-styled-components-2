import { Container } from "../../constants";
import teamPersons from "./data";
import TeamPerson from "./TeamPerson";
import { LargeTxt, LightTxt, Row, WrokinTeamWrap } from "./WorkingTeamEl";

const WorkingTeam = () => {
  return (
    <WrokinTeamWrap>
      <Container>
        <LightTxt>team</LightTxt>
        <LargeTxt>Our hard working team</LargeTxt>
        <Row>
          {teamPersons.map((item, idx) => (
            <TeamPerson key={idx} {...item} />
          ))}
        </Row>
      </Container>
    </WrokinTeamWrap>
  );
};

export default WorkingTeam;
