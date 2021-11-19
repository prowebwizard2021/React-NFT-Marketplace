import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  HeaderContainer,
  LinkItem,
  MobileMenu,
  MobileMenuList,
  MobileMenuContainer,
} from "./styles";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useAuth } from '../../contexts/AuthContext';
import desktopLogo from '../../assets/images/logo-desktop.png';
import mobileLogo from '../../assets/images/logo-mobile.png';
import walletIcon from '../../assets/images/walletIcon.svg';
import HoverButton from "../Shared/HoverButton";
import DropDown from "../Shared/DropDown";
import MainModal from "../Shared/MainModal";
import { SignInForm } from "../SignInForm";
import { SignUpForm } from "../SignUpForm";
import UserDropDown from './../Shared/UserDropDown/index';

export const Header = () => {
  const windowSize = useWindowSize();
  let history = useHistory();

  const [
    { loggedUserName, isLoggedIn }, 
    { handleLoggedUser }
  ] = useAuth();

  const [isMenu, setIsMenu] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleOnSignIn = (val) => {
    setShowSignIn(false);
    handleLoggedUser({
      loggedUserName: val,
      isLoggedIn: true
    });
  }

  const handleOnSignUp = (val) => {
    setShowSignUp(false);
    handleLoggedUser({
      loggedUserName: val,
      isLoggedIn: true
    });
  }

  const handleClickWallet = () => {
    //Same as sign in button
    setIsMenu(false);
    setShowSignIn(true);
  }

  const handleLogOut = () => {
    handleLoggedUser({
      loggedUserName: '',
      isLoggedIn: false
    });
  }

  const mobileHandleSignIn = () => {
    setIsMenu(false);
    setShowSignIn(true);
  }

  const mobileHandleSignUp = () => {
    setIsMenu(false);
    setShowSignUp(true);
  }

  return (
    <>
      <HeaderContainer>
        {windowSize.width >= 1025 ? (
          <>
            <img 
              src={desktopLogo} 
              alt="logo" 
              className="header-logo" 
              onClick={() => history.push('/')} 
            />
            <div className="nav-container">
              <div className="nav-links">
                <LinkItem onClick={() => history.push('/')}>Marketplace</LinkItem>
                <DropDown title={'Get ERN'}>
                  <LinkItem>Binance</LinkItem>
                  <LinkItem>Uniswap</LinkItem>
                  <LinkItem>OKEx</LinkItem>
                </DropDown>
                <LinkItem>Polygon Bridge</LinkItem>
                <LinkItem>Farm Stones</LinkItem>
                <LinkItem>Staking</LinkItem>
              </div>
              {isLoggedIn ? (
                <div className="nav-logged-user-section">
                  <div class="color-section">
                    <UserDropDown>
                      <LinkItem>Swap wETH</LinkItem>
                      <LinkItem>My Profile</LinkItem>
                      <LinkItem onClick={handleLogOut}>Log Out</LinkItem>
                    </UserDropDown>
                  </div>
                </div>
              ) : (
                <div className="nav-user-section">
                  <img src={walletIcon} alt="wallet-icon" onClick={handleClickWallet} />
                  <HoverButton isNaked={true} label="Sign-In" handleClick={() => setShowSignIn(true)} />
                  <HoverButton label="Sign-Up" handleClick={() => setShowSignUp(true)} />
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <MobileMenuContainer>
              <img 
                src={mobileLogo}
                alt="logo"
                className="header-logo"
                onClick={() => history.push('/')} 
              />
              <div className="mobile-user-section">
                {isLoggedIn ? (
                  <div className="nav-logged-user-section">
                    <div class="color-section">
                      <UserDropDown>
                        <LinkItem>Swap wETH</LinkItem>
                        <LinkItem>My Profile</LinkItem>
                        <LinkItem onClick={handleLogOut}>Log Out</LinkItem>
                      </UserDropDown>
                    </div>
                  </div>
                ) : (
                  <img src={walletIcon} alt="wallet-icon" onClick={handleClickWallet} />
                )}
                {isMenu ? (
                  <MobileMenu onClick={() => setIsMenu(false)}>
                    <CloseIcon onClick={() => setIsMenu(true)} />
                  </MobileMenu>
                ) : (
                  <MobileMenu onClick={() => setIsMenu(true)}>
                    <MenuIcon onClick={() => setIsMenu(false)} />
                  </MobileMenu>
                )}
              </div>
            </MobileMenuContainer>
            <MobileMenuList style={{ height: isMenu ? "calc(100vh - 72px)" : "0px" }}>
              <div>
                <div className="nav-links">
                  <LinkItem>Current Drop</LinkItem>
                  <LinkItem>Marketplace</LinkItem>
                  <LinkItem>Get ERN: Binance</LinkItem>
                  <LinkItem>Get ERN: Uniswap</LinkItem>
                  <LinkItem>Get ERN: OKEx</LinkItem>
                  <LinkItem>Polygon Bridge</LinkItem>
                  <LinkItem>Farm Stones</LinkItem>
                  <LinkItem>Staking</LinkItem>
                  <LinkItem>Contact Us</LinkItem>
                </div>
                {!isLoggedIn && (
                  <div className="nav-user-section">
                    <HoverButton isNaked={true} label="Sign-In" handleClick={mobileHandleSignIn} />
                    <HoverButton label="Sign-Up" handleClick={mobileHandleSignUp} />
                  </div>
                )}
              </div>
            </MobileMenuList>
          </>
        )}

        {showSignIn && (
          <MainModal 
            title={'Sign In'}
            handleClose={() => setShowSignIn(false)}>
            <SignInForm 
              goToSignUp={() => {
                setShowSignIn(false);
                setShowSignUp(true);
              }}
              onSignIn={(val) => handleOnSignIn(val)}
            />
          </MainModal>
        )}

        {showSignUp && (
          <MainModal 
            title={'Sign Up'}
            handleClose={() => setShowSignUp(false)}>
            <SignUpForm 
              goToSignIn={() =>{
                setShowSignUp(false);
                setShowSignIn(true);
              }}
              onSignUp={() => handleOnSignUp()}
            />
          </MainModal>
        )}

      </HeaderContainer>
    </>
  );
};

const MenuIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="21" viewBox="0 0 19 13" fill="none">
      <path d="M0.5 0.780151H18.5V2.78015H0.5V0.780151Z" fill="white"/>
      <path d="M0.5 5.78015H18.5V7.78015H0.5V5.78015Z" fill="white"/>
      <path d="M18.5 10.7802H0.5V12.7802H18.5V10.7802Z" fill="white"/>
    </svg>
  );
};

const CloseIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none">
      <path d="M12 13.476L17.524 19L19 17.524L13.476 12L19 6.47597L17.524 5L12 10.524L6.47597 5L5 6.47597L10.524 12L5 17.524L6.47597 19L12 13.476Z" fill="#DDDDDD"/>
    </svg>
  );
};
