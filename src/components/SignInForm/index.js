import React, { useState } from "react";
import { SignInFormContainer } from "./styles";
import InputBox from "../Shared/InputBox";
import GradientButton from "../Shared/GradientButton";

export const SignInForm = ({goToSignUp, onSignIn}) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    onSignIn(username)
  }

  return (
    <SignInFormContainer>
      <InputBox
        type={'text'}
        name={'username'}
        placeholder={'Email/Username'}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputBox
        type={'password'}
        name={'password'}
        value={password}
        placeholder={'Password'}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="forgot-password-label" onClick={() => {}}>Forgot password?</div>
      <GradientButton label={'Continue'} handleClick={handleSignIn} />
      <div className="modal-divider-wrapper">
        <div className="modal-divider-text">Or</div>
      </div>
      <GradientButton label={'Connect with wallet'} isNaked />
      <div className="sign-up-mode">Don't have an account yet?</div>
      <GradientButton label={'Sign up'} isNaked handleClick={goToSignUp} />
    </SignInFormContainer>
  );
};