import React from 'react';
//import './Navbar.css';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: ${props => props.theme.colors.secondary};
  padding: 10px 0;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
`;

const NavItem = styled.li`
`;

const NavLink = styled.a`
  color: ${props => props.theme.colors.white};
  font-weight: bold;
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavList>
        <NavItem><NavLink href="#home">Home</NavLink></NavItem>
        <NavItem><NavLink href="#about">About Me</NavLink></NavItem>
        <NavItem><NavLink href="#projects">Projects</NavLink></NavItem>
        <NavItem><NavLink href="#skills">Skills</NavLink></NavItem>
        <NavItem><NavLink href="#experience">Experience</NavLink></NavItem>
        <NavItem><NavLink href="#contact">Contact</NavLink></NavItem>
      </NavList>
    </Nav>
    
  );
}

export default Navbar;
