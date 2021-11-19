import styled from 'styled-components'

export const HomeContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 320px auto;
  width: 100%;
  padding: 0;
  -moz-box-align: start;
  align-items: flex-start;
  margin: 0 auto;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    display: grid;
    width: 100%;
    padding: 0;
    -moz-box-align: start;
    align-items: flex-start;
    margin: 0 auto;
  }
`;