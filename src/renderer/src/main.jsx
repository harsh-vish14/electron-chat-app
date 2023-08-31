import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/index.scss'
import { UserProvider } from './helper/userContext'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>
)
