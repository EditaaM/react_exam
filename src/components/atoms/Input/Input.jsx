import { forwardRef } from 'react';
import {
  StyledInputField,
  StyledHelperText,
  StyledInputFieldWrapper,
} from './Input.style';

const Input = (props, ref) => {
  return (
    <div>
      <StyledInputFieldWrapper
        ref={ref}
        secureTextEntry={props.secureTextEntry}
      >
        {props.icon}
        <StyledInputField
          value={props.value}
          onChange={(e) => props.change(e.target.value)}
          {...props}
          placeholder={props.placeholder}
        />
      </StyledInputFieldWrapper>
      {props.helperText && (
        <StyledHelperText>
          <p>{props.helperText}</p>
        </StyledHelperText>
      )}
    </div>
  );
};

export default forwardRef(Input);
