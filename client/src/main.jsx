import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from 'react-router-dom';
import router from './router/router.jsx';
import { HelmetProvider } from 'react-helmet-async';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
