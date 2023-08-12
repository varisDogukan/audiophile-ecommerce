import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useAppContext } from '../context/appContext';
import { numberFormat } from '../helpers/specialFuncs';
import CountBox from './CountBox';
import mediaQuery from '../styles/mediaQuery';

const CartItem = ({ id, cartImage, cartName, price, count, checkout }) => {
  const { changeCountFromCarts } = useAppContext();

  return (
    <Wrapper>
      <div className="image-container">
        <img src={cartImage} alt={cartName} />
      </div>

      <div className="content">
        <p className="name">{cartName}</p>
        <p className="price">$ {numberFormat(price)}</p>
      </div>

      {checkout ? (
        <p className="count">x{count}</p>
      ) : (
        <CountBox
          count={count}
          small={true}
          id={id}
          method={changeCountFromCarts}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 12px;

  .image-container {
    width: 64px;
    height: 64px;
    border-radius: 8px;
    overflow: hidden;
  }

  .content {
    margin-right: auto;

    .name {
      font-weight: 700;
      font-size: 15px;
      line-height: 25px;
    }

    .price {
      font-size: 14px;
      font-weight: 700;
      line-height: 25px;
      opacity: 0.5;
    }
  }

  .count {
    font-size: 15px;
    font-weight: 700;
    line-height: 25px;
    opacity: 0.5;
    margin-top: -25px;
  }

  @media ${mediaQuery.mobile} {
    gap: 16px;
  }
`;

CartItem.propTypes = {
  id: PropTypes.number,
  cartImage: PropTypes.string,
  cartName: PropTypes.string,
  price: PropTypes.number,
  count: PropTypes.number,
  checkout: PropTypes.bool,
};

export default CartItem;
