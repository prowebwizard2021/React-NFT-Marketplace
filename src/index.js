import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from './router'
import { ThemeProvider } from './contexts/ThemeContext'
import theme from './theme.json'
import { AuthProvider } from './contexts/AuthContext'
import { DataProvider } from './contexts/DataContext'

/**
 * Theme images
 */

theme.images = {}

const RouteApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <DataProvider>
          <Router />
        </DataProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

const wrapper = document.getElementById('root')
ReactDOM.render(<RouteApp />, wrapper)
