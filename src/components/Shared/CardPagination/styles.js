import styled from 'styled-components'

export const CardPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 20px;

  .pagination-left-arrow {
    cursor: pointer;
    opacity: 0.4;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    > svg {
      font-size: 36px;
      color: white;
    }
  }

  .pagination-text-preserve {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: white;
  }

  .pagination-right-arrow {
    cursor: pointer;
    opacity: 0.4;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
      font-size: 36px;
      color: white;
    }
  }
`;