import styled from "styled-components";

const ButtonElement = styled.button`
  display: flex;
`;

export default function Buttom(props) {
  return <ButtonElement>{props.children}</ButtonElement>;
}
