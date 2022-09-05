import styled from 'styled-components';
import Project from './Project';
import scratch from '../assets/img/scratch-sayd.png';
import arabizeCount from '../assets/img/arabize-count.png';
import nasa from '../assets/img/nasa-mission-control.png';
import reactMeals from '../assets/img/react-meals.png';
import reactFacts from '../assets/img/react-facts.png';
import forkify from '../assets/img/forkify.png';
import omnifood from '../assets/img/omnifood.png';
import pacMan from '../assets/img/pac-man.png';
import mapty from '../assets/img/mapty.png';

const StyledWork = styled.section`
  background-color: var(--clr-dark);
  /* color: var(--clr-light); */
  & .title {
    color: var(--clr-accent);
  }

  & .title::after {
    content: '';
    display: block;
    width: 2em;
    height: 1px;
    margin: 0.4em auto;
    background: var(--clr-light);
    opacity: 0.25;
  }

  text-align: center;
  & .subtitle {
    max-width: 700px;
    margin: 0.5em auto;
    padding: 0.25em 1em;
    font-size: var(--fs-h3);
    background: rgba(22, 224, 189, 0.8);
    font-family: var(--ff-secondary);
    border-radius: 7px;
    /* font-weight: var(--fw-bold); */
  }

  & .portfolio {
    padding: 0 4em;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5em;
  }
`;

const Work = () => {
  return (
    <StyledWork id='work'>
      <h2 className='title'>What I did</h2>
      <p className='subtitle'>My most prominent projects</p>

      <div className='portfolio'>
        <Project
          title='Scratch-Sayd'
          preview={scratch}
          para='A note-taking app made using AWS & React, featuring a creative Arabic localization.'
          repo='https://github.com/osb910/serverless-stack-scratch-sayd'
          live='https://d2il7yewq2xjvy.cloudfront.net/'
        />
        <Project
          title='Arabize Count'
          preview={arabizeCount}
          para='My first contribution to the community. A function that returns correctly parsed Arabic numeral distinctive. Will be launched as an npm package soon.'
          repo='https://github.com/osb910/arabize-count'
          live='https://scrimba.com/scrim/cBRJ6ysW'
        />
        <Project
          title='NASA Mission Control'
          preview={nasa}
          para='A modern-looking control panel connected with missions API built with MERN stack.'
          repo='https://github.com/osb910/Kalbonyan-Elmarsos/tree/main/02-Udemy/04_Complete-NodeJS-Developer-in-2022/Projects/nasa-project'
          live='http://52.47.126.241:8000/'
        />
        <Project
          title='React Meals'
          preview={reactMeals}
          para='A React app for various meals fetched from a database, with cart functionality, and Arabic translation.'
          repo='https://github.com/osb910/Kalbonyan-Elmarsos/tree/main/02-Udemy/03_React-The-Complete-Guide/Projects/05_food-order-app/S17-project'
          live='https://reactmeals-omarsh.netlify.app'
        />
        <Project
          title='React Facts'
          preview={reactFacts}
          para='A simple React app for React facts, with dark mode option and Arabic translation.'
          repo=''
          live='https://reactfacts-omarsh.netlify.app/'
        />
        <Project
          title='Forkify'
          preview={forkify}
          para='An application for diferent recipes with custom recipe uploads.'
          repo='https://github.com/osb910/Kalbonyan-Elmarsos/tree/main/02-Udemy/02_The-Complete-JavaScript-Course-2022-From-Zero-to-Expert!/Projects/Forkify'
          live='https://forkify-omarsh.netlify.app/'
        />
        <Project
          title='Mapty'
          preview={mapty}
          para='An application for tracking your workouts on the map based on your location.'
          repo='https://github.com/osb910/Kalbonyan-Elmarsos/tree/main/02-Udemy/02_The-Complete-JavaScript-Course-2022-From-Zero-to-Expert!/Projects/Mapty'
          live='https://mapty-omarsh.netlify.app/'
        />
        <Project
          title='Pac-Man'
          preview={pacMan}
          para='Yep! The 1980s good old Pac-Man. Made with HTML, CSS, & vanilla JS.'
          repo=''
          live='https://pac-man-omarsh.netlify.app/'
        />
        <Project
          title='Omnifood'
          preview={omnifood}
          para='A website for a fictional AI cooking company called Omnifood.'
          repo='https://github.com/osb910/Kalbonyan-Elmarsos/tree/main/02-Udemy/01_Build-Responsive-Real-World-Websites-with-HTML-and-CSS/Projects/Omnifood'
          live='https://omnifood-omarsh.netlify.app/'
        />
      </div>
    </StyledWork>
  );
};

export default Work;
