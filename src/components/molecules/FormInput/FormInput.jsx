import { forwardRef } from 'react';
import Label from '../../atoms/Label/Label';
import Input from '../../atoms/Input/Input';
import { StyledFormInput } from './FormInput.style';

const FormInput = (
  { name, text, type, id, value, change, icon, helperText, placeholder },
  ref
) => {
  return (
    <StyledFormInput>
      <Label name={name} text={text} />
      <Input
        secureTextEntry={true}
        placeholder={placeholder}
        type={type}
        id={id}
        icon={icon}
        ref={ref}
        value={value}
        change={change}
        helperText={helperText}
      />
    </StyledFormInput>
  );
};

export default forwardRef(FormInput);
