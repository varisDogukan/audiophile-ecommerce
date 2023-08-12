import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Product } from '.';
import { sortWithNew } from '../../../helpers/specialFuncs';
import mediaQuery from '../../../styles/mediaQuery';
import { useAppContext } from '../../../context/appContext';

const ProductList = () => {
  const { products } = useAppContext();

  return (
    <Wrapper>
      <div className="max-container">
        {products.sort(sortWithNew).map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 64px 24px 80px;
  .max-container {
    display: flex;
    flex-direction: column;
    gap: 120px;
  }

  @media ${mediaQuery.tablet} {
    padding: 120px 39px 76px;
  }

  @media ${mediaQuery.desktop} {
    padding: 160px 39px 40px;

    .max-container {
      gap: 160px;
    }
  }
`;

ProductList.propTypes = {
  products: PropTypes.array,
};

export default ProductList;
