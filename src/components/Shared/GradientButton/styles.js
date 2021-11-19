import styled from 'styled-components'

export const GradientButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  
  button.btn-unnaked {
    width: 230px;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    background: linear-gradient(90deg,#eeb200,#50d98b 47.25%,#00c0f5 98.27%);
    color: #000;
    font-family: Avenir,sans-serif;
    height: 34px;
    border-radius: 30px;
    padding: 8px 16px 7px;
    border: 0;
    cursor: pointer;
    outline: none;

    &:hover {
      background-size: 300% 300%;
      -webkit-animation: button_gradient__3yGDy 4s ease infinite;
      animation: button_gradient__3yGDy 4s ease infinite;
    }
  }

  button.btn-naked {
    width: 230px;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    background: linear-gradient(90deg,#eeb200,#50d98b 47.25%,#00c0f5 98.27%);
    color: #000;
    font-family: Avenir,sans-serif;
    height: 34px;
    border-radius: 30px;
    padding: 0;
    border: 0;
    cursor: pointer;
    outline: none;

    .colored-content {
      background-color: #1a1a1a;
      width: calc(100% - 2px);
      height: calc(100% - 2px);
      margin: 1px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 30px;

      .colored-text {
        background: linear-gradient(90deg,#eeb200 10%,#50d98b 60.25%,#00c0f5 98.27%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        white-space: pre-wrap;
      }
    }

    &:hover {
      background-size: 300% 300%;
      -webkit-animation: button_gradient__3yGDy 4s ease infinite;
      animation: button_gradient__3yGDy 4s ease infinite;
    }
  }

  @keyframes button_gradient__3yGDy {
    0% {
      background-position: 0 51%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 51%;
    }
  }

  @media (max-width: 1024px) {
    margin: 12px 0;
    height: 62px;
  }  
`;