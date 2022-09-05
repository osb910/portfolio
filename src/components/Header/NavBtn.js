import {useContext, useState} from 'react';
import styled, {css} from 'styled-components';
import AppContext from '../../store/app-context';

const StyledNavBtn = styled.button`
  padding: 0.8em;
  background: transparent;
  border: 0;
  filter: drop-shadow(var(--ds));
  transition: filter 200ms ease-in-out;
  ${({isNavOpen}) => {
    return isNavOpen
      ? css`
          position: fixed;
          & .hamburger {
            transform: rotate(0.375turn);
          }

          & .hamburger::before {
            transform: rotate(90deg) translateX(-6px);
          }

          & .hamburger::after {
            opacity: 0;
          }

          & .hamburger,
          & .hamburger::before,
          & .hamburger::after {
            background-color: var(--clr-accent);
          }
        `
      : css`
          position: absolute;
          & .hamburger,
          & .hamburger::before,
          & .hamburger::after {
            background-color: var(--clr-dark);
          }
        `;
  }}
  right: 0.5em;
  top: 0.5em;
  z-index: 4;

  cursor: pointer;
  &:hover {
    filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 1));
  }

  & .hamburger,
  & .hamburger::before,
  & .hamburger::after {
    width: 2em;
    height: 3px;
    border-radius: 1em;
    transition: transform 250ms ease-in-out;
  }

  & .hamburger {
    display: block;
    position: relative;
  }

  & .hamburger::before,
  & .hamburger::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
  }

  & .hamburger::before {
    top: 6px;
  }
  & .hamburger::after {
    bottom: 6px;
  }

  @media (min-width: 800px) {
    display: none;
  }
`;

const NavBtn = () => {
  const {isNavOpen, onToggleNav} = useContext(AppContext);

  return (
    <StyledNavBtn
      aria-label='toggle navigation'
      isNavOpen={isNavOpen}
      onClick={() => onToggleNav(!isNavOpen && 'OPEN')}
    >
      <span className='hamburger'></span>
    </StyledNavBtn>
  );
};

export default NavBtn;
