import React from "react";
import focusOutlineCss from "../utils/focusOutlineCss";
import { css, useTheme } from "@emotion/react";
import gs from "../utils/gs";
import Text from "./Text";

const LinkButton = (props) => {
  const theme = useTheme();

  return (
    <a
      css={css`
        position: relative;
        font-weight: normal;
        display: flex;
        outline: ${gs(1 / 4)} solid ${theme.normal};
        padding: ${gs()};
        cursor: pointer;
        transition: background-color ${theme.timings.quick} ease;
        text-decoration: none;
        &:hover {
          background: ${theme.hover};
        }
        &:focus::before {
          content: " ";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          ${focusOutlineCss(theme.focus)}
        }
      `}
      href={props.url}
      download={props.download}
    >
      <Text
        css={css`
          position: relative;
        `}
        sans
        size={props.size}
        as="span"
        weight={500}
        color="strong"
      >
        {props.children}
      </Text>
    </a>
  );
};

export default LinkButton;
