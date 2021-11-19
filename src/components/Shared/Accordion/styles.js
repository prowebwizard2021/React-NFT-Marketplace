import styled from 'styled-components'

export const AccordionContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;

  .collection-search {
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
  }

  .clear-filter {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 40px;
    border-radius: 7px;
    border: 1px solid #efefef;
    background: #000;
    color: #efefef;
    font-family: Avenir,sans-serif;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
  } 

  .collection-list {
    max-height: 200px;
    overflow-y: auto;
  }

  .slider-div {
    padding-top: 25px;
    padding-right: 5px;
  }
`;

export const AccordionHeader = styled.div`
  width: 100%;
  display: -moz-box;
  display: flex;
  -moz-box-pack: justify;
  justify-content: space-between;
  -moz-box-align: center;
  align-items: center;
`;

export const AccordionIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > .text {
    font-family: Avenir,sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1.8px;
    text-transform: capitalize;
    opacity: 1;
    color: #efefef;
    margin-left: 10px;
  }
`;

export const AccordionArrow = styled.div`
  > svg {
    color: white;
  }
`;

export const AccordionBody = styled.div`
  color: #efefef;
  overflow: hidden;
  height: ${({ isOpen }) => isOpen ? 'fit-content' : '0'};
  transition: all 2s;

  > div {
    padding: 20px 0;
  }
`;