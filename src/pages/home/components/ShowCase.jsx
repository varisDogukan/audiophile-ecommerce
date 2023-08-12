import styled from 'styled-components';

import { FirstProduct, SecondProduct, ThirdProduct } from '.';
import mediaQuery from '../../../styles/mediaQuery';

const ShowCase = () => {
  return (
    <Wrapper>
      <div className="max-container">
        <FirstProduct />
        <SecondProduct />
        <ThirdProduct />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 0 24px 120px;

  @media ${mediaQuery.tablet} {
    padding-bottom: 96px;
    padding: 0 39px 120px;
  }

  @media ${mediaQuery.desktop} {
    padding-bottom: 200px;
  }
`;

export default ShowCase;
