import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import './index.css'
import {ThemeProvider} from "@/components/theme-provider.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </ThemeProvider>

  </StrictMode>,
)
