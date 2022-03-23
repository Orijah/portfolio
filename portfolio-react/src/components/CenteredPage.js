import styled from "styled-components";
import gs from "../utils/gs";

const CenteredPage = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  width: ${gs(100)};
  max-width: 70vw;
  max-width: calc(100vw - ${gs(24)});
`;

export default CenteredPage;
