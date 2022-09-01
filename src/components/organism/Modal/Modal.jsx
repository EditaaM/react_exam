import { Link } from 'react-router-dom';
import { Logo, SectionImg } from '../../../assets/images.js';
import { StyledModal, StyledModalLeft, StyledModalRight } from './Modal.style';
import SocialMediaButton from '../../molecules/SocialMediaButton/SocialMediaButton.jsx';
import Form from '../Form/Form.jsx';

const Modal = () => {
  return (
    <StyledModal>
      <StyledModalLeft>
        <Logo />
        <SectionImg />
        <p>Start for free & Get Attractive offers Today !</p>
      </StyledModalLeft>
      <StyledModalRight>
        <h4>Get Started</h4>
        <p>Already have an account</p>
        <Link to={'/login'}>Log in</Link>
        <SocialMediaButton />
        <span>Or</span>
        <Form />
      </StyledModalRight>
    </StyledModal>
  );
};

export default Modal;
