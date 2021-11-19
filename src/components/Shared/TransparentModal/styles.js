import styled from 'styled-components'

export const TransparentModalContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,.5);
  z-index: 4;
  top: 0;
  left: 0;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 300;

  .total-result {
    font-family: Avenir,sans-serif;
    font-weight: 500;
    color: #efefef;
    font-size: 14px;
    margin-bottom: 16px;
    position: fixed;
    width: 100%;
    left: 30px;
    bottom: 15px;
  }

  .clear-filter {
    position: fixed;
    right: 30px;    
    bottom: 21px;
  }
`;

export const TransparentModalContentContainer = styled.div`
  margin: 0 auto;
  position: relative;
  background: #1a1a1a;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  max-height: 100%;
  opacity: .93;
  padding: 40px 50px;
  overflow-y: auto;
  color: #fff;
`;

export const TransparentModalHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 16px;

  .modal-close {
    cursor: pointer;
    svg {
      color: #fff;
    }
  }
`;

export const TransparentModalBodyContainer = styled.div`
  max-height: calc(100vh - 160px);
  overflow: auto;
`;