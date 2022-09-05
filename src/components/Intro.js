import styled from 'styled-components';
import data from '../store/content/intro';
// import myPhoto from '../assets/img/omar.png';

const StyledIntro = styled.section`
  position: relative;
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 1em;
  height: 100vh;
  padding: 3em 0;
  & h1 {
    margin: 0 auto;
    font-weight: var(--fw-reg);
    filter: drop-shadow(var(--ds));
  }

  & h1 strong {
    display: block;
    filter: drop-shadow(var(--ds-2));
  }
  & .subtitle {
    max-width: 600px;
    /* margin: 1em auto; */
    border-radius: 7px;
    padding: 0.5em 1em;
    /* display: inline-block; */
    font-size: var(--fs-h3);
    background: rgba(22, 224, 189, 0.7);
    font-family: var(--ff-secondary);
    /* margin-bottom: 1em; */
  }

  & img {
    filter: drop-shadow(var(--bs));
  }

  & .down-arrow {
    display: inline-block;
    border-radius: 50%;
    margin: 1em;
    font-size: 2rem;
    background-color: rgba(22, 224, 189, 0.5);
    cursor: pointer;
    transition: all 300ms ease-in-out;
    /* box-shadow: var(--clr-accent); */
  }

  & .down-arrow:hover,
  & .down-arrow:focus {
    transform: scale(1.2);
  }

  @media (min-width: 600px) {
    margin: 4em auto 8.3em;
  }

  @media (min-width: 800px) {
    margin: 3.5em auto 4.5em;
    & .subtitle {
      max-width: 700px;
    }
  }
`;

const Intro = () => {
  const uiText = data['en'];
  const aboutNav = () => {
    document.querySelector('#about').scrollIntoView({behavior: 'smooth'});
  };
  return (
    <StyledIntro id='home'>
      <h1>
        Hi, I am <strong>Omar Shareef</strong>
      </h1>
      <p className='subtitle'>
        Full-stack developer based in Giza.
        <br />
        Weaving meaningful products in computer language as well as human
        language.
      </p>
      <i
        className='down-arrow fa-regular fa-circle-down'
        onClick={aboutNav}
      ></i>
    </StyledIntro>
  );
};

export default Intro;
