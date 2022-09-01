import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}em` : '1.4em')};
  padding: 10px 55px;
  border: 2px solid
    ${(props) => (props.bgColor ? `var(--${props.bgColor})` : 'var(--grey)')};
  border-radius: 5px;
  color: ${(props) =>
    props.textColor ? `var(--${props.textColor})` : 'var(--black)'};
  background-color: ${(props) =>
    props.bgColor ? `var(--${props.bgColor})` : 'transparent'};
  box-shadow: rgba(193, 191, 191, 0.2) 0px 8px 24px;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }

  @media screen and (min-width: 992px) {
    padding: 10px 30px;
  }

  @media screen and (min-width: 1200px) {
    padding: 10px 55px;
  }
`;
