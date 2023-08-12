import styled from 'styled-components';

import {
  desktopBest,
  mobileBest,
  tabletBest,
} from '../assets/images/home';
import mediaQuery from '../styles/mediaQuery';

const About = () => {
  return (
    <Wrapper>
      <div className="max-container">
        <div className="img-container" />

        <div className="info">
          <h5>
            Bringing you the <span>best</span> audio gear
          </h5>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 0 24px 120px;
  text-align: center;

  .img-container {
    height: 300px;
    background: url(${mobileBest}) center center/cover no-repeat;
    border-radius: 8px;
    margin-bottom: 40px;
  }

  .info {
    margin: 0 auto;
    max-width: 573px;

    h5 {
      font-weight: 700;
      font-size: 28px;
      line-height: 38px;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 32px;

      span {
        color: var(--clr-orange);
      }
    }

    p {
      font-weight: 500;
      font-size: 15px;
      line-height: 25px;
      opacity: 0.5;
    }
  }

  @media ${mediaQuery.tablet} {
    padding: 0 39px 96px;

    .img-container {
      background-image: url(${tabletBest});
      margin-bottom: 63px;
    }

    .info {
      h5 {
        font-size: 40px;
        line-height: 44px;
        letter-spacing: 1.42857px;
      }
    }
  }

  @media ${mediaQuery.desktop} {
    padding-bottom: 200px;
    text-align: left;

    .max-container {
      display: flex;
      align-items: center;
      gap: 125px;
    }

    .img-container {
      background-image: url(${desktopBest});
      height: 588px;
      margin-bottom: 0;
      flex: 1;
      order: 2;
    }

    .info {
      max-width: 445px;
    }
  }
`;

export default About;
