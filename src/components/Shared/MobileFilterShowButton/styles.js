import styled from 'styled-components'

export const MobileFilterShowButtonContainer = styled.div`
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 200;

  > button {
    border-radius: 7px;
    border: 2px solid #efefef33;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 47px;
    font-size: 16px;
    padding: 8px 16px 7px;
    color: #1b1b1b;
    cursor: pointer;
    font-family: metropolisbold,sans-serif;
  }

  .filter-button-content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .filter-button-text {
      font-size: 16px;
      font-weight: 600;
      color: #fcfcfd;
      margin-left: 8px;
    }
  }
`;