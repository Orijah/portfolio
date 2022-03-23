import styled from "@emotion/styled";
import focusOutlineCss from "../utils/focusOutlineCss";

const Link = styled.a`
  font-weight: bold;
  text-decoration: none;
  color: ${(p) => p.theme.link};
  &:focus {
    ${(p) => focusOutlineCss(p.theme.focus)}
    outline-offset: 0;
  }
`;

export default Link;
