import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {} from '@fortawesome/free-solid-svg-icons'; // <-- import styles to be used

const StyledFooter = styled.footer`
  background: #111;
  color: var(--clr-accent);
  text-align: center;
  padding: 2.5em 0;
  font-size: var(--fs-h3);
  font-family: var(--ff-other);

  & .title::after {
    content: '';
    display: block;
    width: 2em;
    height: 1px;
    margin: 0.4em auto;
    background: var(--clr-light);
    opacity: 0.25;
  }

  & a {
    color: inherit;
    text-decoration: none;
  }

  & .footer__link {
    color: var(--clr-light);

    font-weight: var(--fw-bold);
    transition: all 250ms ease-in-out;
  }

  & .footer__link:hover,
  & .social-list__link:hover {
    opacity: 0.7;
  }

  & .footer__link:hover {
    text-decoration: underline;
  }

  & .social-list {
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 2em 0 0;
    padding: 0;
    gap: 0.5em;
  }

  & .social-list__item {
    transition: all 250ms ease-in-out;
  }

  & .social-list__link {
    font-size: 1.7rem;
    padding: 0.5em;
    transition: all 250ms ease-in-out;
  }

  & .social-list__item:hover,
  & .social-list__item:focus {
    transform: scale(1.3);
  }

  & p {
    margin: 2em auto 1em;
    color: var(--clr-light);
    font-size: 1.2rem;
  }

  & .portfolio-link {
    color: var(--clr-accent);
  }
`;

const Footer = () => {
  return (
    <StyledFooter id='contact'>
      <h2 className='title'>Where to find me</h2>
      <a href='mailto:omarshdev@gmail.com' className='footer__link'>
        omarshdev@gmail.com
      </a>
      <ul className='social-list'>
        <li className='social-list__item'>
          <a
            className='social-list__link'
            href='https://linkedin.com/in/osbdev'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fa-brands fa-linkedin'></i>
          </a>
        </li>
        <li className='social-list__item'>
          <a
            className='social-list__link'
            href='https://github.com/osb910'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fa-brands fa-github'></i>
          </a>
        </li>
        <li className='social-list__item'>
          <a
            className='social-list__link'
            href='https://twitter.com/omarshdev'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fa-brands fa-twitter' />
          </a>
        </li>
        <li className='social-list__item'>
          <a
            className='social-list__link'
            href='http://discordapp.com/users/249233571024207872'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fa-brands fa-discord'></i>
          </a>
        </li>
      </ul>
      <p>
        Made with <span title='potatoes'>&#x1F954;</span> &{' '}
        <span title='salad'>&#x1F957;</span> by{' '}
        <a
          href='https://www.github.com/osb910/portfolio'
          className='portfolio-link'
          target='_blank'
          rel='noreferrer'
        >
          <strong>Omar</strong>
        </a>
      </p>
    </StyledFooter>
  );
};

export default Footer;
