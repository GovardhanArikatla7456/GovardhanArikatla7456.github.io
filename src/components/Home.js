import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  text-align: center;
  background-color: ${props => props.theme.colors.background};
`;

const Title = styled.h1`
  font-size: 3em;
  color: ${props => props.theme.colors.secondary};
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  color: ${props => props.theme.colors.grey};
`;

const Home = () => {
  return (
    <Section id="home" data-aos="fade-up">
      <Title>Welcome to My Portfolio</Title>
      <Subtitle>Hi, I'm Govardhan Arikatla, a Software Engineer.</Subtitle>
    </Section>
  );
}

export default Home;
