import styled from 'styled-components';

const StyledNavItem = styled.li`
  & .nav__link {
    padding: 0.2em 1em;
    color: inherit;
    font-weight: var(--fw-bold);
    font-family: var(--ff-other);
    font-size: var(--fs-h3);
    text-decoration: none;
    transition: all 200ms cubic-bezier(0.5, 0, 0.5, 1);
  }

  & .nav__link {
    box-shadow: rgba(44, 44, 44, 0.8);
  }

  & .nav__link:hover {
    color: var(--clr-accent);
  }

  @media (min-width: 800px) {
    & .nav__link {
      font-size: 1.2rem;
    }
  }
`;

const NavItem = ({path, text}) => {
  return (
    <StyledNavItem>
      <a href={path} className='nav__link'>
        {text}
      </a>
    </StyledNavItem>
  );
};

export default NavItem;
