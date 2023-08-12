import styled from 'styled-components';

import { Button } from '../../../components';
import mediaQuery from '../../../styles/mediaQuery';
import {
  desktopZx9,
  mobileZx9,
  tabletZx9,
  circles,
} from '../../../assets/images/home';

const FirstProduct = () => {
  return (
    <Wrapper>
      <div className="img-container">
        <picture>
          <source srcSet={desktopZx9} media={mediaQuery.desktop} />
          <source srcSet={tabletZx9} media={mediaQuery.tablet} />
          <img src={mobileZx9} alt="zx9 speaker" />
        </picture>
      </div>

      <div className="info">
        <h2>
          ZX9 <br /> SPEAKER
        </h2>

        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>

        <Button type="special" url="/speakers/zx9-speaker" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 600px;
  background-color: var(--clr-orange);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  margin-bottom: 24px;

  .img-container {
    position: relative;
    width: 172px;
    margin: 55px 0 32px;

    img {
      position: relative;
      z-index: 1;
    }

    &::before {
      content: '';
      width: 250%;
      height: 250%;
      position: absolute;
      top: -75%;
      left: -75%;
      background: url(${circles}) center center/cover no-repeat;
      background-size: 100%;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: var(--clr-white);
    padding: 0 10px;
    max-width: 349px;
    position: relative;
    z-index: 1;

    h2 {
      font-weight: 700;
      font-size: 36px;
      line-height: 40px;
      letter-spacing: 1.28571px;
    }

    p {
      font-weight: 500;
      font-size: 15px;
      line-height: 25px;
      opacity: 0.75;
      margin: 24px 0;
    }
  }

  @media ${mediaQuery.tablet} {
    height: 720px;
    margin-bottom: 32px;

    .img-container {
      width: 197px;
      margin: 52px 0 64px;

      &::before {
        width: 400%;
        height: 400%;
        top: -150%;
        left: -150%;
        background-size: 90%;
      }
    }

    .info {
      h2 {
        font-size: 56px;
        line-height: 58px;
      }
    }
  }

  @media ${mediaQuery.desktop} {
    height: 560px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 130px;
    margin-bottom: 48px;

    .img-container {
      width: 410px;
      margin: 0;
      margin-top: 100px;

      &::before {
        width: 300%;
        height: 300%;
        top: -100%;
        left: -100%;
        background-size: 70%;
      }
    }

    .info {
      align-items: flex-start;
      text-align: left;
    }
  }
`;

export default FirstProduct;
