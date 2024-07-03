import React from 'react';
//import './About.css';
import styled from 'styled-components';

const Section = styled.section`
  text-align: center;
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
const About= () => {
  return (
    <Section id="about" data-aos = "fade-right">
      <Title>About Me</Title>
      <Text>Software Engineer with 2 years of professional experience in 
        software applications development with multiple tech stacks in 
        front-end and back-end development. Enthusiastic to solve and get wide exposure with the challenges from 
        diverse work culture and organizations. Deployed </Text>
    </Section>
  );
}

export default About;
