import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 72px;
  background: #000;
  padding: 0 32px;
  box-sizing: border-box;
  border-bottom: 1px solid #333;

  @media (min-width: 1025px) {
    justify-content: space-between;
  }

  .header-logo {
    height: 45px;
    cursor: pointer;
  }

  .nav-container {
    display: flex;

    .nav-links {
      display: flex;
      align-items: center;
      margin-right: 1rem;
    }

    .nav-user-section {
      display: flex;
      align-items: center;
      img {
        cursor: pointer;
        height: 21px;
        width: 24px;
        display: inline;
        margin-right: 16px;
      }
    }
  }

  .forgot-password-label {
    margin-bottom: 16px;
    color: #e9b405;
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    align-self: flex-start;
    cursor: pointer;
  }

  .nav-logged-user-section {
    background: transparent linear-gradient(90deg,#e9b405,#16c7d7) 0 0 no-repeat padding-box;
    padding: 1px;
    border-radius: 32px;
    max-width: 260px;
    margin-left: auto;
    margin-right: auto;

    .color-section {
      width: 100%;
      background-color: #000;
      align-items: center;
      font-family: metropolisregular,sans-serif;
      font-size: 16px;
      line-height: 26px;
      font-weight: 700;
      transition: all .2s;
      border-radius: 32px;
    }
  }
`

export const LinkItem = styled.a`
  font-size: 16px;
  color: ${props => props.theme.colors.white};
  padding: 0 8px;
  font-family: Avenir,sans-serif;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: #00c0f5;
  }

  @media (min-width: 992px) {
    padding: 0 8px;
  }

  @media (min-width: 1440px) {
    padding: 0 16px;
  }
`

export const MobileMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .mobile-user-section {
    display: flex;
    align-items: center;

    img {
      cursor: pointer;
      height: 21px;
      width: 24px;
      display: inline;
    }
  }
`

export const MobileMenu = styled.div`
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  margin-left: 15px;
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;
    margin-left: 10px;
  }

  img {
    cursor: pointer;
    height: 21px;
    width: 24px;
    display: inline;
    margin-right: 16px;
  }
`

export const MobileMenuList = styled.div`
  position: fixed;
	top: 72px;
	left: 0px;
	right: inherit;
	z-index: 1100;
	width: 100%;
	height: 0%;
	transition: all 0.5s ease 0s;
	overflow: auto;
	background: #000;

  > div {
    padding: 1.8em 1.8em 1.8em 1.8em;
	  font-size: 1.15em;
  }

  a {
    font-family: Avenir,sans-serif;
    display: block;
    font-size: 18px;
    letter-spacing: 1.8px;
    line-height: 26px;
    margin: 20px 0 40px 0;
    text-align: center
  }

  .nav-user-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const MenuItem = styled.div`
	padding: 24px 24px 24px 0px;
  border-bottom: 1px solid #efefef;
	cursor: pointer;
	transition: all 0.3s linear;

  &:hover {
    color: #FFD029;
  }
`

export const OverLay = styled.div`
  position: fixed;
	z-index: 1000;
	width: 100%;
	height: 100%;
	background: #d8d8d84d;
	opacity: 1;
	transition: opacity 0.3s ease 0s;
	top: 0px;
	left: 0px;
`