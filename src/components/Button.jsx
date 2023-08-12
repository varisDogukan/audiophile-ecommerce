import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import arrow from '../assets/images/shared/desktop/icon-arrow-right.svg';

const Button = ({
  title = 'see product',
  url = '#',
  type,
  isNormalButton,
  method,
  width,
}) => {
  if (isNormalButton) {
    return (
      <NormalButton onClick={method} className={`btn-${type}`} width={width}>
        {title}
      </NormalButton>
    );
  }

  return (
    <LinkButton
      to={url}
      className={`btn-${type}`}
      width={width}
      onClick={method}
    >
      <span>{title}</span>
      {type === 'transparent' && <img src={arrow} alt='arrow icon' />}
    </LinkButton>
  );
};

const Wrapper = css`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  width: 100%;
  max-width: ${(props) => (props.width ? props.width : '160px')};
  height: 48px;

  &.btn-full {
    background-color: var(--clr-orange);
    color: var(--clr-white);

    &:hover {
      background-color: var(--clr-orange-light);
    }
  }

  &.btn-transparent {
    width: max-content;
    height: 18px;
    gap: 13px;
    color: var(--clr-grey2);

    &:hover {
      color: var(--clr-orange);
    }
  }

  &.btn-outline {
    border: 1px solid var(--clr-black);

    &:hover {
      background-color: var(--clr-black);
      color: var(--clr-white);
    }
  }

  &.btn-special {
    background-color: var(--clr-black);
    color: var(--clr-white);

    &:hover {
      background-color: var(--clr-grey3);
    }
  }
`;

const LinkButton = styled(Link)`
  ${Wrapper}
`;

const NormalButton = styled.button`
  ${Wrapper}
`;

Button.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
  isNormalButton: PropTypes.bool,
  method: PropTypes.func,
  width: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
