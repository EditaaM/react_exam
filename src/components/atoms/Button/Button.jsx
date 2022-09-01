import { StyledButton } from './Button.style';

const Button = ({ text, action, bgColor, textColor, icon, fontSize }) => {
  return (
    <StyledButton
      onClick={action}
      bgColor={bgColor}
      textColor={textColor}
      fontSize={fontSize}
    >
      {icon}
      {text}
    </StyledButton>
  );
};

export default Button;
