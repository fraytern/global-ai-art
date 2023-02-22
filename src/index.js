import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactPage from './ContactPage';
import ShopPage from './ShopPage';
import PaymentPage from './PaymentPage';
import { createRoot } from 'react-dom/client';
import Thanks from './Thanks';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contactpage" element={<ContactPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/thankyou" element={<Thanks />} />
    </Routes>
  </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();