import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Header from './Header';

const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Sidebar />
      <Main>
        <Topbar />
        <Header />
        <Content>{children}</Content>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  background: #f3f3f3;
  width: 100vw;
  height: 100vh;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  margin-left: 25px;
`;

export default Layout;
