import styled from 'styled-components';

import { Button } from '../../../components';
import mediaQuery from '../../../styles/mediaQuery';
import { useAppContext } from '../../../context/appContext';

const AlternativeProducts = () => {
  const {
    singleProduct: { others, category },
  } = useAppContext();
  return (
    <Wrapper>
      <h5>you may also like</h5>

      <div className="container">
        {others?.map((item, idx) => (
          <div className="card" key={idx}>
            <picture>
              <source srcSet={item.image.desktop} media={mediaQuery.desktop} />
              <source srcSet={item.image.tablet} media={mediaQuery.tablet} />
              <img src={item.image.mobile} alt={item.name} />
            </picture>

            <div>
              <h5>{item.name}</h5>
              <Button type="full" url={`/${category}/${item.slug}`} />
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;

  h5 {
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.857143px;
    text-transform: uppercase;
    margin-bottom: 40px;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 56px;

    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 32px;

      .btn-full {
        width: 160px;
      }

      h5 {
        margin: 0;
        margin-bottom: 32px;
      }
    }
  }

  @media ${mediaQuery.tablet} {
    .container {
      flex-direction: row;
      gap: 11px;

      .card {
        gap: 40px;
      }

      h5 {
        margin-bottom: 56px;
      }
    }
  }

  @media ${mediaQuery.desktop} {
    .container {
      gap: 30px;

      h5 {
        margin-bottom: 64px;
      }
    }
  }
`;

export default AlternativeProducts;
