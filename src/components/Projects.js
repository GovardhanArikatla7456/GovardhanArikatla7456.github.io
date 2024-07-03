import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Projects.css';

const Section = styled.section`
  text-align: center;
  background-color: ${props => props.theme.colors.background};
`;

const Title = styled.h2`
  font-size: 2.5em;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 20px;
`;

const ProjectLink = styled(Link)`
  display: block;
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f7f7f7;
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }
`;

const Projects = () => {
  return (
    <Section id="projects" data-aos="fade-left">
      <Title>Projects</Title>
      <ProjectLink to="/projects/1">
        <h3>Project 1</h3>
        <p>Click to view details.</p>
      </ProjectLink>
      <ProjectLink to="/projects/2">
        <h3>Project 2</h3>
        <p>Click to view details.</p>
      </ProjectLink>
      <ProjectLink to="/projects/3">
        <h3>Project 3</h3>
        <p>Click to view details.</p>
      </ProjectLink>
    </Section>
  );
}

export default Projects;
