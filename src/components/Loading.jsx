import styled from 'styled-components';

const Loading = () => {
  return (
    <Wrapper>
      <div className="loading" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  place-content: center;
  width: 100%;
  height: 300px;

  .loading {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    border: 3px solid;
    border-color: var(--clr-orange) #fff transparent transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    &::before,
    &::after {
      content: '';
      box-sizing: border-box;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      border: 3px solid;
      border-color: transparent transparent #fff var(--clr-black3);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      box-sizing: border-box;
      animation: rotationBack 0.5s linear infinite;
      transform-origin: center center;
    }

    &::before {
      width: 32px;
      height: 32px;
      border-color: var(--clr-grey2) #ffffff transparent transparent;
      animation: rotation 1.5s linear infinite;
    }
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes rotationBack {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;

export default Loading;
