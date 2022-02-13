import { css } from "styled-components";
import gs from "./gs";

const focusOutlineCss = css`
  outline: ${gs(1 / 4)} dashed ${(p) => p.theme.focus};
  outline-offset: -${gs(1 / 2)};
`;

export default focusOutlineCss;
