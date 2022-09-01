import styled from 'styled-components';

export const StyledModal = styled.section`
  margin: 40px auto;
  max-width: 1240px;
  border-radius: 20px;
  border: 2px solid var(--darkPrimary);
  display: flex;
`;

export const StyledModalLeft = styled.div`
  display: none;
  flex-direction: column;
  border-radius: 15px 0 0 15px;
  background-color: var(--primary);

  color: var(--white);
  padding: 35px 40px 50px;

  p {
    text-align: center;
    width: 50%;
    font-size: 1.5em;
    font-weight: 600;
    align-self: center;
  }

  & :nth-child(1) {
    margin-bottom: 40px;
  }

  & :nth-child(2) {
    margin-bottom: 30px;
    align-self: center;
  }

  @media screen and (min-width: 992px) {
    display: flex;
    width: 50%;
  }
`;

export const StyledModalRight = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 100%;
  padding: 70px;

  h4 {
    text-align: center;
    font-size: var(--heading4);
    margin-bottom: 8px;
  }

  p {
    text-align: center;
    font-size: var(--paragraph1);
  }

  a {
    text-align: center;
    text-decoration: none;
    color: var(--primary);
    font-weight: 500;
    font-size: 1.2em;
    margin-bottom: 20px;
  }

  span {
    font-size: 2em;
    align-self: center;
    margin: 25px 0 15px;
  }

  @media screen and (min-width: 992px) {
    width: 50%;

    h4 {
      text-align: left;
    }

    p {
      text-align: left;
    }

    a {
      text-align: left;
    }
  }
`;
