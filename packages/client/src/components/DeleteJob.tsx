import React, { useCallback } from 'react';
import styled from 'styled-components';

import { graphql } from 'react-relay';
import { useModal } from '../contexts/modalContext';
import * as DeleteJobMutation from './mutations/DeleteJobMutation';
import { DeleteJobMutationResponse } from './__generated__/DeleteJobMutation.graphql';

const DELETE_JOB_MUTATION = graphql`
  mutation DeleteJobMutation($data: JobDeleteInput!) {
    JobDeleteMutation(input: $data) {
      jobId
      success
      error
    }
  }
`;

export interface Props {
  id: string;
}

const DeleteJob: React.FC<Props> = ({ id }) => {
  const { close } = useModal();

  const onError = useCallback((error: Error) => {
    // eslint-disable-next-line no-console
    console.error('An error occurred', error);
  }, []);

  const onCompleted = useCallback(
    ({ JobDeleteMutation }: DeleteJobMutationResponse) => {
      close();

      if (JobDeleteMutation.error) {
        // eslint-disable-next-line no-alert
        alert(`Error to delete this job ${JobDeleteMutation.error}`);
      } else {
        // eslint-disable-next-line no-alert
        alert(JobDeleteMutation.success);
      }
    },
    [close],
  );

  const handleDelete = useCallback(() => {
    DeleteJobMutation.commit(
      DELETE_JOB_MUTATION,
      { data: { id } },
      onCompleted,
      onError,
    );
  }, [id, onCompleted, onError]);

  return (
    <Wrapper>
      <h1>Do you really want to delete this job post?</h1>

      <div>
        <DeleteButton type="button" onClick={handleDelete}>
          Yes, I am sure
        </DeleteButton>

        <BackButton type="button" onClick={() => close()}>
          Nope, head back
        </BackButton>
      </div>
    </Wrapper>
  );
};

export default DeleteJob;

const Wrapper = styled.div`
  width: 500px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  text-align: center;

  div {
    width: 100%;

    button {
      width: 220px;
      height: 50px;
      border: 1px solid #f0f0f0;
      border-radius: 6px;
      color: #fff;
      outline: 0;
    }
  }
`;
const DeleteButton = styled.button`
  background: red;
`;

const BackButton = styled.button`
  background: #333;
`;
