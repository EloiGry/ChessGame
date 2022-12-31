import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {TurnContextProvider} from './context/Turn'
import { IsBlackKingAttackContextProvider } from './context/IsBlackKingAttack'
import { IsWhiteKingAttackContextProvider } from './context/IsWhiteKingAttack'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IsWhiteKingAttackContextProvider>
      <IsBlackKingAttackContextProvider>
      <TurnContextProvider>
        <App />
      </TurnContextProvider>
      </IsBlackKingAttackContextProvider>
    </IsWhiteKingAttackContextProvider>
  </React.StrictMode>
)
