import styled from 'styled-components';
import mediaQuery from '../../../styles/mediaQuery';
import { FormSection, InputGroup, PaymentContainer, CashOnDelivery } from '.';
import { useAppContext } from '../../../context/appContext';

const CheckoutForm = () => {
  const {
    name,
    email,
    phone,
    address,
    zip,
    city,
    country,
    eMoneyNumber,
    eMoneyPin,
    payment,
  } = useAppContext();

  return (
    <Wrapper>
      <h3>checkout</h3>

      <div className="form-container">
        <FormSection title="billing details">
          <InputGroup
            name="name"
            text="Name"
            placeHolder="John Doe"
            value={name}
          />
          <InputGroup
            name="email"
            text="Email Address"
            placeHolder="john@doe.com"
            value={email}
          />
          <InputGroup
            name="phone"
            text="Phone Number"
            placeHolder="+1 111-222-3456"
            value={phone}
          />
        </FormSection>

        <FormSection title="shipping info" firstFullWidth={true}>
          <InputGroup
            name="address"
            text="Your Address"
            placeHolder="111 Avenue"
            value={address}
          />
          <InputGroup
            name="zip"
            text="ZIP Code"
            placeHolder="10001"
            value={zip}
          />
          <InputGroup
            name="city"
            text="City"
            placeHolder="New City"
            value={city}
          />
          <InputGroup
            name="country"
            text="Country"
            placeHolder="New Country"
            value={country}
          />
        </FormSection>

        <FormSection title="payment details" firstFullWidth={true}>
          <PaymentContainer />
          <InputGroup
            name="eMoneyNumber"
            text="e-Money Number"
            placeHolder="123456789"
            value={eMoneyNumber}
          />
          <InputGroup
            name="eMoneyPin"
            text="e-Money PIN"
            placeHolder="6655"
            value={eMoneyPin}
          />
        </FormSection>

        {payment === 'cash' && <CashOnDelivery />}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  padding: 24px 24px 31px;
  border-radius: 8px;
  background-color: var(--clr-white);

  h3 {
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    letter-spacing: 1px;
    margin-bottom: 32px;
    text-transform: uppercase;
  }

  .form-container > *:not(:last-child) {
    margin-bottom: 32px;
  }

  @media ${mediaQuery.tablet} {
    padding: 27px 30px;

    h3 {
      font-size: 32px;
      line-height: 36px;
      letter-spacing: 1.14286px;
      margin-bottom: 41px;
    }

    .form-container > *:not(:last-child) {
      margin-bottom: 53px;
    }
  }

  @media ${mediaQuery.desktop} {
    padding: 54px 48px 48px;
  }
`;

export default CheckoutForm;
