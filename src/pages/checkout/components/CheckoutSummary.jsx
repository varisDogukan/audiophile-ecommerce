import styled from 'styled-components';

import { useAppContext } from '../../../context/appContext';
import { Button, CartItem } from '../../../components';
import {
  calculatePrice,
  calculateVat,
  numberFormat,
} from '../../../helpers/specialFuncs';
import mediaQuery from '../../../styles/mediaQuery';

const CheckoutSummary = () => {
  const { carts, showPay } = useAppContext();

  return (
    <Wrapper>
      <h6>SUMMARY</h6>

      {carts.length > 0 ? (
        <>
          <div className="cart-items">
            {carts.map((item) => (
              <CartItem key={item.id} {...item} checkout={true} />
            ))}
          </div>

          <div className="cart-footer">
            <div>
              <p className="label">total</p>
              <p className="footer-price">
                $ {numberFormat(calculatePrice(carts))}
              </p>
            </div>

            <div>
              <p className="label">shipping</p>
              <p className="footer-price">$ 50</p>
            </div>

            <div>
              <p className="label">vat (included)</p>
              <p className="footer-price">
                $ {numberFormat(calculateVat(calculatePrice(carts)))}
              </p>
            </div>

            <div>
              <p className="label">grand total</p>
              <p className="footer-price orange">
                $ {numberFormat(calculatePrice(carts) + 50)}
              </p>
            </div>

            <Button
              title="continue & pay"
              type="full"
              width="100%"
              isNormalButton={true}
              method={showPay}
            />
          </div>
        </>
      ) : (
        <div className="cart-items">
          <h4>Carts is empty.</h4>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 32px 24px;
  background-color: var(--clr-white);
  border-radius: 8px;

  h6 {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1.286px;
  }

  .cart-items {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 32px 0;
  }

  .cart-footer {
    text-align: center;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;

      &:nth-last-of-type(1) {
        margin-top: 24px;
        margin-bottom: 32px;
      }
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

      &.orange {
        color: var(--clr-orange);
      }
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

  @media ${mediaQuery.desktop} {
    flex: 1;
  }
`;

export default CheckoutSummary;
