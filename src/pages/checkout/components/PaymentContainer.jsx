import styled from 'styled-components';

import RadioGroup from './RadioGroup';
import mediaQuery from '../../../styles/mediaQuery';
import { useAppContext } from '../../../context/appContext';

const PaymentContainer = () => {
  const { handleChange } = useAppContext();

  return (
    <Wrapper>
      <p className="sub-title">Payment Method</p>

      <div className="radio-container">
        <RadioGroup
          id={1}
          name="payment"
          text="e-Money"
          value="e-money"
          checked={true}
          onChange={(evn) =>
            handleChange({ name: evn.target.name, value: evn.target.value })
          }
        />
        <RadioGroup
          id={2}
          name="payment"
          text="Cash on Delivery"
          value="cash"
          onChange={(evn) =>
            handleChange({ name: evn.target.name, value: evn.target.value })
          }
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  .sub-title {
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.214286px;
    margin-bottom: 17px;
  }

  .radio-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }

  @media ${mediaQuery.mobile} {
    .radio-container {
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    }
  }

  @media ${mediaQuery.tablet} {
    display: flex;
    justify-content: space-between;

    .radio-container {
      grid-template-columns: 309px;
    }
  }
`;

export default PaymentContainer;
