import styled from 'styled-components';
// import data from '../store/content/about';
import myPhoto from '../assets/img/omar.jpg';
import myCV from '../assets/Omar_Shareef_MERN_Developer_CV.pdf';

const StyledAbout = styled.section`
  background-color: var(--clr-dark);
  color: var(--clr-light);
  max-width: 1000px;
  margin: 0 auto;

  & .title {
    color: var(--clr-accent);

    margin-bottom: 0.25em;
  }

  & .title::after {
    content: '';
    display: block;
    width: 2em;
    height: 1px;
    margin: 0.3em auto;
    background: var(--clr-light);
    opacity: 0.25;
  }

  & .subtitle {
    margin: 0;
    padding: 0.25em 1em;
    font-size: var(--fs-h3);
    color: var(--clr-dark);
    background: var(--clr-accent);
    font-family: var(--ff-secondary);
    margin-bottom: 1em;
  }

  & .body {
    line-height: 1.7;
  }

  & img {
    width: 100%;
    min-width: 9rem;
    max-width: 14rem;
    display: block;
    box-shadow: var(--bs);
    filter: drop-shadow(var(--bs));
    object-fit: cover;

    border-radius: 50%;
  }

  & strong {
    font-size: 1.2rem;
    letter-spacing: 1px;
    font-weight: 700;
  }

  & em {
    /* color: var(--clr-accent); */
  }

  & a {
    margin-inline: 0.2em;
    color: var(--clr-accent);
  }

  .muted {
    color: #aaa;
  }

  .aside-info {
    margin: 2em auto 0;
    display: flex;
    gap: 2em;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
  }

  .cv {
    padding: 0.8em 1em;
    width: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: center;
    border: 0;
    color: var(--clr-dark);
    font-size: 1.3rem;
    font-family: var(--ff-secondary);
    text-decoration: none;
    background-color: var(--clr-accent);
    font-weight: 700;
    border-radius: 7px;
    cursor: pointer;
    filter: drop-shadow(var(--ds-2));
  }

  @media (min-width: 600px) {
    padding: 2em;
    display: grid;
    grid-template-columns: 1fr 150px;
    grid-template-areas:
      'title aside'
      'subtitle aside'
      'text aside';
    grid-column-gap: 2em;

    & .title {
      grid-area: title;
    }

    & .subtitle {
      position: relative;
      width: calc(100% + 2em);
      margin: 0 auto;
      padding-left: 1em;
      padding-right: calc(150px + 2.5em);
      grid-column: 1 / -1;
      grid-row: 2;
      left: -1em;
      border-radius: 7px;
    }

    & .aside-info {
      grid-area: aside;
      position: relative;
      z-index: 2;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const About = () => {
  // const uiText = data['en'];
  return (
    <StyledAbout id='about'>
      <h2 className='title'>Who I am</h2>
      <p className='subtitle'>Software Developer & Arabic Linguist</p>

      <div className='body'>
        <p>
          I'm a dentist turned proofreader turned translator turned software
          developer. Being self-taught in <em>three</em> different fields, I've
          always been eager to learn what I find useful to me, which makes me a
          good researcher by intuition, and a problem solver at heart. I've
          recenlty completed an internship called{' '}
          <em>
            <a
              href='https://www.linkedin.com/company/%D9%83%D8%A7%D9%84%D8%A8%D9%86%D9%8A%D8%A7%D9%86-%D8%A7%D9%84%D9%85%D8%B1%D8%B5%D9%88%D8%B5/'
              target='_blank'
              rel='noreferrer'
            >
              Kalbonyan Elmarsos
            </a>
          </em>{' '}
          in which I learned thoroughly full-stack web development. I work with
          the <strong>MERN stack</strong>, and my current goal is to break into
          tech and land my first job in the software industry.
        </p>
        <p>
          One thing I'm blessed to have achieved in my life so far is{' '}
          <em>
            <a href='https://rasaif.com' target='_blank' rel='noreferrer'>
              rasaif.com
            </a>
          </em>
          . I'm proudly one of the two main reasons this project exists. I was
          so excited working on it{' '}
          <span className='muted'>(as a linguist not as a developer)</span>. I
          have a deep <em>deep</em> passion for the Arabic language and Quran.
          If you happen to be the same, well, I'm glad you haven't extincted
          yet. If so, please get in touch, I'd like to be friends. I also love
          potatoes, lemonade, and regex!
        </p>
        <p>
          Feel free to contact me if I can help you with anything in my
          skillset. I'll be happy to craft elegant websites for you.
        </p>
      </div>

      <div className='aside-info'>
        <img src={myPhoto} alt='Omar Shareef'></img>
        <a
          href={myCV}
          download='Omar_Shareef_MERN_Developer_CV.pdf'
          // target='_blank'
          // rel='noreferrer'
          className='cv'
        >
          <i className='fa fa-download' aria-hidden='true'></i>
          CV
        </a>
      </div>
    </StyledAbout>
  );
};

export default About;
