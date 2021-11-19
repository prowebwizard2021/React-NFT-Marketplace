import styled from 'styled-components'

export const DropDownContainer = styled.div`
  position: relative;

  .dropdown-list-div{
    display: none;
    position: absolute;
    right: 0;
    top: 100%;
    padding-top: 10px;
    z-index: 99;
  }

  .dropdown-list {
    width: 124px;
    background: #000;
    color: #fff;
    border-radius: 12px;
    padding: 12px 0;
    z-index: 2;
    border: 1px solid #e9b405;

    a {
      display: block;
      padding: 8px!important;
      margin: 0!important;
      font-size: 14px!important;
      text-align: center;
    }

    &:hover {
      color: #00c0f5;
    }
  }

  &:hover {
    .dropdown-list-div {
      display: block;
    }
  }
`;

export const DropDownTitle = styled.div`
  color: #e9b405;
  font-size: 16px;
  padding: 0 8px;
  font-family: Avenir,sans-serif;
  font-weight: 700;
  cursor: pointer;

  @media (min-width: 992px) {
    padding: 0 8px;
  }

  @media (min-width: 1440px) {
    padding: 0 16px;
  }
`;