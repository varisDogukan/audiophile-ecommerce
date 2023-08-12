import styled from 'styled-components';

import { useAppContext } from '../context/appContext';
import { calculatePrice } from '../helpers/specialFuncs';

import Button from './Button';
import mediaQuery from '../styles/mediaQuery';
import CartItem from './CartItem';

const Carts = () => {
  const { showCart, carts, clearCarts } = useAppContext();

  return (
    <Wrapper>
      <div className="background" />

      <div className="cart-container">
        <div className="cart-header">
          <h5>CART ({carts.length})</h5>
          <p onClick={clearCarts}>Remove all</p>
        </div>

        {carts.length > 0 ? (
          <div className="cart-items">
            {carts.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <div className="cart-items">
            <h4>Carts is empty.</h4>
          </div>
        )}

        <div className="cart-footer">
          <div>
            <p className="label">total</p>
            <p className="footer-price">$ {calculatePrice(carts)}</p>
          </div>

          {carts.length > 0 && (
            <Button
              title="checkout"
              type="full"
              width="100%"
              url="/checkout"
              method={() => showCart(false)}
            />
          )}
          <span className="close" onClick={() => showCart(false)}>
            Close
          </span>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  top: 89px;
  width: 100%;
  height: 100%;
  padding: 24px 0;
  z-index: -1;
  display: flex;
  justify-content: flex-end;

  .background {
    position: absolute;
    inset: 0;
    top: -89px;
    width: 100%;
    height: 100%;
    background-color: var(--clr-black);
    opacity: 0.4;
  }

  .cart-container {
    position: relative;
    width: 100%;
    z-index: 1;
    background-color: var(--clr-white);
    height: max-content;
    max-width: 377px;
    border-radius: 8px;
    padding: 32px 21px;
    user-select: none;

    .cart-header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h5 {
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        letter-spacing: 1.28571px;
      }

      p {
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        text-decoration-line: underline;
        opacity: 0.5;
        cursor: pointer;
        transition: var(--transition);

        &:hover {
          color: var(--clr-orange);
        }
      }
    }

    .cart-items {
      display: flex;
      flex-direction: column;
      gap: 24px;
      margin: 32px 0;

      h4 {
        text-align: center;
        opacity: 0.6;
      }
    }

    .cart-footer {
      text-align: center;

      div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 24px;
      }

      .label {
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        opacity: 0.5;
        text-transform: uppercase;
      }

      .footer-price {
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
      }

      .close {
        display: inline-block;
        margin-top: 20px;
        cursor: pointer;
        font-weight: 700;
        transition: var(--transition);
        opacity: 0.4;

        &:hover {
          color: var(--clr-orange);
        }
      }
    }
  }

  @media ${mediaQuery.mobile} {
    padding: 24px;
  }
`;

export default Carts;
