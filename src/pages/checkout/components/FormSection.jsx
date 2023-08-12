import styled from 'styled-components';
import PropTypes from 'prop-types';
import mediaQuery from '../../../styles/mediaQuery';

const FormSection = ({ children, title, firstFullWidth }) => {
  return (
    <Wrapper firstFullWidth={firstFullWidth}>
      <h5 className="title">{title}</h5>
      <div className="container">{children}</div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .title {
    font-weight: 700;
    font-size: 13px;
    line-height: 25px;
    letter-spacing: 0.928571px;
    text-transform: uppercase;
    color: var(--clr-orange);
    margin-bottom: 16px;
  }

  .container {
    display: grid;
    gap: 24px 16px;
  }

  @media ${mediaQuery.tablet} {
    .container {
      grid-template-columns: 1fr 1fr;

      & > *:first-child {
        grid-column: ${(props) => props.firstFullWidth && '1 / -1'};
      }
    }
  }
`;

FormSection.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  firstFullWidth: PropTypes.bool,
};

export default FormSection;
