import * as React from "react";
import styled from "@emotion/styled";
import PageLayout from "../components/PageLayout";
import Text from "../components/Text";
import Stack from "../components/Stack";
import CenteredPage from "../components/CenteredPage";
import Link from "../components/Link";
import { css, useTheme } from "@emotion/react";

const VhSpace = styled.div`
  height: 12vh;
`;

const Content = () => {
  const theme = useTheme();

  console.log(theme);

  return (
    <CenteredPage>
      <Stack gap={6}>
        <Text>{"\uD83D\uDC4B"} Hi there, I am</Text>
        <Stack gap={4}>
          <Text sans weight="bold" color="strong" size={14}>
            Felix Sebastian,
          </Text>
          <Text sans tight weight={500} size={14}>
            full stack web developer.
          </Text>
        </Stack>
        <Text align="justify">
          I specialise in building web applications from end to end with a
          passion for elegant, human centred solutions. Currently creating a
          better world of work with{" "}
          <Link target="_blank" href="https://www.cultureamp.com/">
            Culture Amp
          </Link>
          . Based in{" "}
          <strong
            css={css`
              color: ${theme.strong};
              font-weight: bold;
            `}
          >
            Melbourne, Australia
          </strong>{" "}
          {"\uD83D\uDC28"}
        </Text>
      </Stack>
      <VhSpace />
    </CenteredPage>
  );
};

const Bio = () => {
  return (
    <PageLayout>
      <Content />
    </PageLayout>
  );
};

export default Bio;
