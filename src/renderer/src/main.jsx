import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/index.scss'
import { UserProvider } from './helper/userContext'
import App from './App'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </HashRouter>
)
