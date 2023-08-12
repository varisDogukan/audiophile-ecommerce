import { useState } from 'react';
import styled from 'styled-components';

import mediaQuery from '../../../styles/mediaQuery';
import { numberFormat } from '../../../helpers/specialFuncs';
import { Button, CountBox } from '../../../components';
import { useAppContext } from '../../../context/appContext';

const ProductHeader = () => {
  const {
    singleProduct: {
      id,
      image,
      name,
      new: isNew,
      category,
      description,
      price,
      cartImage,
      cartName,
    },
    addProductInCart,
  } = useAppContext();

  const [count, setCount] = useState(1);

  const changeCount = (operator) => {
    setCount((prevCount) =>
      operator === '-' ? (prevCount -= 1) : (prevCount += 1)
    );
  };

  const handleClick = () => {
    addProductInCart({ id, cartName, price, count, cartImage });
  };

  return (
    <Wrapper>
      <div className="image-container">
        <picture>
          <source srcSet={image?.desktop} media={mediaQuery.desktop} />
          <source srcSet={image?.tablet} media={mediaQuery.tablet} />
          <img src={image?.mobile} alt={name} />
        </picture>
      </div>

      <div className="content">
        {isNew && <p className="new">new product</p>}

        <h3>
          {name} <br /> <span>{category}</span>
        </h3>

        <p className="desc">{description}</p>

        <p className="price">$ {numberFormat(price)}</p>

        <div className="container">
          <CountBox method={changeCount} count={count} />
          <Button
            title="add to cart"
            type="full"
            method={handleClick}
            isNormalButton={true}
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-bottom: 88px;

  .content {
    .new {
      font-size: 14px;
      line-height: 19px;
      letter-spacing: 10px;
      text-transform: uppercase;
      color: var(--clr-orange);
      margin-bottom: 24px;
    }

    h3 {
      font-weight: 700;
      font-size: 28px;
      line-height: 38px;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    .desc {
      font-weight: 500;
      font-size: 15px;
      line-height: 25px;
      opacity: 0.5;
      margin: 24px 0;
    }

    .price {
      font-weight: 700;
      font-size: 18px;
      line-height: 25px;
      letter-spacing: 1.28571px;
      margin-bottom: 31px;
    }

    .container {
      display: flex;
      gap: 16px;
    }
  }

  @media ${mediaQuery.tablet} {
    flex-direction: row;
    gap: 69px;
    margin-bottom: 120px;

    .image-container {
      flex-shrink: 1;
      max-width: 500px;
    }

    .content {
      /* max-width: 340px; */
      flex-shrink: 2;

      .new {
        margin-bottom: 17px;
      }

      .desc {
        margin: 32px 0;
      }
    }
  }

  @media ${mediaQuery.desktop} {
    gap: 125px;
    margin-bottom: 160px;

    .image-container {
      max-width: 540px;
    }

    .content {
      max-width: 445px;

      .price {
        margin-bottom: 47px;
      }
    }
  }
`;

export default ProductHeader;
