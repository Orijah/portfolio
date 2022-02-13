import styled from "styled-components";
import Stack from "../components/Stack";
import Text from "../components/Text";
import gs from "../utils/gs";

const Container = styled.section`
  margin: 0;
  padding: ${gs(4)};
  background-color: ${(p) => p.theme.bgInfo};
  border: 2px solid ${(p) => p.theme.strong};
  box-shadow: 0.2rem 0.2rem 10px ${(p) => p.theme.shadows};
`;

function ExperienceCard(props) {
  return (
    <Container>
      <Stack gap={4}>
        <Stack>
          <Text color="strong" sans weight="bold" size={6}>
            {props.company}
          </Text>
          <Text sans weight="bold">
            {props.position}, {props.start} - {props.end}
          </Text>
        </Stack>
        <Text align="justify">{props.description}</Text>
      </Stack>
    </Container>
  );
}

export default function Bio() {
  return (
    <Stack gap={4}>
      <ExperienceCard
        position="Software Engineer"
        company="Culture Amp"
        start="October 2021"
        end="Present"
        description="Working on Culture Amp's market leading employee experience platform, focusing on the core product offering of engagement surveys. Working with tech such as Ruby on Rails, React, MongoDB, Apache Kafka, AWS, Buildkite, Docker. Working with event-driven microservices architecture and event-sourced data patterns. Participating in discovery work, project planning, sprint planning, standups, code reviews, pair programming and on-call roster."
      />
      <ExperienceCard
        position="Software Engineer"
        company="ActivePipe"
        start="June 2020"
        end="October 2021"
        description="Working on ActivePipe's automated email marketing platform for real estate agents. Working with tech such as Ruby on Rails, React, GraphQL, MySQL, Elasticsearch, AWS, Cypress, Buildkite, Docker. Participating in sprint planning, standups, code reviews and pair programming. Contributing to ActivePipe's custom design system bringing improved speed and consistency to their frontend development process."
      />
      <ExperienceCard
        position="Software Engineer"
        company="Eagle Software"
        start="January 2018"
        end="June 2020"
        description="Working on Eagle Software's CRM platform for real estate agents. Working with tech such as Ruby on Rails, React, React Native, GraphQL, PostgreSQL, AWS, CircleCI, Docker. Participating in sprint planning, standups, code reviews and pair programming. Participating in product design and solution design."
      />
    </Stack>
  );
}
