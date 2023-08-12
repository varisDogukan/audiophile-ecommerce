import styled from 'styled-components';
import PropTypes from 'prop-types';

const CountBox = ({ method, count, small, id }) => {
  return (
    <Wrapper small={small}>
      <button
        onClick={() => method('-', id)}
        disabled={count === (small ? 0 : 1)}
      >
        -
      </button>
      <p>{count}</p>
      <button onClick={() => method('+', id)}>+</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => (props.small ? '12px' : '20px')};
  width: 100%;
  max-width: ${(props) => (props.small ? '96px' : '120px')};
  height: ${(props) => (props.small ? '32px' : '48px')};
  background-color: var(--clr-white3);
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 1px;
  font-weight: 700;
  user-select: none;

  button {
    width: 16px;
    height: 18px;
    color: #b5b5b5;

    &:hover {
      color: var(--clr-orange);
    }
  }
`;

CountBox.propTypes = {
  method: PropTypes.func,
  count: PropTypes.number,
  small: PropTypes.bool,
  id: PropTypes.number,
};

export default CountBox;
