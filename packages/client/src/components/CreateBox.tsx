import React, { useCallback } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AddToQueue } from '@styled-icons/boxicons-regular/AddToQueue';
import { useModal } from '../contexts/modalContext';

const CreateBox: React.FC = () => {
  const { open } = useModal();

  const handleCreate = useCallback(() => {
    open({ type: 'job-create' });
  }, [open]);

  return (
    <Wrapper onClick={handleCreate}>
      <IconWrapper>
        <AddToQueue />
      </IconWrapper>

      <p>Create a job post</p>
    </Wrapper>
  );
};

export default CreateBox;

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 290px;
  @media (max-width: 800px) {
    width: 100%;
  }
  background: #ffffff;
  border: 1px solid #e4e4e4;
  border-radius: 6px;
  outline: 0;

  p {
    font-weight: bold;
    font-size: 18px;
  }

  strong {
    font-size: 22px;
  }

  transition: transform 0.4s ease;

  &:hover {
    transform: translateX(10%);
  }

  &:active {
  }
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: #ff6f37;
    width: 24px;
    height: 24px;
  }

  border-radius: 50%;
`;
