import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import mediaQuery from '../../../styles/mediaQuery';
import { Button } from '../../../components';

const Product = ({ name, categoryImage, new: isNew, description, slug }) => {
  const params = useParams();

  return (
    <Wrapper>
      <div className="image-container">
        <picture>
          <source srcSet={categoryImage.desktop} media={mediaQuery.desktop} />
          <source srcSet={categoryImage.tablet} media={mediaQuery.tablet} />
          <img src={categoryImage.mobile} alt={slug} />
        </picture>
      </div>

      <div className="content">
        {isNew && <p className="new">new product</p>}

        <h3>
          {name} <br /> <span>{params.category}</span>
        </h3>

        <p className="desc">{description}</p>

        <Button url={`/${params.category}/${slug}`} type="full" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 572px;

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
  }

  @media ${mediaQuery.tablet} {
    gap: 52px;

    .content {
      .new {
        margin-bottom: 16px;
      }

      .desc {
        margin-top: 32px;
      }
    }
  }

  @media ${mediaQuery.desktop} {
    &:nth-of-type(even) .image-container {
      order: 2;
    }

    flex-direction: row;
    gap: 125px;

    .image-container {
      width: 540px;
    }

    .content {
      max-width: 445px;
      text-align: left;
      align-items: flex-start;

      .desc {
        margin-bottom: 40px;
      }
    }
  }
`;

Product.propTypes = {
  name: PropTypes.string,
  categoryImage: PropTypes.object,
  new: PropTypes.bool,
  description: PropTypes.string,
  slug: PropTypes.string,
};

export default Product;
