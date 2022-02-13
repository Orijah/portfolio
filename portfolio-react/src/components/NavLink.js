import { useLocation } from "react-router";
import styled, { css } from "styled-components";
import gs from "../utils/gs";
import Text from "./Text";

const activeCss = css`
  width: 100%;
  left: 0;
  opacity: 1;
`;

const Underline = styled.span`
  display: block;
  height: 2px;
  width: 0%;
  position: absolute;
  bottom: -${gs(1)};
  left: -12px;
  right: 0;
  background-color: ${(p) => p.theme.normal};
  opacity: 0;
  transition: width ${(p) => p.theme.timings.quick} ease-in,
    left ${(p) => p.theme.timings.quick} ease-in,
    opacity ${(p) => p.theme.timings.quick} ease-in;
  ${(props) => (props.active ? activeCss : "")}
`;

const LinkTag = styled.a`
  margin-right: 2rem;
  position: relative;
  outline: none;
  user-select: none;
  text-decoration: none;
  outline: none;
  display: block;
  &:hover ${Underline}, &:focus ${Underline} {
    ${activeCss}
  }
`;

export default function NavLink(props) {
  const active = useLocation().pathname === "/" + props.href;

  return (
    <LinkTag as={active ? "p" : "a"} href={active ? undefined : props.href}>
      <Text color="strong" weight="bold">
        {props.children}
      </Text>
      <Underline active={active} />
    </LinkTag>
  );
}
