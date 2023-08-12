import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { useAppContext } from "../../context/appContext";
import mediaQuery from "../../styles/mediaQuery";
import { CheckoutForm, CheckoutSummary, PayContainer } from "./components";

const Checkout = () => {
  const { isShowPay } = useAppContext();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div className="max-container">
        <p onClick={() => navigate(-1)} className="go-back">
          Go Back
        </p>

        <div className="sub-container">
          <CheckoutForm />
          <CheckoutSummary />
        </div>
      </div>

      {isShowPay && <PayContainer />}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 105px 24px 97px;
  background-color: var(--clr-white4);

  .go-back {
    width: max-content;
    cursor: pointer;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    opacity: 0.5;
    margin-bottom: 24px;
  }

  & > .sub-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  @media ${mediaQuery.tablet} {
    padding: 105px 40px 116px;
  }

  @media ${mediaQuery.desktop} {
    padding: 105px 0px 141px;

    .go-back {
      margin-bottom: 56px;
    }

    & > .sub-container {
      flex-direction: row;
      align-items: flex-start;
    }
  }
`;

export default Checkout;
