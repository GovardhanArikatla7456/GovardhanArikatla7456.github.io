import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 50px 20px;
  background-color: #f9f9f9;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
`;

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ExperienceItem = styled.div`
  background-color: #3f8efc;
  color: white;
  padding: 20px;
  margin: 10px 0;
  border-radius: 10px;
  width: 80%;
  text-align: left;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background-color: #005bb5;
  }
`;

const Company = styled.h3`
  margin: 0;
  font-size: 1.5em;
`;

const Position = styled.h4`
  margin: 5px 0;
  font-size: 1.2em;
`;

const Details = styled.ul`
  margin: 10px 0 0 0;
  font-size: 1em;
  color: #ddd;
  list-style-type: disc;
  padding-left: 20px;
`;

const DetailItem = styled.li`
  margin-bottom: 5px;
`;

const Experience = () => {
  const experiences = [
    {
      company: 'JerseySTEM',
      position: 'Software Engineer',
      details: [
        'Volunteering for the development and maintainance of web applications using C#, ASP .NET technolgies.',
        'Collaborating with a team of developers to create innovative solutions for non-profit educational programs.',
        'Implementing Robotics Process Automation techniques to automate the daily business activities of the organization, resulting in the decresased redundant tasks.'
      ],
    },
    {
      company: 'Medintu Solutions',
      position: 'Software Engineer',
      details: [
        'Implemented microservices architecture for the development of an onboarding web application with the integration of Html, Css, Javascript, React JS, C#, ASP .NET Core and SQL technolgies.',
        'Worked on database management and API integration of the developed microservices using REST API services.',
        'Deployed the microservices into cloud using Amazon Web Services to maintain the flexibility and scalability of the web application.'
      ],
    },
    // Add more experiences as needed
  ];

  return (
    <Section id="experience" data-aos="fade-right">
      <Title>Experience</Title>
      <ExperienceList>
        {experiences.map((experience, index) => (
          <ExperienceItem key={index}>
            <Company>{experience.company}</Company>
            <Position>{experience.position}</Position>
            <Details>
              {experience.details.map((detail, idx) => (
                <DetailItem key={idx}>{detail}</DetailItem>
              ))}
            </Details>
          </ExperienceItem>
        ))}
      </ExperienceList>
    </Section>
  );
}

export default Experience;
