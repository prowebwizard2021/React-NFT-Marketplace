import styled from 'styled-components'

export const MainModalContainer = styled.div`
  background: rgb(0 0 0 / 92%);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 999;
  top: 0;
  left: 0;
  overflow: auto;
  padding: 50px 0;
  justify-content: center;
  align-items: center;
  display: flex;

  @media (max-width: 900px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const MainModalOverlayContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,.5);
  z-index: 0;
  top: 0;
  left: 0;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  display: flex;
  opacity: 0;
`;

export const MainModalContentContainer = styled.div`
  margin: 0 auto;
  position: relative;
  background: #1a1a1a;
  border-radius: 12px;
  width: 435px;
  padding: 40px 50px;
  max-height: -webkit-calc(100vh - 60px);
  max-height: calc(100vh - 60px);
  overflow-y: auto;
  color: #fff;

  @media (max-width: 900px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;

export const MainModalHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  .modal-title {
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    color: #fff;
    text-align: center;
    white-space: pre-wrap;
  }

  .modal-close {
    cursor: pointer;
    svg {
      color: #fff;
    }
  }
`;

export const MainModalBodyContainer = styled.div`
  max-height: calc(100vh - 160px);
  overflow: auto;
`;