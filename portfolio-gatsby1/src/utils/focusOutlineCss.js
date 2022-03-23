import { css } from "@emotion/react";
import gs from "./gs";

const focusOutlineCss = (focus) => css`
  outline: ${gs(1 / 4)} dashed ${focus};
  outline-offset: -${gs(1 / 2)};
`;

export default focusOutlineCss;
