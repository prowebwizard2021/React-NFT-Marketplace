import React from 'react';
import ImCheckmark from '@meronex/icons/im/ImCheckmark';
import { CheckBoxContainer, CheckBoxAppreance, CheckBoxLabel } from './styles';

const CheckBox = (props) => {
  const {
    id,
    label,
    isChecked,
    onChange
  } = props

  const handleClick = () => {
    if(!onChange) return;
    onChange(id)
  }

  return (
    <CheckBoxContainer onClick={() => handleClick()}>
      <CheckBoxAppreance active={isChecked}>
        {isChecked && (
          <ImCheckmark color="#000" />
        )}
      </CheckBoxAppreance>
      <CheckBoxLabel>
        {label}
      </CheckBoxLabel>
    </CheckBoxContainer>
  )
}

export default CheckBox;
