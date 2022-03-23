import styled from "@emotion/styled";
import gs from "../utils/gs";

const BasicPage = styled.div`
  margin: 0 auto;
  padding: ${gs(10)} 0;
  width: ${gs(100)};
  max-width: 70vw;
  max-width: calc(100vw - ${gs(24)});
`;

export default BasicPage;
