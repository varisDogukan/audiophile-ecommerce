import styled from 'styled-components';

import img from '../../../assets/images/checkout/icon-cash-on-delivery.svg';
import mediaQuery from '../../../styles/mediaQuery';

const CashOnDelivery = () => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={img} alt="cash on delivery icon" />
      </div>
      <p>
        The ‘Cash on Delivery’ option enables you to pay in cash when our
        delivery courier arrives at your residence. Just make sure your address
        is correct so that your order will not be cancelled.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;

  .img-container {
    min-width: 48px;
    min-height: 48px;
  }

  p {
    font-size: 15px;
    font-weight: 500;
    line-height: 25px;
    opacity: 0.5;
  }

  @media ${mediaQuery.tablet} {
    flex-direction: row;
  }
`;

export default CashOnDelivery;
