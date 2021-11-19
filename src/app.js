import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import { Details } from './components/Details'
import { Header } from './components/Header'
import { Home } from './pages/Home'

export const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/products/:id'>
          <Details />
        </Route>
      </Switch>
    </>
  )
}
