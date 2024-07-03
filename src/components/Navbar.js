import React from 'react';
import { Link } from 'react-router-dom';
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

const NavLink = styled(Link)`
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
        <NavItem><NavLink to="/">Home</NavLink></NavItem>
        <NavItem><NavLink to="/about">About Me</NavLink></NavItem>
        <NavItem><NavLink to="/projects">Projects</NavLink></NavItem>
        <NavItem><NavLink to="/skills">Skills</NavLink></NavItem>
        <NavItem><NavLink to="/experience">Experience</NavLink></NavItem>
        <NavItem><NavLink to="/contact">Contact</NavLink></NavItem>
      </NavList>
    </Nav>
  );
}

export default Navbar;
