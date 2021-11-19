import React, { useState } from "react";
import { SignUpFormContainer } from "./styles";
import InputBox from "../Shared/InputBox";
import GradientButton from "../Shared/GradientButton";
import RadioCheckBox from "../Shared/RadioCheckBox";

export const SignUpForm = (props) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SignUpFormContainer>
      <InputBox
        type={'text'}
        name={'email'}
        placeholder={'Email'}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputBox
        type={'text'}
        name={'username'}
        placeholder={'Username'}
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
      <div className="signup-checkbox-list">
        <RadioCheckBox label={"I agree to Ethernity's Terms of Service"} />
        <RadioCheckBox label={"I opt in to receive offers from Ethernity Chain to my email address"} />
      </div>
      <GradientButton label={'Submit'} handleClick={props.onSignUp} />
      <div className="sign-in-mode">Already have an account?</div>
      <GradientButton label={'Sign in'} isNaked handleClick={props.goToSignIn} />
    </SignUpFormContainer>
  );
};