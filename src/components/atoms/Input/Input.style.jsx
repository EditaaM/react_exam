import styled from 'styled-components';

export const StyledInputField = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 1.5em;
`;

export const StyledInputFieldWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  border: 2px solid var(--grey);
  padding: 10px 15px;
  border-radius: 5px;
  box-shadow: rgba(193, 191, 191, 0.2) 0px 8px 24px;

  & ::placeholder {
    color: var(--grey);
    opacity: 0.7;
  }
`;

export const StyledHelperText = styled.p`
  padding-top: 5px;
  font-size: 12px;
  color: var(--darkPrimary);
`;
