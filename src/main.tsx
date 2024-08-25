import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MyShopApp } from './MyShopApp'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyShopApp />
  </StrictMode>,
)
