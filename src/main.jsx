import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProvider } from "./context/myContext.jsx"
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider />
    <AppProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppProvider>
    <AuthProvider />
  </StrictMode>,
)
