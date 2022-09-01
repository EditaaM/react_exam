import styled from 'styled-components';

export const StyledSocialMediaButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  gap: 20px;

  @media screen and (min-width: 998px) {
    justify-content: space-between;
    width: 100%;
  }
`;
