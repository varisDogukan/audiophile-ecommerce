import styled from 'styled-components';

import { Button } from '../../../components';
import mediaQuery from '../../../styles/mediaQuery';
import { desktopYx1, mobileYx1, tabletYx1 } from '../../../assets/images/home';

const ThirdProduct = () => {
  return (
    <Wrapper>
      <div className="img-container" />

      <div className="info">
        <h2>YX1 EARPHONES</h2>

        <Button type="outline" url="/earphones/yx1-earphones" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  & > * {
    border-radius: 8px;
  }

  .img-container {
    height: 200px;
    background: url(${mobileYx1}) center center/cover no-repeat;
  }

  .info {
    background-color: var(--clr-white3);
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 24px;

    h2 {
      font-weight: 700;
      font-size: 28px;
      line-height: 38px;
      letter-spacing: 2px;
      margin-bottom: 32px;
    }
  }

  @media ${mediaQuery.tablet} {
    flex-direction: row;

    .img-container {
      flex: 1;
      height: 250px;
      background-image: url(${tabletYx1});
    }

    .info {
      height: auto;
      padding-left: 40px;
      flex: 1;
    }
  }

  @media ${mediaQuery.desktop} {
    .img-container {
      background-image: url(${desktopYx1});
      height: 320px;
    }

    .info {
      padding-left: 95px;
    }
  }
`;

export default ThirdProduct;
