import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Flag } from '@styled-icons/entypo/Flag';

interface Props {
  // Icon: string;
  description: string;
  count: number;
}

const Box: React.FC<Props> = ({ description, count }) => (
  <Wrapper>
    <IconWrapper>
      <Flag />
    </IconWrapper>

    <p>{description}</p>

    <strong>{count}</strong>
  </Wrapper>
);

export default Box;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100px;
  width: 290px;
  @media (max-width: 800px) {
    width: 100%;
  }
  padding: 0 10px;
  background: #ffffff;
  border: 1px solid #e4e4e4;
  border-radius: 6px;

  p {
    font-weight: bold;
    font-size: 18px;
    @media (max-width: 800px) {
      font-size: 1rem;
    }
  }

  strong {
    font-size: 22px;
    @media (max-width: 800px) {
      font-size: 1.125rem;
    }
  }
`;

const IconWrapper = styled.div`
  width: 3.125rem;
  height: 3.125rem;
  @media (max-width: 800px) {
    width: 2.25rem;
    height: 2.25rem;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  background: #ff6f37;

  svg {
    fill: #fff;
    width: 24px;
    height: 24px;
    @media (max-width: 800px) {
      width: 1.125rem;
      height: 1.125rem;
    }
  }

  border-radius: 50%;
`;
