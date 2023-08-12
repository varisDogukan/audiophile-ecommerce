import PropTypes from 'prop-types';
import styled from 'styled-components';

import mediaQuery from '../../../styles/mediaQuery';

const CategoryHeader = ({ title }) => {
  return (
    <Wrapper>
      <h3>{title}</h3>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background-color: var(--clr-black);
  height: 102px;
  display: grid;
  place-content: center;

  h3 {
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    text-align: center;
    letter-spacing: 1.42857px;
    text-transform: uppercase;
    color: var(--clr-white);
  }

  @media ${mediaQuery.tablet} {
    height: 246px;

    h3 {
      font-size: 40px;
      line-height: 44px;
    }
  }

  @media ${mediaQuery.tablet} {
    height: 239px;
  }
`;

CategoryHeader.propTypes = {
  title: PropTypes.string,
};

export default CategoryHeader;
