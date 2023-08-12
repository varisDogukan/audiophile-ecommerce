import { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useAppContext } from '../../../context/appContext';

const RadioGroup = ({ id, name, text, value }) => {
  const { payment, handleChange } = useAppContext();
  const ref = useRef();

  return (
    <Wrapper htmlFor={id} ref={ref}>
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={payment === value}
        onChange={(evn) =>
          handleChange({ name: evn.target.name, value: evn.target.value })
        }
      />
      <div className="circle" />
      <p>{text}</p>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  cursor: pointer;
  height: 56px;
  border: var(--border);
  display: flex;
  align-items: center;
  padding-left: 16px;
  gap: 16px;
  border-radius: 8px;

  p {
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: -0.25px;
  }

  .circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: var(--border);
    position: relative;

    &::after {
      content: '';
      width: 10px;
      height: 10px;
      border-radius: inherit;
      background-color: var(--clr-orange);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      display: none;
      transition: var(--transition);
    }
  }

  input {
    display: none;
  }

  input:checked + .circle::after {
    display: block;
    transform: translate(-50%, -50%) scale(1);
  }
`;

RadioGroup.propTypes = {
  id: PropTypes.number,
  value: PropTypes.any,
  name: PropTypes.string,
  text: PropTypes.string,
};

export default RadioGroup;
