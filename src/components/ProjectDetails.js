import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.section`
  text-align: center;
  padding: 50px 20px;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  font-size: 2.5em;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 20px;
`;

const Text = styled.div`
  font-size: 1.2em;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  color: ${props => props.theme.colors.text};
  text-align: left;
`;

const DescriptionList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  margin-top: 20px;
`;

const DescriptionItem = styled.li`
  margin-bottom: 10px;
`;


const ProjectDetails = () => {
  const { id } = useParams();
  const projectDetails = {
    1: {
      title: 'Web application for movie name prediction based on movie scripts',
      description: [
        'Engineered and led the deployment of a groundbreaking web application to analyze text from 50 movie scripts, and predicting the movie names from that text.',
        'Trained a machine learning model using movie scripts data to predict movie names with text from movie script as user input data.',
        'Selected and deployed the model with 80% prediction accuracy.'
      ],
      image: 'path/to/movie-prediction-app.jpg' 
    },
    2: {
      title: 'Mobile Application Development',
      description: [
        'Developed the "Pass the Challenge" game application during a university mobile application technologies workshop using Flutter, Figma for front end development and Android-SDK, Java programming language, and MongoDB for backend server implementation to store user stories.',
        'Achieved 2nd place out of 25 teams in the workshop.',
        'Conducted comprehensive real-world testing of the Pass the challenge game application in a university setting, included actionable feedback from 250 student participants via survey questionnaires to drive iterative improvements and enhanced user experience.'
      ],
      image: 'path/to/pass-the-challenge-app.jpg'
    },
    3: {
      title: 'Web Application for auto CV generation' ,
      description: [
        'Developed an web application for generating the resume based on the user profile data, and specific to the job role.',
        'Implemented the application using html, css, javascript, python, django framework technologies and utilized sqlite services for the backend.'
      ],
    },
  };

  const project = projectDetails[id];

  return (
    <Section data-aos = 'zoom-in'>
      <Title>{project?.title} </Title>
      <Text>
        {project?.description && (
          <DescriptionList>
            {project.description.map((item, index) => (
              <DescriptionItem key={index}>{item}</DescriptionItem>
            ))}
          </DescriptionList>
        )}
      </Text>
    </Section>
  );
}

export default ProjectDetails;
