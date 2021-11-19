import styled from 'styled-components'

export const HoverButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 6px;
  height: 30px;
  width: 100px !important;
  background: transparent linear-gradient(90deg,#e9b405,#16c7d7) 0 0 no-repeat padding-box;
  padding: 2px;
  border-radius: 32px;

  @media (max-width: 1024px) {
    width: 300px !important;
    margin: 12px 0;
    height: 62px;
  }

  .btn-naked{
    display: flex;
    justify-content: center;
    border-radius: 32px;
    width: 100%;
    background-color: #000;
    align-items: center;
    font-family: metropolisregular, sans-serif;
    font-size: 16px;
    line-height: 26px;
    font-weight: 700;
    transition: all .2s;
    cursor: pointer;
    color: white;

    &:hover {
      background-color: transparent;
      color: #000;
    }
  }

  .btn-unnaked{
    display: flex;
    justify-content: center;
    border-radius: 32px;
    width: 100%;
    align-items: center;
    font-family: metropolisregular, sans-serif;
    font-size: 16px;
    line-height: 26px;
    font-weight: 700;
    transition: all .2s;
    cursor: pointer;
    color: #000;

    &:hover {
      background-color: #000;
      color: #fff;
    }
  }
`