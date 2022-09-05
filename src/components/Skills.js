import styled from 'styled-components';
import data from '../store/content/skills';
import Skill from './Skill';
import htmlLogo from '../assets/img/html-5-logo.svg';
import cssLogo from '../assets/img/css-3-logo.svg';
import jsLogo from '../assets/img/js-logo.svg';
import reactLogo from '../assets/img/react-logo.svg';
import nodeLogo from '../assets/img/nodejs-logo.svg';
import regexLogo from '../assets/img/RegEx.png';
import styledCompLogo from '../assets/img/styled-components-logo.svg';
import reduxLogo from '../assets/img/redux-logo.svg';
import expressLogo from '../assets/img/expressjs-logo.svg';
import mongoLogo from '../assets/img/mongodb-logo.svg';
import gitLogo from '../assets/img/git-logo.svg';
import gitHubLogo from '../assets/img/github-logo.svg';
import awsLogo from '../assets/img/aws-logo.svg';

const StyledSkills = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  background-color: var(--clr-light);
  color: var(--clr-dark);
  text-align: center;
  & .title {
    color: var(--clr-accent);
    position: relative;
  }

  & .title::after {
    content: '';
    display: block;
    width: 2em;
    height: 1px;
    margin: 0.5em auto;
    background: var(--clr-dark);
    opacity: 0.25;
  }

  & .skills {
    width: 95%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    gap: 2em;
    justify-items: center;
    /* justify-content: center;
    align-content: center;
    align-items: center; */
  }

  & .muted {
    margin: 1em;
    color: #888;
    font-family: var(--ff-secondary);
  }

  @media (min-width: 800px) {
    & .skills {
      width: 100%;
      max-width: 1000px;
      margin: 0 auto;
    }
  }
`;

const Skills = () => {
  const uiText = data['en'];
  return (
    <StyledSkills id='skills'>
      <h2 className='title'>What I use</h2>
      <div className='skills'>
        <Skill title='HTML' icon={htmlLogo}></Skill>

        <Skill title='CSS' icon={cssLogo}></Skill>

        <Skill title='JavaScript' icon={jsLogo}></Skill>
        <Skill title='React JS' icon={reactLogo}></Skill>
        <Skill title='Node JS' icon={nodeLogo}></Skill>
        <Skill title='Regular Expressions' icon={regexLogo}></Skill>
        <Skill title='Express JS' icon={expressLogo}></Skill>
        <Skill title='MongoDB' icon={mongoLogo}></Skill>
        <Skill title='Regular Expressions' icon={regexLogo}></Skill>
        <Skill title='Styled Components' icon={styledCompLogo}></Skill>
        <Skill title='Redux' icon={reduxLogo}></Skill>
        <Skill title='Regular Expressions' icon={regexLogo}></Skill>
        <Skill title='Git' icon={gitLogo}></Skill>
        <Skill title='GitHub' icon={gitHubLogo}></Skill>
        <Skill title='AWS' icon={awsLogo}></Skill>
      </div>

      <p className='muted'>
        If you see regex 3 times, don't bother. It's not a bug. I just love it.
      </p>

      <a href='#work' className='btn'>
        My Work
      </a>
    </StyledSkills>
  );
};

export default Skills;
