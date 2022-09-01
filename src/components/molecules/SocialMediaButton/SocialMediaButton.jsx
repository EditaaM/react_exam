import React from 'react';
import { FacebookIcon, GoogleIcon } from '../../../assets/images';
import Button from '../../atoms/Button/Button';
import { StyledSocialMediaButton } from './SocialMediaButton.style.jsx';

const SocialMediaButton = () => {
  return (
    <StyledSocialMediaButton>
      <Button text="sign up" icon={<GoogleIcon />} />
      <Button
        text="sign up"
        bgColor="secondary"
        textColor="white"
        icon={<FacebookIcon />}
      />
    </StyledSocialMediaButton>
  );
};

export default SocialMediaButton;
