import styled from "styled-components";
import Icon from "./Icon";
import Popover from "./Popover";
import focusOutlineCss from "../utils/focusOutlineCss";
import gs from "../utils/gs";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 1rem;
  bottom: 1rem;
  gap: 1rem;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
  width: ${gs(6)};
  align-items: stretch;
  outline: 2px solid ${(p) => p.theme.normal};
`;

const Item = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  color: ${(p) => p.theme.strong};
  text-align: center;
  transition: background-color ${(p) => p.theme.timings.quick} ease;
  outline: none;
  &:focus {
    ${focusOutlineCss}
  }
  &:hover {
    background-color: ${(p) => p.theme.highlight};
  }
  ${Section} >*:first-child & {
    padding-top: 1rem;
  }
  ${Section} >*:last-child & {
    padding-bottom: 1rem;
    border-bottom: none;
  }
`;

export default function Palette(props) {
  return (
    <Container>
      <Section>
        <Popover text="@felixsebastian">
          <Item as="a" target="_blank" href="https://github.com/felixsebastian">
            <Icon icon={["fab", "github"]} />
          </Item>
        </Popover>
        <Popover text="@felixs256">
          <Item
            as="a"
            target="_blank"
            href="https://www.linkedin.com/in/felixs256"
          >
            <Icon icon={["fab", "linkedin"]} />
          </Item>
        </Popover>
        <Popover text="@felixs256">
          <Item as="a" target="_blank" href="https://twitter.com/felixs256">
            <Icon icon={["fab", "twitter"]} />
          </Item>
        </Popover>
        <Popover text="hi@felixsebastian.dev">
          <Item as="a" target="_blank" href="mailto:hi@felixsebastian.dev">
            <Icon icon="envelope" />
          </Item>
        </Popover>
      </Section>
      <Section>
        <Popover
          text={props.highContrast ? "Beautiful theme" : "High contrast theme"}
        >
          <Item as="button" onClick={props.handleHighContrast}>
            <Icon
              icon={props.highContrast ? "palette" : "circle-half-stroke"}
            />
          </Item>
        </Popover>
      </Section>
    </Container>
  );
}
