import styled from 'styled-components';
import { useRef, useEffect } from 'react';

import mediaQuery from '../../../styles/mediaQuery';
import { useAppContext } from '../../../context/appContext';

const ProductGallery = () => {
  const {
    singleProduct: { gallery, name },
  } = useAppContext();
  const wrapperRef = useRef(null);

  useEffect(() => {
    const getGalleryImages = () => {
      let images = '';

      for (const item in gallery) {
        images += `<div class="image-container">
          <picture>
            <source srcSet=${gallery[item].desktop} media='${mediaQuery.desktop}' />
            <source srcSet=${gallery[item].tablet} media='${mediaQuery.tablet}' />
            <img src='${gallery[item].mobile}' alt='${name}' />
          </picture>
        </div>`;
      }

      return images;
    };

    wrapperRef.current.innerHTML = getGalleryImages();
  }, [name, gallery]);

  return <Wrapper ref={wrapperRef} />;
};

const Wrapper = styled.section`
  margin: 88px 0 120px;
  display: grid;
  gap: 20px;

  .image-container {
    border-radius: 8px;
    overflow: hidden;
  }

  @media ${mediaQuery.tablet} {
    margin: 120px 0;
    grid-template-columns: repeat(2, minmax(1fr, 445px)) 1fr;
    grid-template-rows: repeat(2, 1fr);

    .image-container {
      display: flex;

      img {
        height: 101%;
      }

      &:nth-child(1) {
        grid-area: 1 / 1 / 2 / 2;
      }

      &:nth-child(2) {
        grid-area: 2 / 1 / 3 / 2;
      }

      &:nth-child(3) {
        grid-area: 1 / 2 / 3 / 4;
      }
    }
  }

  @media ${mediaQuery.desktop} {
    margin: 160px 0;
  }
`;

export default ProductGallery;
