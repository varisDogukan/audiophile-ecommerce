import styled from 'styled-components';

import { HeroContent } from '.';
import mediaQuery from '../../../styles/mediaQuery';

const Hero = () => {
  return (
    <Wrapper>
      <HeroContent />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 600px;
  padding-top: 89px;

  @media ${mediaQuery.tablet} {
    height: 729px;
  }
`;

export default Hero;
