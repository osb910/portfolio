import styled from 'styled-components';
import NavBtn from './Header/NavBtn';
import Navigation from './Header/Navigation';
import logo from '../assets/img/my-logo.png';
import {useState} from 'react';

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: rgba(40, 40, 40, 0.7);

  & .logo {
    margin: 0.2em 0.4em;
    max-width: 100px;
    box-shadow: 0, 0, 10px rgba;
  }

  & .logo img {
    filter: drop-shadow(var(--ds));
  }

  @media (min-width: 800px) {
    position: fixed;
    z-index: 3;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className='logo'>
        <img src={logo} alt='' />
      </div>
      <Navigation />
      <NavBtn />
    </StyledHeader>
  );
};

export default Header;
