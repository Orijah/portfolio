import { useState } from "react";
import styled from "styled-components";
import { usePopper } from "react-popper";
import gs from "../utils/gs";

const Thing = styled.p`
  color: ${(p) => p.theme.strong};
  background-color: ${(p) => p.theme.bgInfo};
  outline: ${gs(1 / 4)} solid ${(p) => p.theme.normal};
  padding: 0 0.5rem;
  visibility: hidden;
  white-space: nowrap;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  &:hover > ${Thing} {
    visibility: visible;
  }
`;

export default function Popover(props) {
  const [referenceElementRef, setreferenceElementRef] = useState(null);
  const [popoverElementRef, setpopoverElementRef] = useState(null);

  const { styles, attributes } = usePopper(
    referenceElementRef,
    popoverElementRef,
    {
      placement: "right-start",
      modifiers: [{ name: "offset", options: { offset: [0, gs(2, false)] } }],
    }
  );

  return (
    <>
      <Wrapper ref={setreferenceElementRef}>
        {props.children}
        <Thing
          style={styles.popper}
          {...attributes.popper}
          ref={setpopoverElementRef}
        >
          <p>{props.text}</p>
        </Thing>
      </Wrapper>
    </>
  );
}
