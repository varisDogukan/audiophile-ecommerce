import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/images/logo.svg';
import mediaQuery from '../styles/mediaQuery';

const Logo = () => {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate('/')}>
      <img src={logo} alt="audiophile logo" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  cursor: pointer;

  @media ${mediaQuery.desktop} {
    margin: 0;
  }
`;

export default Logo;
