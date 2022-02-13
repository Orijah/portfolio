import styled from "styled-components";
import gs from "../utils/gs";

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => gs(p.gap)};
`;

export default Stack;
