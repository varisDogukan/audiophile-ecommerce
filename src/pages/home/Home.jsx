import styled from 'styled-components';

import { Hero, ShowCase } from './components';
import { Categories } from '../../components';

const HomePage = () => {
  return (
    <Wrapper>
      <Hero />
      <Categories />
      <ShowCase />
    </Wrapper>
  );
};

const Wrapper = styled.main``;

export default HomePage;
