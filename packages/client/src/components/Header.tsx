import React from 'react';
import styled from 'styled-components';
import Box from './Box';
import Promo from './Promo';
import CreateBox from './CreateBox';

const Header: React.FC = () => (
  <Wrapper>
    <Boxes>
      <Box description="Job Offers" count={10} />
      <CreateBox />
    </Boxes>

    <Promo />
  </Wrapper>
);

export default Header;

const Wrapper = styled.div`
  margin: 0 25px;
  justify-content: center;
  align-items: center;
`;

const Boxes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px 0px;
  width: 100%;
  max-width: 600px;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
