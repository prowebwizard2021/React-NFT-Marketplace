import React, { useState } from 'react';
import ImCheckmark from '@meronex/icons/im/ImCheckmark';
import { RadioCheckBoxContainer, RadioCheckBoxAppreance, RadioCheckBoxLabel } from './styles';

const RadioCheckBox = (props) => {
  const [isChecked, setIsChecked] = useState(props.isChecked ? true : false);

  const handleClick = () => {
    setIsChecked(prev => !prev)
  }

  return (
    <RadioCheckBoxContainer onClick={() => handleClick()}>
      <RadioCheckBoxAppreance active={isChecked}>
        {isChecked && (
          <ImCheckmark color="#000" />
        )}
      </RadioCheckBoxAppreance>
      <RadioCheckBoxLabel>
        {props.label}
      </RadioCheckBoxLabel>
    </RadioCheckBoxContainer>
  )
}

export default RadioCheckBox;
