import React from 'react'
import { HomeContainer } from './styles'
import { LeftSideBar } from './LeftSideBar'
import { MainContent } from './MainContent'

export const Home = () => {
  return (
    <HomeContainer>
      <LeftSideBar />
      <MainContent />
    </HomeContainer>
  )
}
