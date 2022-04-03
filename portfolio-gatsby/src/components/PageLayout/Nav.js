import React from "react";
import LinkButton from "../LinkButton";
import NavLink from "./NavLink";
import Icon from "../Icon";
import { css } from "@emotion/react";

const pages = [
  { id: "bio", name: "Bio" },
  { id: "experience", name: "Experience" },
  { id: "projects", name: "Projects" },
  { id: "blog", name: "Blog" },
];

const Nav = (props) => (
  <ul
    css={css`
      display: flex;
      list-style: none;
      padding: 1rem;
      align-items: center;
      font-weight: 600;
    `}
  >
    {pages.map(({ id, name }) => (
      <li key={id}>
        <NavLink href={"/" + id} active={props.active === id}>
          {name}
        </NavLink>
      </li>
    ))}
    <li>
      <LinkButton url="/Felix_Sebastian_Software_Engineer.pdf" download>
        <Icon icon="file-pdf" />
        &nbsp;&nbsp;&nbsp;Resume
      </LinkButton>
    </li>
  </ul>
);

export default Nav;
