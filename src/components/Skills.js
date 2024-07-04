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

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ListItem = styled.li`
  background-color: #3f8efc;
  color: white;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  font-size: 1.2em;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background-color: #005bb5;
  }
`;

const Skills = () => {
  const skills = [
     'HTML', 'CSS','JavaScript', 'ReactJs', 'NodeJs', 'Python', 'Django framework', 'C#', 'ASP .NET Core', 'Java',
     'SQL', 'MongoDB', 'Docker', 'Kubernetes', 'Amazon Web Services', 'Git', 'CI/CD'
  ];

  return (
    <Section id="skills" data-aos="fade-right">
      <Title>Skills</Title>
      <List>
        {skills.map((skill, index) => (
          <ListItem key={index}>{skill}</ListItem>
        ))}
      </List>
    </Section>
  );
}

export default Skills;
