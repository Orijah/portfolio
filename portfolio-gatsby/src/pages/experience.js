import * as React from "react";
import PageLayout from "../components/PageLayout";
import BasicPage from "../components/BasicPage";
import gs from "../utils/gs";
import Stack from "../components/Stack";
import Inline from "../components/Inline";
import Text from "../components/Text";
import Icon from "../components/Icon";
import { css, useTheme } from "@emotion/react";
import focusOutlineCss from "../utils/focusOutlineCss";

const DotPoint = (props) => (
  <Text align="justify">
    <div
      css={css`
        display: flex;
      `}
    >
      <div>
        <Icon icon="caret-right" />
        <span
          css={css`
            display: inline-block;
            width: ${gs()};
          `}
        />
      </div>
      <div
        css={css`
          flex: 1;
        `}
      >
        {props.children}
      </div>
    </div>
  </Text>
);

const OintLink = (props) => {
  const theme = useTheme();

  return (
    <a
      target="_blank"
      css={css`
        text-decoration: none;
        color: ${theme.normal};
        display: flex;
        align-items: center;
        gap: ${gs(1)};
        &:focus {
          ${focusOutlineCss(theme.focus)}
          outline-offset: ${gs(1)};
        }
      `}
      href={props.url}
    >
      {props.children}
      <Text size={0}>
        <Icon icon="arrow-up-right-from-square" />
      </Text>
    </a>
  );
};

function ExperienceCard(props) {
  return (
    <Stack as="section" gap={4}>
      <Stack>
        <Inline gap={1}>
          <Text sans color="weak" weight={500} size={8}>
            {props.position} @
          </Text>
          <OintLink url={props.homepage}>
            <Text color="strong" sans weight="bold" size={8}>
              {props.company}
            </Text>
          </OintLink>
        </Inline>
        <Text sans color="weak" weight={500} size={4}>
          {props.start} {"\u2013"} {props.end}
        </Text>
      </Stack>
      {props.description}
    </Stack>
  );
}

const Experience = () => {
  return (
    <PageLayout>
      <BasicPage>
        <Stack gap={10}>
          <ExperienceCard
            position="Software Engineer"
            company="Culture Amp"
            start="October 2021"
            end="Present"
            description={
              <Stack gap={3}>
                <DotPoint>
                  Working on Culture Amp's market leading employee experience
                  platform, focusing on the core product offering of engagement
                  surveys.
                </DotPoint>
                <DotPoint>
                  Utilising tech such as Ruby on Rails, React, MongoDB, Apache
                  Kafka, AWS, Buildkite, Docker.
                </DotPoint>
                <DotPoint>
                  Working with event-driven microservices architecture and
                  event-sourced data storage patterns.
                </DotPoint>
                <DotPoint>
                  Participating in discovery work, project planning, sprint
                  planning, code reviews, pair programming and on-call roster.
                </DotPoint>
              </Stack>
            }
            homepage="https://cultureamp.com/"
          />
          <ExperienceCard
            position="Software Engineer"
            company="ActivePipe"
            start="June 2020"
            end="October 2021"
            description={
              <Stack gap={3}>
                <DotPoint>
                  Working on ActivePipe's automated email marketing platform for
                  real estate agents.
                </DotPoint>
                <DotPoint>
                  Utilising tech such as Ruby on Rails, React, GraphQL, MySQL,
                  Elasticsearch, AWS, Cypress, Buildkite, Docker.
                </DotPoint>
                <DotPoint>
                  Participating in sprint planning, code reviews and pair
                  programming.
                </DotPoint>
                <DotPoint>
                  Contributing to ActivePipe's custom design system bringing
                  improved speed and consistency to their frontend development
                  process.
                </DotPoint>
              </Stack>
            }
            homepage="https://activepipe.com/"
          />
          <ExperienceCard
            position="Software Engineer"
            company="Eagle Software"
            start="January 2018"
            end="June 2020"
            description={
              <Stack gap={3}>
                <DotPoint>
                  Working on Eagle Software's CRM platform for real estate
                  agents.
                </DotPoint>
                <DotPoint>
                  Utilising tech such as Ruby on Rails, React, React Native,
                  GraphQL, PostgreSQL, AWS, CircleCI, Docker.
                </DotPoint>
                <DotPoint>
                  Participating in sprint planning, code reviews and pair
                  programming.
                </DotPoint>
                <DotPoint>
                  Participating in product design, solution design and
                  establishing ways of working with react in Eagle's codebase.
                </DotPoint>
              </Stack>
            }
            homepage="https://geteagle.com.au/"
          />
        </Stack>
      </BasicPage>
    </PageLayout>
  );
};

export default Experience;
