import React from 'react';
import { initializeApp } from "firebase/app";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CartContextProvider from './context/CartContext';

const firebaseConfig = {
  apiKey: "AIzaSyDXfvTJ2SEmzqM7tKV5C2tcJx1jB58JycU",
  authDomain: "ecommerce-e697d.firebaseapp.com",
  projectId: "ecommerce-e697d",
  storageBucket: "ecommerce-e697d.appspot.com",
  messagingSenderId: "614514766716",
  appId: "1:614514766716:web:df6891f8c1cb4e6183aaf9",
  measurementId: "G-Z2NTG489T3"
};

initializeApp(firebaseConfig);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>,
  rootElement
);

reportWebVitals();

