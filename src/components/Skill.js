import styled from 'styled-components';

const StyledSkill = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-color: var(--clr-accent);
  padding: 1.7em;
  margin: 1em;
  filter: drop-shadow(var(--bs));
  align-self: center;

  & .tip {
    position: absolute;
    top: -1.5em;
    /* max-width: 10rem; */
    padding: 0.4em 0.8em;
    visibility: hidden;
    opacity: 0;
    color: var(--clr-accent);
    background-color: var(--clr-dark);
    border-radius: 25px;
    font-size: 1.2rem;
    font-family: var(--ff-secondary);
    filter: drop-shadow(0, 0, 12px, rgba(0, 0, 0, 0.5));
    transition: all 350ms ease-in-out;
  }

  &:hover .tip,
  &:focus .tip {
    visibility: visible;
    top: -2.7em;
    opacity: 1;
  }

  &:hover img,
  &:focus img {
    transform: scale(1.15);
  }

  & img {
    width: 100%;
    display: block;
    margin: 0 auto;
    transition: all 300ms ease-in-out;
  }
`;

const Skill = ({title, icon}) => {
  return (
    <StyledSkill tabIndex='0'>
      <span className='tip'>{title}</span>
      <img src={icon} alt={title} />
    </StyledSkill>
  );
};

export default Skill;
