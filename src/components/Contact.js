import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const Section = styled.section`
  text-align: center;
  padding: 50px 20px;
`;

const Title = styled.h2`
  font-size: 2.5em;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 20px;
`;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  font-size: 1.2em;
  margin: 10px 0 5px 0;
  align-self: flex-start;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1em;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 1em;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1.2em;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primary};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(
      'service_ggqmy2a', // Replace with your EmailJS service ID
      'template_mm49d7c', // Replace with your EmailJS template ID
      templateParams,
      'w0grmvymDG35tcq0N' // Replace with your EmailJS user ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Your message has been sent!');
      setFormData({ name: '', email: '', message: '' });
    }, (err) => {
      console.error('FAILED...', err);
      alert('Failed to send your message. Please try again later.');
    });
  };

  return (
    <Section id="contact" data-aos = "fade-right">
      <Title>Contact</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Name:</Label>
        <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        <Label htmlFor="email">Email:</Label>
        <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        <Label htmlFor="message">Message:</Label>
        <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required></Textarea>
        <Button type="submit">Send</Button>
      </Form>
    </Section>
  );
}

export default Contact;
