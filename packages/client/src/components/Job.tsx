/* eslint-disable import/no-extraneous-dependencies */
import React, { useCallback } from 'react';
import styled from 'styled-components';
import { createFragmentContainer, graphql } from 'react-relay';

import { Location } from '@styled-icons/entypo/Location';
import { DeleteBin } from '@styled-icons/remix-line/DeleteBin';
import Image from '../assets/JobImage.svg';
import { useModal } from '../contexts/modalContext';

import { Job_job } from './__generated__/Job_job.graphql';

interface Props {
  job: Job_job;
}

const Job: React.FC<Props> = ({ job }) => {
  const { open } = useModal();

  const handleDelete = useCallback(() => {
    // get the id of the job and commit the mutation
    open({
      type: 'job-delete',
      id: job._id,
    });
  }, [open, job._id]);

  const handleOpen = useCallback(() => {
    open({
      type: 'job-details',
      data: job,
    });
  }, [job, open]);

  return (
    <Wrapper>
      <Content>
        <Title>
          <div>
            <DeleteButton type="button" onClick={handleDelete}>
              <DeleteBin />
            </DeleteButton>
            <img src={Image} alt="job" />
          </div>
          <h3>{job.title}</h3>
        </Title>

        <CompanyDetails>
          <p>{job.company}</p>
          <small>
            <Location />
            {job.location}
          </small>
        </CompanyDetails>
      </Content>

      {/* This button should lead to the other page with the button id */}
      <Button type="button" onClick={handleOpen}>
        See More
      </Button>
    </Wrapper>
  );
};

const JobFrament = createFragmentContainer(Job, {
  job: graphql`
    fragment Job_job on Job {
      _id
      title
      company
      location
      salary
      seniority
      description
    }
  `,
});

export default JobFrament;

const Wrapper = styled.section`
  width: 290px;
  height: 316px;

  background: #ffffff;
  border: 1px solid #e4e4e4;
  border-radius: 4px;

  padding: 25px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  div {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 74px;
  }

  h3 {
    margin-top: 25px;
    font-weight: bold;
  }
`;

const DeleteButton = styled.button`
  width: 30px;
  background: transparent;
  border: 0;
  outline: 0;
  align-self: flex-end;

  svg {
    transition: fill 0.4s ease;
    fill: #d1d2d6;

    &:hover {
      fill: #e43f3f;
    }
  }
`;

const Button = styled.button`
  width: 133px;
  height: 40px;
  border: 1px solid #ff418c;
  background: #fce6dd;
  border-radius: 4px;
  color: #ff418c;
  outline: 0;
`;

const CompanyDetails = styled.div`
  margin-top: 15px;

  small {
    margin-top: 5px;
    display: flex;
    color: #333333;
    font-size: 12px;
    margin-top: 10px;

    svg {
      width: 13px;
      fill: #707070;
      margin-right: 10px;
    }
  }
`;
