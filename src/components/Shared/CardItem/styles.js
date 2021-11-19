import styled from 'styled-components'

export const CardItemContainer = styled.div`
  position: relative;
  border-radius: 8px;
  width: 100%;
  text-align: left;
  display: -moz-box;
  display: flex;
  background: #efefef4d;
  -webkit-transition: all .2s;
  transition: all .2s;
  max-width: 388px;

  &:hover {
    background: -webkit-linear-gradient(0deg,#eeb200,#00c0f5 98.27%);
    animation: gradient 2s ease infinite;

    .multiple-tile-1 {
      &::after {
        background: -webkit-linear-gradient(0deg,#eeb200,#00c0f5 98.27%);
      }
    }

    .multiple-tile-2 {
      &::after {
        background: -webkit-linear-gradient(0deg,#eeb200,#00c0f5 98.27%);
      }
    }
  }

  @media (max-width: 1440px) {
    max-width: 388px;
  }

  .card-content {
    margin: 1px;
    background: #000;
    border-radius: 7px;
    padding: 16px 16px 18px;
    height: -webkit-calc(100% - 2px);
    height: calc(100% - 2px);
    display: -moz-box;
    display: flex;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    flex-direction: column;
    width: 100%;
  }

  .card-media {
    height: 100%;
    max-height: 315px;
    cursor: pointer;
  }

  .card-video-container {
    position: relative;
    display: grid;
    height: 100%;
  }

  .card-video {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 7px;
  }

  .card-video-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
     
    &:hover {
      img {
        display: none;
      }
    }
  }

  .card-title{
    font-family: Avenir,sans-serif;
    font-style: normal;
    font-weight: 700;
    margin-top: 16px;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0;
    cursor: pointer;
    color: #efefef;
    white-space: pre-wrap;
  }

  .card-artist {
    font-family: Avenir,sans-serif;
    margin-top: 8px;
    line-height: 18px;
    font-size: 12px;
    color: grey;
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: pre-wrap;
  }

  .card-price-detail {
    font-family: Avenir,sans-serif;
    flex: 1 1;
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    .card-price-label {
      font-family: Avenir,sans-serif;
      font-weight: 700;
      color: #efefef;
      line-height: 26px;
      font-size: 14px;
      opacity: .6;
      letter-spacing: 1.4px;
      text-transform: uppercase;
      white-space: pre-wrap;
    }

    .card-price-value {
      font-family: Avenir,sans-serif;
      font-weight: 700;
      color: #efefef;
      line-height: 26px;
      font-size: 16px;
      letter-spacing: 1.6px;
      white-space: pre-wrap;
    }
  }

  .card-multiple {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 0 10px;
  }

  .multiple-tile-1 {
    position: relative;
    overflow: hidden;
    height: 3px;

    &::before {
      content: "";
      display: block;
      height: 19px;
      background: #fff;
      border-radius: 4px;
      width: calc(100% - 2px);
      position: absolute;
      bottom: 1px;    
      left: 1px;
      z-index: 1;
      background-color: #000;
    }

    &::after {
      content: "";
      display: block;
      height: 20px;
      border-radius: 5px;
      background: #efefef4d;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  }

  .multiple-tile-2 {
    position: relative;
    overflow: hidden;
    height: 4px;

    &::before {
      content: "";
      display: block;
      height: 19px;
      background: #fff;
      border-radius: 4px;
      position: absolute;
      bottom: 1px;
      z-index: 1;
      background-color: #000;
      left: 11px;
      width: calc(100% - 22px);
      bottom: 2px;
    }

    &::after {
      content: "";
      display: block;
      height: 20px;
      border-radius: 5px;
      background: #efefef4d;
      position: absolute;
      width: calc(100% - 20px);
      bottom: 1px;
      left: 10px;
    }
  }
`;