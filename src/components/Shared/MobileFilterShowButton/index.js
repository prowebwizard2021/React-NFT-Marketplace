import React from 'react';
import { MobileFilterShowButtonContainer } from './styles';
import FilterIcon from '../../../assets/images/filter-icon.svg'

const MobileFilterShowButton = (props) => {

  return (
    <MobileFilterShowButtonContainer onClick={props.handleClick}>
      <button onClick={props.handleClick}>
        <div className="filter-button-content">
          <img src={FilterIcon} alt="filter-icon" width="24" />
          <div className="filter-button-text">Filters</div>
        </div>
      </button>
    </MobileFilterShowButtonContainer>
  )
}

export default MobileFilterShowButton;
