import { useState } from "react";
import styled from "styled-components";

import { useAppContext } from "../../../context/appContext";
import { Button, CartItem } from "../../../components";
import mediaQuery from "../../../styles/mediaQuery";
import img from "../../../assets/images/checkout/icon-order-confirmation.svg";
import { calculatePrice, numberFormat } from "../../../helpers/specialFuncs";

const PayContainer = () => {
  const { carts, clearCarts, clearForm } = useAppContext();
  const [count, setCount] = useState(1);

  const handleClick = () => {
    clearCarts();
    clearForm();
  };

  return (
    <Wrapper>
      <div className="background" />

      <div className="container">
        <div className="img-container">
          <img src={img} alt="success icon" />
        </div>

        <h4>
          THANK YOU <br /> FOR YOUR ORDER
        </h4>

        <p>You will receive an email confirmation shortly.</p>

        <div className="sub-container">
          <div className="cart-items">
            {carts.slice(0, count).map((item) => (
              <CartItem key={item.id} {...item} checkout={true} />
            ))}

            {carts.length > 1 && (
              <div
                className="other"
                onClick={() =>
                  setCount((prevCount) => (prevCount === 1 ? carts.length : 1))
                }
              >
                {count === 1
                  ? `and ${carts.length - 1} other item${
                      carts.length > 1 && "s"
                    }`
                  : "View less"}
              </div>
            )}
          </div>

          <div className="grand-total">
            <h6>GRAND TOTAL</h6>
            <p className="price">
              $ {numberFormat(calculatePrice(carts) + 50)}
            </p>
          </div>
        </div>

        <Button
          title="back to home"
          type="full"
          width="full"
          url="/"
          method={handleClick}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 5px;

  .background {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: var(--clr-black);
    opacity: 0.4;
    z-index: -1;
  }

  .container {
    width: 100%;
    max-width: 540px;
    padding: 32px;
    background-color: var(--clr-white);
    border-radius: 8px;

    .img-container {
      margin-bottom: 23px;
    }

    h4 {
      font-size: 24px;
      font-weight: 700;
      line-height: 28px;
      letter-spacing: 0.857px;
      margin-bottom: 16px;
    }

    & > p {
      font-size: 15px;
      font-weight: 500;
      line-height: 25px;
      opacity: 0.5;
      margin-bottom: 24px;
    }

    .sub-container {
      margin-bottom: 23px;

      .cart-items {
        padding: 24px;
        background-color: var(--clr-white3);
        border-radius: 8px 8px 0 0;
      }

      .grand-total {
        color: var(--clr-white);
        background-color: var(--clr-black);
        border-radius: 0 0 8px 8px;
        padding: 15px 24px;
        display: flex;
        flex-direction: column;

        h6 {
          font-size: 15px;
          font-weight: 500;
          line-height: 25px;
          opacity: 0.5;
          margin-bottom: 8px;
        }
      }

      .other {
        font-size: 12px;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -0.214px;
        opacity: 0.5;
        text-align: center;
        margin-top: 12px;
        padding-top: 12px;
        border-top: var(--border);
        cursor: pointer;
      }
    }
  }

  @media ${mediaQuery.mobile} {
    padding: 24px;
  }

  @media ${mediaQuery.tablet} {
    .container {
      padding: 48px;

      .sub-container {
        display: flex;
        margin-bottom: 46px;

        .cart-items {
          border-radius: 8px 0 0 8px;
          flex: 2;
        }

        .grand-total {
          border-radius: 0 8px 8px 0;
          flex: 1;
          justify-content: center;
        }
      }
    }
  }
`;

export default PayContainer;
