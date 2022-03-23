import styled from "styled-components";
import focusOutlineCss from "../utils/focusOutlineCss";
import gs from "../utils/gs";
import Text from "./Text";

const ButtonTag = styled.button`
  font-weight: normal;
  display: flex;
  outline: ${gs(1 / 4)} solid ${(p) => p.theme.normal};
  padding: ${gs()};
  cursor: pointer;
  transition: background-color ${(p) => p.theme.timings.quick} ease;
  &:hover {
    background-color: ${(p) => p.theme.highlight};
  }
  position: relative;
  &:focus::after {
    content: " ";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    ${focusOutlineCss}
  }
`;

export default function Button(props) {
  return (
    <ButtonTag>
      <Text sans size={props.size} as="span" weight={500} color="strong">
        {props.children}
      </Text>
    </ButtonTag>
  );
}
