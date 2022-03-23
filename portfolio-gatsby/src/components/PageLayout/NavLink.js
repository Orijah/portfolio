import React from "react";
import { css } from "@emotion/react";
import { useLocation } from "@reach/router";
import styled from "@emotion/styled";
import gs from "../../utils/gs";
import Text from "../Text";

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
  left: -24px;
  right: 0;
  background-color: ${(p) => p.theme.normal};
  opacity: 0;
  transition: width ${(p) => p.theme.timings.quick} ease-in,
    left ${(p) => p.theme.timings.quick} ease-in,
    opacity ${(p) => p.theme.timings.quick} cubic-bezier(0.7, 0, 0.84, 0);
  ${(props) => (props.active ? activeCss : "")}
`;

const linkCss = css`
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
  const active = useLocation().pathname === props.href;

  const content = (
    <>
      <Text color="strong" weight={500} sans>
        {props.children}
      </Text>
      <Underline active={active} />
    </>
  );

  if (active) return <p css={linkCss}>{content}</p>;

  return (
    <a css={linkCss} href={props.href}>
      {content}
    </a>
  );
}
