import styled from 'styled-components';
import PropTypes from 'prop-types';
import mediaQuery from '../../../styles/mediaQuery';
import { useAppContext } from '../../../context/appContext';

const InputGroup = ({ name, text, placeHolder, value }) => {
  const { handleChange } = useAppContext();

  return (
    <Wrapper>
      <label htmlFor={name}>{text}</label>
      <input
        type="text"
        id={name}
        name={name}
        placeholder={placeHolder}
        value={value}
        onChange={(evn) =>
          handleChange({ name: evn.target.name, value: evn.target.value })
        }
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.214286px;
    margin-bottom: 9px;
  }

  input {
    border: var(--border);
    border-radius: 8px;
    padding: 24px 18px;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: -0.25px;
    opacity: 0.4;
  }

  @media ${mediaQuery.tablet} {
    min-width: 309px;
  }
`;

InputGroup.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  placeHolder: PropTypes.string,
  value: PropTypes.any,
};

export default InputGroup;
