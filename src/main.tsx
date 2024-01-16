import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import WikiProvider from './context/WikiProvider.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <WikiProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </WikiProvider>
);
