import styled from 'styled-components';
import eye from '../assets/img/eye.svg';
import gitHubLogo from '../assets/img/github-logo.svg';

const StyledProject = styled.div`
  margin: 1em auto;
  border-radius: 7px 7px 0 0;

  cursor: default;
  overflow: hidden;
  transition: all 300ms ease-in-out;

  & h3 {
    margin: 0.5em auto;
    color: var(--clr-accent);
  }
  & img {
    width: 100%;
    transition: transform 400ms cubic-bezier(0.5, 0, 0.5, 1),
      opacity 250ms linear;
  }

  & .desc {
    position: relative;
    height: 16rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 7px 7px 0 0;

    overflow: hidden;
  }

  &:focus {
    position: relative;
    z-index: 2;
  }

  & .desc > img {
    border-radius: 7px 7px 0 0;
  }

  &:hover,
  &:focus {
    filter: drop-shadow(var(--ds-2));
  }

  &:focus .desc > img,
  &:hover .desc > img {
    opacity: 0.5;
    transform: scale(1.2);
  }

  &:hover .info,
  &:focus .info {
    visibility: visible;
    opacity: 1;
  }

  & .info {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 1em 1.5em;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      'para para para para'
      '. gh eye .';
    align-items: center;
    justify-content: center;
    justify-items: center;
    align-content: center;
    gap: 1em;
    background-color: rgba(48, 48, 48, 0.8);
    visibility: hidden;
    opacity: 0;
    transition: all 300ms ease-in-out;
  }

  & .info p {
    grid-area: para;
    color: var(--clr-light);
    filter: drop-shadow(var(--bs));
  }

  & .info a {
    width: 2rem;
    filter: drop-shadow(var(--ds));
    cursor: pointer;
    transition: all 300ms ease-in-out;
  }

  & .info a:hover {
    transform: scale(1.2);
  }

  & .info .gh {
    grid-area: gh;
  }

  & .info .eye {
    grid-area: eye;
  }

  & p {
    font-size: 1.1rem;
    font-family: var(--ff-other);
  }
`;

const Project = ({title, preview, para, repo, live}) => {
  return (
    <StyledProject tabIndex='0'>
      <div className='desc'>
        <img src={preview} alt='' />
        <div className='info'>
          <p>{para}</p>
          {repo && (
            <a
              tabIndex='-1'
              href={repo}
              className='gh'
              target='_blank'
              rel='noreferrer'
              title='Repository'
            >
              <img src={gitHubLogo} alt='' />
            </a>
          )}
          <a
            tabIndex='-1'
            href={live}
            className='eye'
            target='_blank'
            rel='noreferrer'
            title='Live'
          >
            <img src={eye} alt='' />
          </a>
        </div>
      </div>
      <h3>{title}</h3>
    </StyledProject>
  );
};

export default Project;
