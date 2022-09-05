import styled, {css} from 'styled-components';
import NavItem from './NavItem';
import data from '../../store/content/header';
import {useContext, useState} from 'react';
import AppContext from '../../store/app-context';

const StyledNavigation = styled.nav`
  position: fixed;
  width: 100%;
  background: rgba(48, 48, 48, 0.95);
  color: var(--clr-light);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  ${({isNavOpen}) => {
    return isNavOpen
      ? css`
          transform: translateX(0%);
        `
      : css`
          transform: translateX(100%);
        `;
  }}
  /* transform: ${({isNavOpen}) => !isNavOpen && 'translateX(100%)'}; */

  transition: transform 250ms cubic-bezier(0.5, 0, 0.5, 1);

  & .nav__list {
    list-style: none;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  @media (min-width: 800px) {
    position: relative;
    background-color: transparent;
    transform: translateX(0%);

    & .nav__list {
      width: 100%;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;

      /* height: unset; */
    }
  }
`;

const Navigation = () => {
  const {lang, isNavOpen, onToggleNav} = useContext(AppContext);
  const uiText = data['en'];
  const scrollSmoothly = evt => {
    evt.preventDefault();
    if (evt.target.classList.contains('nav__link')) {
      const id = evt.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({behavior: 'smooth'});
      onToggleNav();
    }
  };

  return (
    <StyledNavigation isNavOpen={isNavOpen} onClick={scrollSmoothly}>
      <ul className='nav__list'>
        <NavItem path={'#home'} text={uiText.navHome} />
        <NavItem path={'#about'} text={uiText.navAbout} />
        <NavItem path={'#skills'} text={uiText.navSkills} />
        <NavItem path={'#work'} text={uiText.navWork} />
        <NavItem path={'#contact'} text={uiText.navContact} />
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;
