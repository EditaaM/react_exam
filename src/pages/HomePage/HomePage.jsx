import { useNavigate } from 'react-router-dom';
import Button from '../../components/atoms/Button/Button';
import { StyledHome } from './HomePage.style';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <StyledHome>
      <Button
        text="Sign Up"
        bgColor="primary"
        textColor="white"
        action={() => navigate('/signup')}
      />
    </StyledHome>
  );
};

export default HomePage;
