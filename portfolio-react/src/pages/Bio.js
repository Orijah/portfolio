import styled from "@emotion/styled";
import Text from "../components/Text";
import Stack from "../components/Stack";
import CenteredPage from "../components/CenteredPage";
import focusOutlineCss from "../utils/focusOutlineCss";

const VhSpace = styled.div`
  height: 12vh;
`;

const Bold = styled.a`
  font-weight: bold;
`;

const Link = styled.a`
  font-weight: bold;
  text-decoration: none;
  color: ${(p) => p.theme.link};
  &:focus {
    ${focusOutlineCss}
    outline-offset: 0;
  }
`;

export default function Bio() {
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
          . Based in <Bold as="strong">Melbourne, Australia</Bold>{" "}
          {"\uD83D\uDC28"}
        </Text>
      </Stack>
      <VhSpace />
    </CenteredPage>
  );
}
