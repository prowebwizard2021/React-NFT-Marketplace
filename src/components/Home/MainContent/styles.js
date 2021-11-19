import styled from 'styled-components'

export const MainContentContainer = styled.div`
  max-height: calc(100vh - 72px);
  overflow: hidden;
  overflow-y: auto;
  padding: 28px;
`;

export const CardList = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit,minmax(278px,1fr));
  grid-gap: 20px;
  gap: 20px;
`;