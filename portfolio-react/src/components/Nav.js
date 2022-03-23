import pages from "../pages";
import styled from "styled-components";
import Button from "./Button";
import NavLink from "./NavLink";
import Icon from "./Icon";

const NavBar = styled.ul`
  display: flex;
  list-style: none;
  padding: 1rem;
  align-items: center;
  font-weight: 600;
`;

export default function Nav(props) {
  return (
    <NavBar>
      {pages.map(({ id, name }) => (
        <li key={id}>
          <NavLink href={id} active={props.active === id}>
            {name}
          </NavLink>
        </li>
      ))}
      <li>
        <Button>
          <Icon icon="file-pdf" />
          &nbsp;&nbsp;&nbsp;Resume
        </Button>
      </li>
    </NavBar>
  );
}
