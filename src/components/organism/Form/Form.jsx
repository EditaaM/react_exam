import React, { useState, useEffect, useRef } from 'react';
import Button from '../../atoms/Button/Button';
import FormInput from '../../molecules/FormInput';
import { StyledForm } from './Form.style';
import { MailIcon, PasswordIcon, UserIcon } from '../../../assets/images';

const Form = () => {
  // State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Refs
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  // Side Effects
  // useEffect(() => {
  //   const RegistrationValidation = (name, email, password) => {
  //     let isNameValid;
  //     let isEmailValid;
  //     let isPasswordValid;

  //     if (name.length > 0 && email.length > 0 && password.length > 0) {
  //       isNameValid = true;
  //       isEmailValid = true;
  //       isPasswordValid = true;
  //     } else {
  //       nameInputRef.current.style.borderColor = 'var(--darkPrimary)';
  //       emailInputRef.current.style.borderColor = 'var(--darkPrimary)';
  //       passwordInputRef.current.style.borderColor = 'var(--darkPrimary)';

  //       isNameValid = false;
  //       isEmailValid = false;
  //       isPasswordValid = false;
  //     }

  //     return isNameValid && isEmailValid && isPasswordValid ? true : false;
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     const isInputsValid = RegistrationValidation(name, email, password);

  //     if (!isInputsValid) {
  //       return;
  //     }
  //   };
  // });

  return (
    <StyledForm>
      <FormInput
        icon={<UserIcon />}
        name="name"
        text="Name"
        type="text"
        id="name"
        placeholder="Joy Shaheb"
        value={name}
        change={setName}
        ref={nameInputRef}
      />
      <FormInput
        icon={<MailIcon />}
        name="email"
        text="Email"
        type="email"
        id="email"
        placeholder="abc@gmail.com"
        value={email}
        change={setEmail}
        ref={emailInputRef}
      />
      <FormInput
        icon={<PasswordIcon />}
        name="password"
        text="Password"
        type="password"
        id="password"
        value={password}
        change={setPassword}
        ref={passwordInputRef}
      />
      <Button
        text="Submit"
        type="submit"
        bgColor="primary"
        textColor="white"
        fontSize="1.6"
      />
    </StyledForm>
  );
};

export default Form;
