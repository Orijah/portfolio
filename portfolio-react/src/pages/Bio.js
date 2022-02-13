import styled from "styled-components";
import Text from "../components/Text";
import Stack from "../components/Stack";

const VhSpace = styled.div`
  height: 12vh;
`;

export default function Bio() {
  return (
    <>
      <Stack gap={6}>
        <Text>{"\uD83D\uDC4B"} Hi there, I am</Text>
        <Stack gap={4}>
          <Text sans weight="bold" color="strong" size={14}>
            Felix Sebastian,
          </Text>
          <Text sans size={14}>
            Full stack dev
          </Text>
        </Stack>
        <Text>
          I specialise in building web applications from end to end with a
          passion for elegant, human centred solutions. Based in Melbourne,
          Australia
        </Text>
      </Stack>
      <VhSpace />
    </>
  );
}
