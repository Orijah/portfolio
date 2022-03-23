import styled from "styled-components";
import gs from "../utils/gs";

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${(p) => gs(p.gap)};
`;

export default Flex;
