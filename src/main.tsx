import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {TurnContextProvider} from './context/Turn'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TurnContextProvider>
      <App />
    </TurnContextProvider>
  </React.StrictMode>
)
