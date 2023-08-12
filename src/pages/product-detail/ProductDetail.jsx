import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import {
  AlternativeProducts,
  ProductFeature,
  ProductGallery,
  ProductHeader,
} from './components';
import { Categories, Loading } from '../../components';
import mediaQuery from '../../styles/mediaQuery';
import { useAppContext } from '../../context/appContext';

const ProductDetail = () => {
  const { singleLoading, singleProduct, getSingleProductWithSlug } =
    useAppContext();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    getSingleProductWithSlug(params.slug);
  }, [params.slug]);

  return (
    <Wrapper>
      {singleLoading ? (
        <Loading />
      ) : singleProduct ? (
        <div className="max-container">
          <p onClick={() => navigate(-1)} className="go-back">
            Go Back
          </p>

          <ProductHeader />
          <ProductFeature />
          <ProductGallery />
          <AlternativeProducts />
          <Categories />
        </div>
      ) : (
        <div>Error</div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 105px 24px 0;

  .go-back {
    width: max-content;
    cursor: pointer;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    opacity: 0.5;
    margin-bottom: 24px;
  }

  @media ${mediaQuery.desktop} {
    .go-back {
      margin-bottom: 56px;
    }
  }
`;

export default ProductDetail;
