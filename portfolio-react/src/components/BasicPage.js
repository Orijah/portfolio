import styled from "styled-components";
import gs from "../utils/gs";

const BasicPage = styled.div`
  margin: 0 auto;
  padding: ${gs(8)} 0;
  width: ${gs(100)};
  max-width: 70vw;
  max-width: calc(100vw - ${gs(24)});
`;

export default BasicPage;
