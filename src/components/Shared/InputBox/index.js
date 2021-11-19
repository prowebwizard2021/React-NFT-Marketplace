import React from 'react';
import { InputBoxContainer } from './styles';

const InputBox = (props) => {
  return (
    <InputBoxContainer>
      <input 
        name={props.name}
        type={props.type}
        value={props.value} 
        placeholder={props.placeholder} 
        onChange={props.onChange}
      />
    </InputBoxContainer>
  )
}

export default InputBox;
