import AppRoutes from './pages/routes.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
const EstiloGlobal = createGlobalStyle`
   *{
     font-family: "Montserrat";
     font-weight: 400;
     padding: 0;
     margin: 0;
     text-decoration: none;
     list-style: none;
     box-sizing: border-box;
     font-size: 16px;
   } 

   body{
    background-color: #00112c;
   }
  `
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EstiloGlobal />
    <AppRoutes />
  </React.StrictMode>
)
