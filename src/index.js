import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ButtonProvider } from './contexts/ButtonContext';
import { ProductProvider } from './contexts/ProductContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductProvider>
      <ButtonProvider>
        <App />
      </ButtonProvider>
    </ProductProvider>
  </React.StrictMode>
);

