import styled from 'styled-components'

export const RangeSliderContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;

  .slider {
    position: relative;
    width: 100%;
  }

  .slider__track,
  .slider__range,
  .slider__left-value,
  .slider__right-value {
    position: absolute;
  }

  .slider__track,
  .slider__range {
    border-radius: 3px;
    height: .4rem;
  }

  .slider__track {
    background-color: #50d98b;
    width: 99%;
    z-index: 1;
    margin-left: 5px;
  }

  .slider__range {
    background-color: #50d98b;
    z-index: 2;
    margin-left: 5px;
  }

  .slider__left-value,
  .slider__right-value {
    color: #dee2e6;
    font-size: 12px;
    margin-top: 20px;
  }

  .slider__left-value {
    left: 6px;
  }

  .slider__right-value {
    right: -4px;
  }

  /* Removing the default appearance */
  .thumb,
  .thumb::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
  }

  .thumb {
    pointer-events: none;
    position: absolute;
    height: 0;
    width: 100%;
    outline: none;
  }

  .thumb--zindex-3 {
    z-index: 3;
  }

  .thumb--zindex-4 {
    z-index: 4;
  }

  .thumb--zindex-5 {
    z-index: 5;
  }

  /* For Chrome browsers */
  .thumb::-webkit-slider-thumb {
    background-color: #50d98b;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    height: 30px;
    width: 30px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }

  /* For Firefox browsers */
  .thumb::-moz-range-thumb {
    background-color: #50d98b;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    height: 30px;
    width: 30px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }

  //display values
  .display-values {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 30px;
  }

  .display-value {
    border: 1px solid #f1f1f188;
    border-radius: 8px;
    padding: 4px 8px;
  }

  .max-label, .min-label {
    line-height: 20px;
    font-family: Avenir,metropolisregular,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    font-size: 14px;
    color: #fff;
    white-space: pre-wrap;
  }
`;