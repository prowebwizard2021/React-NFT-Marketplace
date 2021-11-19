import React from 'react';
import { 
  FilterItemContainer, 
} from './styles';

const FilterItem = (props) => {
  return (
    <FilterItemContainer isFullWidth={props.isFullWidth}>
      <div className="filter-item-title">{props.title}</div>
      <div className="filter-item-body">
        {props.children}
      </div>
    </FilterItemContainer>
  )
}

export default FilterItem;