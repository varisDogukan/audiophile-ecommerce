import styled from 'styled-components';

import mediaQuery from '../../../styles/mediaQuery';
import {
  mobileHero,
  tabletHero,
  desktopHero,
} from '../../../assets/images/home';
import { Button } from '../../../components';

const HeroContent = () => {
  return (
    <Wrapper mobileHero={mobileHero}>
      <div className="container max-container">
        <p className="sub-title">NEW PRODUCT</p>
        <h2 className="title">XX99 Mark II HeadphoneS</h2>
        <p className="text">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>

        <Button type="full" url="/headphones/xx99-mark-two-headphones" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: calc(100% - 89px);
  width: 100%;
  padding: 0 24px;
  background: url(${mobileHero}) center center/cover no-repeat;

  .container {
    width: 100%;
    height: 100%;
    color: var(--clr-white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .sub-title {
    font-size: 14px;
    letter-spacing: 10px;
    text-transform: uppercase;
    color: #8c8c8c;
    width: 280px;
  }

  .title {
    font-weight: 700;
    font-size: 36px;
    line-height: 40px;
    letter-spacing: 1.28571px;
    text-transform: uppercase;
    margin: 16px 0 24px;
    width: 280px;
  }

  .text {
    color: #d5d5d5;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    width: 280px;
    margin-bottom: 28px;
  }

  @media ${mediaQuery.tablet} {
    background-image: url(${tabletHero});

    .sub-title,
    .title,
    .text {
      width: 370px;
    }

    .text {
      margin-bottom: 40px;
    }
  }

  @media ${mediaQuery.desktop} {
    background-image: url(${desktopHero});

    .container {
      align-items: flex-start;
      text-align: left;
    }

    .sub-title,
    .title,
    .text {
      width: 380px;
    }
  }
`;

export default HeroContent;
