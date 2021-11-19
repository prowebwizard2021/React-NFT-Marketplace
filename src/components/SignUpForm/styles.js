import styled from 'styled-components'

export const SignUpFormContainer = styled.div`
  .signup-checkbox-list {
    width: 100%;
    margin-top: 20px;
  }

  .modal-divider-wrapper {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 24px 0 16px;

    &::before {
      content: "";
      background-color: grey;
      height: 1px;
      width: 100%;
      position: absolute;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
    }

    .modal-divider-text{
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: #b2b2b2;
      background-color: #1a1a1a;
      padding: 0 16px;
      z-index: 10;
    }
  }

  .sign-in-mode {
    font-family: Avenir,metropolisregular,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    color: #b2b2b2;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 8px;
    margin-top: 32px;
    white-space: pre-wrap;
    text-align: center;
  }
`;