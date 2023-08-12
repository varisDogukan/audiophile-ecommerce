import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Button } from '.';
import categories from '../constants/categories';
import mediaQuery from '../styles/mediaQuery';

const Categories = ({ type, method }) => {
  return (
    <Wrapper type={type}>
      <div className="max-container">
        {categories.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.img} alt={item.title} />
            <p className="title">{item.title}</p>

            <Button
              title="shop"
              type="transparent"
              url={item.url}
              method={method}
            />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 92px 24px ${(props) => props.type === 'menu' && '35px'};
  width: ${(props) => props.type === 'menu' && '100%'};

  .max-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    row-gap: 68px;
    column-gap: 10px;
  }

  .card {
    height: 165px;
    background-color: var(--clr-white3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    border-radius: 8px;
    padding-bottom: 22px;
    gap: 17px;

    & > img {
      width: 170px;
      position: absolute;
      top: -35%;
    }

    & > p {
      font-weight: 700;
      font-size: 15px;
      line-height: 20px;
      letter-spacing: 1.07143px;
      text-transform: uppercase;
    }
  }

  @media ${mediaQuery.tablet} {
    padding: 148px 39px ${(props) => props.type === 'menu' && '67px'};

    .card {
      height: 204px;
      padding-bottom: 30px;

      & > img {
        width: 200px;
        top: -35%;
      }

      &:last-child > img {
        top: -28%;
      }
    }
  }

  @media ${mediaQuery.desktop} {
    padding: 200px 24px 168px;
  }
`;

Categories.propTypes = {
  type: PropTypes.string,
  method: PropTypes.func,
};

export default Categories;
