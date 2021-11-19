import React, { useRef, useEffect } from 'react';
import { CardPaginationContainer } from './styles';
import BiChevronLeft from '@meronex/icons/bi/BiChevronLeft';
import BiChevronRight from '@meronex/icons/bi/BiChevronRight';

const CardPagination = ({ item }) => {

  return (
    <CardPaginationContainer>
      <div className="pagination-left-arrow">
        <BiChevronLeft />
      </div>
      <div className="pagination-text-preserve">
        1
      </div>
      <div className="pagination-right-arrow">
        <BiChevronRight />
      </div>
    </CardPaginationContainer>
  )
}

export default CardPagination;