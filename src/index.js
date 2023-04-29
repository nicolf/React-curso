import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; //Importate y ejecutate
import App from './components/App';

//context
import { CarritoProvider } from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CarritoProvider>
    <App />
  </CarritoProvider>
);