import styled from 'styled-components';

import { Button } from '../../../components';
import mediaQuery from '../../../styles/mediaQuery';
import {
  desktopZx7,
  mobileZx7,
  tabletZx7,
} from '../../../assets/images/home';

const SecondProduct = () => {
  return (
    <Wrapper>
      <div className="info">
        <h2>ZX7 SPEAKER</h2>

        <Button type="outline" url="/speakers/zx7-speaker" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 320px;
  background: url(${mobileZx7}) center center/cover no-repeat;
  padding-left: 25px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 24px;

  .info {
    h2 {
      font-weight: 700;
      font-size: 28px;
      line-height: 38px;
      letter-spacing: 2px;
      margin-bottom: 32px;
    }
  }

  @media ${mediaQuery.tablet} {
    background-image: url(${tabletZx7});
    padding-left: 62px;
    margin-bottom: 32px;
  }

  @media ${mediaQuery.desktop} {
    background-image: url(${desktopZx7});
    padding-left: 95px;
    margin-bottom: 48px;
  }
`;

export default SecondProduct;
