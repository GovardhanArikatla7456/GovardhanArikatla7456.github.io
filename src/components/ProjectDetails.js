import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.section`
  text-align: center;
  padding: 50px 20px;
`;

const Title = styled.h2`
  font-size: 2.5em;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 1.2em;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  color: ${props => props.theme.colors.text};
`;

const ProjectDetails = () => {
  const { id } = useParams();

  // You can replace this with data fetched from an API or other source
  const projectDetails = {
    1: {
      title: 'Project 1',
      description: 'Description of Project 1.',
    },
    2: {
      title: 'Project 2',
      description: 'Description of Project 2.',
    },
  };

  const project = projectDetails[id];

  return (
    <Section>
      <Title>{project?.title}</Title>
      <Text>{project?.description}</Text>
    </Section>
  );
}

export default ProjectDetails;
