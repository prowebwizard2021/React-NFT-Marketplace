import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { MainContentContainer, CardList } from './styles'
import CardItem from '../../Shared/CardItem'
import CardPagination from '../../Shared/CardPagination';
import { useData } from '../../../contexts/DataContext'

export const MainContent = () => {
  
  const [{ filteredVideos }] = useData();
  let history = useHistory();

  const handleDetails = (id) => {
    if(!id) return;
    history.push(`/products/${id}`);
  }

  return (
    <MainContentContainer>
      <CardList>
        {filteredVideos.map((item) => (
          <CardItem key={item.id} item={item} onClick={() => handleDetails(item.id)} />
        ))}
      </CardList>
      {filteredVideos.length > 0 && (
        <CardPagination />
      )}
    </MainContentContainer>
  )
}