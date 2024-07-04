import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

const Nav = styled.nav`
  background-color: ${props => props.theme.colors.secondary};
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1000; /* Ensure the navbar is on top */
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: ${props => props.theme.colors.secondary};
    position: absolute;
    top: 60px;
    left: 0;
    height: ${props => (props.open ? 'auto' : '0')};
    max-height: ${props => (props.open ? '100vh' : '0')}; /* Allow full viewport height when open */
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    z-index: 1000; /* Ensure the nav list is on top */
  }
`;

const NavItem = styled.li`
  margin: 0 10px;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  font-weight: bold;
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: ${props => props.theme.colors.white};
    margin: 5px 0;
    transition: 0.4s;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Nav>
      {isMobile ? (
        <>
          <Hamburger onClick={() => setIsOpen(!isOpen)}>
            <div style={{ transform: isOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'rotate(0)' }}></div>
            <div style={{ opacity: isOpen ? '0' : '1' }}></div>
            <div style={{ transform: isOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'rotate(0)' }}></div>
          </Hamburger>
          <NavList open={isOpen}>
            <NavItem><NavLink to="/" onClick={handleLinkClick}>Home</NavLink></NavItem>
            <NavItem><NavLink to="/about" onClick={handleLinkClick}>About Me</NavLink></NavItem>
            <NavItem><NavLink to="/projects" onClick={handleLinkClick}>Projects</NavLink></NavItem>
            <NavItem><NavLink to="/skills" onClick={handleLinkClick}>Skills</NavLink></NavItem>
            <NavItem><NavLink to="/experience" onClick={handleLinkClick}>Experience</NavLink></NavItem>
            <NavItem><NavLink to="/contact" onClick={handleLinkClick}>Contact</NavLink></NavItem>
          </NavList>
        </>
      ) : (
        <NavList>
          <NavItem><NavLink to="/">Home</NavLink></NavItem>
          <NavItem><NavLink to="/about">About Me</NavLink></NavItem>
          <NavItem><NavLink to="/projects">Projects</NavLink></NavItem>
          <NavItem><NavLink to="/skills">Skills</NavLink></NavItem>
          <NavItem><NavLink to="/experience">Experience</NavLink></NavItem>
          <NavItem><NavLink to="/contact">Contact</NavLink></NavItem>
        </NavList>
      )}
    </Nav>
  );
};

export default Navbar;
