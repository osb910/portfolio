/** TODO
 * optimize images
 * lazy loading
 * Arabic version
 */

import styled, {keyframes, createGlobalStyle} from 'styled-components';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Work from './components/Work';
import violetHand from './assets/img/violet-hand-typewriter.png';

const appear = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
    transform: scale(0.96);
  }
  10% {
    opacity: 0.2;
  }
  30% {
    transform: scale(0.98);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.02);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    transform: scale(1);
  }
`;

const GlobalStyle = createGlobalStyle`
  :root {
    --ff-primary: Lora, serif;
    --ff-secondary: 'Source Code Pro', monospace;
    --ff-tertiary: 'Source Sans Pro', sans-serif;
    --ff-other: 'Roboto Slab', serif;
    
    --fw-reg: 400;
    --fw-bold: 700;
    
    --clr-light: #fff;
    --clr-dark: #303030;
    --clr-accent: #16e0bd;
    --clr-accent-2: #689d6a;
    
    --fs-h1: 3rem;
    --fs-h2: 2.25rem;
    --fs-h3: 1.25rem;
    --fs-body: 1rem;

    --bs: 0.25em 0.25em 0.75em rgba(0,0,0, 0.25);
          /* 0.125em 0.125em 0.25em rgba(0,0,0, 0.15); */
    --ds: 0px 0px 6px rgba(255, 255, 255, 0.9);
    --ds-2: 3px 2px 12px rgba(255, 255, 255, 0.6);
  }

  @media (min-width: 800px) {
    :root {
      --fs-h1: 4.5rem;
      --fs-h2: 3.75rem;
      --fs-h3: 1.5rem;
      --fs-body: 1.125rem;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    background: var(--clr-light);
    color: var(--clr-dark);
    margin: 0;
    font-family: var(--ff-primary);
    font-size: var(--fs-body);
    line-height: 1.6;
  scroll-behavior: smooth;
  }

  & section {
    padding: 5em 1em;
  }

  img {
    display: block;
    max-width: 100%;
  }

  strong { font-weight: var(--fw-bold) }

  :focus {
    outline: 3px solid var(--clr-accent);
    outline-offset: 3px;
  }

  .btn {
    display: inline-block;
    padding: .5em 2.5em;
    background: var(--clr-accent);
    color: var(--clr-dark);
    text-decoration: none;
    cursor: pointer;
    font-size: .8rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: var(--fw-bold);
    transition: transform 200ms ease-in-out;
  }

  .btn:hover {
    transform: scale(1.1);
  }

  h1,
  h2,
  h3 {
      line-height: 1.1;
      margin: 0;
  }

  h1 { font-size: var(--fs-h1) }
  h2 { font-size: var(--fs-h2) }
  h3 { font-size: var(--fs-h3) }
`;

const StyledApp = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
  background-color: rgba(28, 138, 119, 0.4);
  background-image: url(${violetHand});
  background-size: cover;
  background-position: 50%;
  background-blend-mode: hard-light;
  /* mix-blend-mode: ; */
  scroll-behavior: smooth;

  & > * {
    animation: ${appear} 500ms ease-in;
  }

  &.rtl {
    direction: rtl;
    font-family: 'Lotus';
    font-size: 1.15rem;
  }

  &.rtl h1,
  &.rtl h2,
  &.rtl h3,
  &.rtl h4,
  &.rtl h5,
  &.rtl h6 {
    font-family: 'Uthman Taha';
  }
`;

const App = () => {
  // smooth scrolling
  // document.querySelector('.nav__links').addEventListener('click', evt => {
  //   evt.preventDefault();
  //   if (evt.target.classList.contains('nav__link')) {
  //     const id = evt.target.getAttribute('href');
  //     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  //   }
  // });
  return (
    <StyledApp>
      <GlobalStyle />
      <Header />
      <Intro />
      <About />
      <Skills />
      <Work />
      <Footer />
    </StyledApp>
  );
};

export default App;
