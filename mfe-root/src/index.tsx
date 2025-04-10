import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Route, BrowserRouter as Router, Routes } from 'react-router'
import { RoutesPages } from './pages/routes'

const container = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(container)
// root.render(
//   <Router>
//     <App />
//   </Router>,
// )
root.render(
  <Router>
    <RoutesPages />
  </Router>,
)
