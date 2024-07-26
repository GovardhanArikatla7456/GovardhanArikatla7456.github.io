import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
//import './Projects.css';

const Section = styled.section`
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5em;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 20px;
`;

const ProjectLink = styled(Link)`
  display: block;
  margin: 20px 0;
  padding: 15px;
  border-radius: 5px;
  background: linear-gradient(45deg, #f7f7f7, #e0e0e0);
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
    color: ${props => props.theme.colors.white};
    transform: translateY(-2px);
  }
`;



const Projects = () => {
  return (
    <Section id="projects" data-aos="fade-left">
      <Title>Projects</Title>
      <ProjectLink to="/projects/1">
        <h3>Web application for movie name prediction based on movie scripts </h3>
      </ProjectLink>
      <ProjectLink to="/projects/2">
        <h3>Mobile Application Development</h3>
      </ProjectLink>
      <ProjectLink to="/projects/3">
        <h3>Web Application for auto CV generation</h3> 
      </ProjectLink>
    </Section>
  );
}

export default Projects;
