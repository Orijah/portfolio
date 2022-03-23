import Logo from "./Logo";
import Nav from "./Nav";
import styled from "styled-components";

const Viewport = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  height: 100vh;
  overflow-y: auto;
  background-color: ${(p) => p.theme.bg};
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Page = styled.div`
  flex-grow: 1;
  position: relative;
  overflow-y: auto;
`;

export default function PageLayout(props) {
  return (
    <Viewport>
      <TopBar>
        <Logo />
        <Nav />
      </TopBar>
      <Page>{props.children}</Page>
    </Viewport>
  );
}
