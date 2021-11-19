import styled from 'styled-components'

export const InputBoxContainer = styled.div`
  padding: 1px;
  > input {
    display: block;
    font-family: metropolisbold,sans-serif;
    width: 100%;
    border: 1px solid #b2b2b2;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 8px;
    background: transparent;
    color: #b2b2b2;
    margin-bottom: 10px;
    text-align: left;
    padding: 12px 16px;
    font-weight: 400;
    font-size: 17px;
    line-height: 24px;
    outline: none;

    &:focus {
      border: 1px solid #636e81;
    }

    &:focus-visible {
      border: 1px solid #636e81;
    }
  }
`