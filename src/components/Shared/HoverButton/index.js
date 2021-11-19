import React from 'react';
import { HoverButtonContainer } from './styles';

const HoverButton = (props) => {
  return (
    <HoverButtonContainer onClick={props.handleClick}>
      <div className={props.isNaked ? "btn-naked" : "btn-unnaked"}>{props.label}</div>
    </HoverButtonContainer>
  )
}

export default HoverButton;
