import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  text-align: center;
  padding: 50px 20px;
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

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 250px;
  height: 250px;
  object-fit: cover;
  margin-top: 20px;
`;

const LinksContainer = styled.div`
  margin-top: 20px;
`;

const Link = styled.a`
  margin: 0 10px;
  color: ${props => props.theme.colors.primary};
  font-size: 1.5em;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;
const Button = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-size: 1.2em;
  border-radius: 5px;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

const Home = () => {
  return (
    <Section id="home" data-aos="fade-up">
      <Title>Welcome to my Portfolio</Title>
      <Subtitle> I am Govardhan Arikatla, a Software Engineer.</Subtitle>
      <ProfileImage src={`${process.env.PUBLIC_URL}/Govardhan.jpg`} alt="Govardhan Arikatla" />
      <LinksContainer>
        <Link href="https://www.linkedin.com/in/govardhan-arikatla-225ba5187/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </Link>
        <Link href="https://github.com/GovardhanArikatla7456" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </Link>
        <Link href="mailto:arikatlagovardhan00@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i>
        </Link>
      </LinksContainer>
      <Button href={`${process.env.PUBLIC_URL}/resume.pdf`} download>
        Download Resume
      </Button>
    </Section>
  );
}

export default Home;
