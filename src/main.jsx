import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeProvider.jsx'
import NavBar from './components/NavBar/NavBar.jsx';
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <div className="">
          <NavBar />
          <App />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
)
