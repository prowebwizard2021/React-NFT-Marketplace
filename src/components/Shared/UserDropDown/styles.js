import styled from 'styled-components'

export const UserDropDownContainer = styled.div`
  position: relative;

  .dropdown-list-div{
    display: none;
    position: absolute;
    right: 0;
    top: 100%;
    padding-top: 10px;
    z-index: 9999;
  }

  .dropdown-list {
    width: 180px;
    background: #000;
    color: #fff;
    border-radius: 12px;
    padding: 12px 10px;
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

export const UserDropDownTitle = styled.div`
  color: #000000;
  font-size: 16px;
  padding: 0 8px;
  font-family: Avenir,sans-serif;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent linear-gradient(90deg,#e9b405,#16c7d7) 0 0 no-repeat padding-box;
  padding: 1px;
  border-radius: 100%;
  font-size: 30px;
  margin-right: 20px;
`;

export const UserDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  line-height: 24px;
  text-align: center;

  >div {
    padding: 0px 15px;
  }
`;