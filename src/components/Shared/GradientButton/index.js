import React from 'react';
import { GradientButtonContainer } from './styles';

const GradientButton = (props) => {
  return (
    <GradientButtonContainer>
      <button
        style={
          (props.height && props.width) ? {height: props.height, width: props.width} : null
        } 
        className={props.isNaked ? "btn-naked" : "btn-unnaked"} 
        onClick={props.handleClick}>
        <div className="colored-content">
          <div className="colored-text">
            {props.label}
          </div>
        </div>
      </button>
    </GradientButtonContainer>
  )
}

export default GradientButton;
