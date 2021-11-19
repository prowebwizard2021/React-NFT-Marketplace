import React from 'react';
import { DropDownContainer, DropDownTitle } from './styles';

const DropDown = (props) => {
  return (
    <DropDownContainer>
      <DropDownTitle>{props.title}</DropDownTitle>
      <div className="dropdown-list-div">
        <div className="dropdown-list">
          {props.children}
        </div>
      </div>
    </DropDownContainer>
  )
}

export default DropDown;