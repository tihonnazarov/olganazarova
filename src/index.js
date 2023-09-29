import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Portfolio from "./React/Portfolio";
import Header from './React/Header'
import Calculator from "./React/Calculator";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Portfolio />
    <Calculator />
  </React.StrictMode>
);


