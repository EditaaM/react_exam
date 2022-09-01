import { StyledLabel } from './Label.style';

const Label = ({ name, text }) => {
  return <StyledLabel htmlFor={name}>{text}</StyledLabel>;
};

export default Label;
