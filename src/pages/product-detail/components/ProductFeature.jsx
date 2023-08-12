import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import mediaQuery from '../../../styles/mediaQuery';
import { useAppContext } from '../../../context/appContext';

const ProductFeature = () => {
  const {
    singleProduct: { features, includes },
  } = useAppContext();
  const textRef = useRef(null);

  useEffect(() => {
    textRef.current.innerHTML = features;
  }, [features]);

  return (
    <Wrapper>
      <div className="features">
        <h5>features</h5>
        <p className="text" ref={textRef}></p>
      </div>

      <div className="in-box">
        <h5>in the box</h5>
        <ul className="container">
          {includes?.map((item, idx) => (
            <li key={idx}>
              <span className="quantity">{item.quantity}x</span>
              <span className="name">{item.item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 88px;

  h5 {
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 1.14286px;
    text-transform: uppercase;
    margin-bottom: 24px;
  }

  .text {
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    opacity: 0.5;
  }

  .in-box {
    font-size: 15px;
    line-height: 25px;

    li:not(:last-child) {
      margin-bottom: 8px;
    }

    .quantity {
      font-weight: 700;
      color: var(--clr-orange);
      margin-right: 24px;
    }

    .name {
      font-weight: 500;
      opacity: 0.5;
    }
  }

  @media ${mediaQuery.tablet} {
    gap: 120px;

    h5 {
      margin-bottom: 32px;
    }

    .in-box {
      display: flex;
      gap: 165px;
    }
  }

  @media ${mediaQuery.desktop} {
    flex-direction: row;
    gap: 125px;

    .features {
      max-width: 635px;
    }

    .in-box {
      display: block;
    }
  }
`;

export default ProductFeature;
