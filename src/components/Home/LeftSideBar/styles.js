import styled from 'styled-components'

export const LeftSideBarContainer = styled.div`
  max-height: calc(100vh - 72px);
  overflow: hidden;
  overflow-y: auto;
  padding: 28px 9px;
  padding-left: 28px;

  .total-result {
    font-family: Avenir,sans-serif;
    font-weight: 500;
    color: #efefef;
    font-size: 14px;
    margin-bottom: 16px;
  }

  @media (max-width: 800px) {
  }
`