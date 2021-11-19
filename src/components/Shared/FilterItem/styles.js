import styled from 'styled-components'

export const FilterItemContainer = styled.div`
  width: 100%;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #efefef33;

  .filter-item-title {
    font-family: Avenir,sans-serif;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1.8px;
    text-transform: capitalize;
    opacity: 1;
    color: ${props => props.theme.colors.textColor};
  }

  .filter-item-body {
    padding: 20px 0;
    display: ${({ isFullWidth }) => isFullWidth ? 'block' : 'grid'};
    grid-template-columns: repeat(2,1fr);
  }  
`;