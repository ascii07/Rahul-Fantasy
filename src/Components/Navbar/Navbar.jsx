
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <NavLogo to="/">Rahul Fantasy</NavLogo>
      <NavMenu>
        
        <NavLink to="/about">About</NavLink>
        <NavLink to="/features">Features</NavLink>
        <NavLink to="/Contest">Contest</NavLink>
      </NavMenu>
      <NavActions>
        <NavButton to="/signup">Sign Up</NavButton>
        <NavButton to="/login">Login</NavButton>
      </NavActions>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: #333;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavLogo = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5em;
  font-weight: bold;
`;

const NavMenu = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    margin-top: 10px;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2em;

  &:hover {
    text-decoration: underline;
  }
`;

const NavActions = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    margin-top: 10px;
  }
`;

const NavButton = styled(Link)`
  color: white;
  background: #007bff;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1em;

  &:hover {
    background: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
    font-size: 0.9em;
  }
`;

export default Navbar;
