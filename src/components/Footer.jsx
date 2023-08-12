import styled from 'styled-components';

import { Logo, Menus } from '.';
import { twitter, facebook, instagram } from '../assets/images/home';
import mediaQuery from '../styles/mediaQuery';

const Footer = () => {
  return (
    <Wrapper>
      <div className="max-container">
        <div className="header">
          <Logo />
          <Menus footer={true} />
        </div>

        <div className="content">
          <p className="text">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos; re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we&apos; re open 7 days a week.
          </p>

          <div className="sub-container">
            <p>Copyright 2021. All Rights Reserved</p>

            <div className="social">
              <a href="#">
                <img src={facebook} alt="facebook" />
              </a>

              <a href="#">
                <img src={twitter} alt="twitter" />
              </a>

              <a href="#">
                <img src={instagram} alt="instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: var(--clr-black2);
  color: var(--clr-white);

  .max-container {
    position: relative;
    padding: 52px 24px 38px;
    text-align: center;

    &::after {
      content: '';
      width: 101px;
      height: 4px;
      background-color: var(--clr-orange);
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }

    .header {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 48px;
      margin-bottom: 48px;
    }

    p {
      font-weight: 500;
      font-size: 15px;
      line-height: 25px;
      opacity: 0.5;
    }

    .text {
      margin-bottom: 48px;
    }

    .sub-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 48px;
    }

    .social {
      display: flex;
      align-items: center;
      gap: 16px;

      a {
        img {
          transition: var(--transition);
        }

        &:hover img {
          filter: invert(61%) sepia(46%) saturate(979%) hue-rotate(330deg)
            brightness(93%) contrast(80%);
        }
      }
    }
  }

  @media ${mediaQuery.tablet} {
    .max-container {
      padding: 60px 39px 46px;
      text-align: left;

      &::after {
        left: 39px;
        transform: translateX(0);
      }

      .header {
        align-items: flex-start;

        & > div:first-child {
          margin: 0;
        }
      }

      .sub-container {
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }

  @media ${mediaQuery.desktop} {
    .max-container {
      padding: 75px 0px 48px;

      &::after {
        left: 0;
      }

      .header {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      .text {
        width: 540px;
      }

      .social {
        transform: translateY(-60px);
      }
    }
  }
`;

export default Footer;
