import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Star } from '@styled-icons/boxicons-regular/Star';

const Promo: React.FC = () => (
  <Wrapper>
    <Informations>
      <IconWrapper>
        <Star />
      </IconWrapper>

      <Texts>
        <h3>See jobs where you&#39;d be a top applicant</h3>
        <small>Try free for 6 months</small>
      </Texts>
    </Informations>

    <button type="button">GO PRO</button>
  </Wrapper>
);

export default Promo;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
  }

  background: rgb(241, 137, 44);
  background: linear-gradient(
    98deg,
    rgba(241, 137, 44, 1) 0%,
    rgba(255, 65, 140, 1) 100%
  );

  border-radius: 6px;

  button {
    width: 13.75rem;
    height: 3.125rem;
    background: #ffffff;
    border-radius: 6px;
    border: 0;
    color: #333333;
    font-weight: bold;
    font-size: 1.125rem;
    outline: 0;
    transition: background 0.3s ease;
    margin-right: 1.25rem;
    @media (max-width: 800px) {
      margin-bottom: 1.25rem;
      margin-right: 0;

      font-size: 1rem;
    }

    &:hover {
      background: #eee8e8;
    }
  }
`;

const IconWrapper = styled.div`
  height: 3.125rem;
  width: 3.125rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  background: rgb(255, 221, 38);
  background: linear-gradient(
    98deg,
    rgba(255, 221, 38, 1) 0%,
    rgba(255, 187, 49, 1) 100%
  );

  svg {
    fill: #fff;
    height: 100%;
    width: 100%;
    align-self: center;
  }
`;

const Informations = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

const Texts = styled.div`
  margin-left: 1rem;
  color: #fff;
  padding: 1.25rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 800px) {
    margin-left: 20px;
  }

  h3 {
    font-weight: bold;
    font-size: 1.25rem;
    margin: 0;
    @media (max-width: 800px) {
      margin-bottom: 1.25rem;
      font-size: 1.125rem;
      margin: 0;
    }
  }

  small {
    font-weight: 400px;
    font-size: 1rem;
  }
`;
