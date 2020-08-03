/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';
// import { Home } from '@styled-icons/boxicons-solid/Home';
import { UpArrow } from '@styled-icons/boxicons-solid/UpArrow';
import Image from '../assets/JobImage.svg';

const Sidebar: React.FC = () => (
  <Wrapper>
    <Topside>
      <img src={Image} alt="Logo" />
      <p>JobSpot</p>
    </Topside>

    <Bottomside>
      <UpArrow />
    </Bottomside>
  </Wrapper>
);

export default Sidebar;

const Wrapper = styled.aside`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  background: #ffffff;
  border: 1px solid #e4e4e4;

  padding-top: 0.625rem;
  padding-bottom: 1.25rem;

  width: 6rem;
  text-align: center;
  @media (max-width: 800px) {
    order: 1;
    flex-direction: row;
    width: 100%;
    padding: 10px;
  }
`;

const Topside = styled.div`
  img {
    width: 3.125rem;
  }

  p {
    font-size: 1.125rem;
    color: #3333;
    margin-top: 5px;
  }
`;

const Bottomside = styled.div`
  display: flex;
  flex-direction: column;
  height: 3.75rem;
  justify-content: space-around;

  svg {
    transition: fill 0.4s ease;
    fill: #d1d2d6;
    width: 1.5rem;
    height: 1.5rem;
  }

  svg:hover {
    fill: #433490;
  }
`;
