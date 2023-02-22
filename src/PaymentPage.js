import React, { useState } from 'react';
import './PaymentPage.css'; // Import CSS file for this component
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Footer from './components/Footer';
import Navbar from './components/Navbar';

//const stripePromise = loadStripe(process.env.YOUR_STRIPE_API_KEY);

const stripePromise = loadStripe(process.env.YOUR_STRIPE_API_KEY, {
  stripeAccount: 'acct_1MZdNJKUTBXK2X6Y'
});

function PaymentPage() {
  return (
    <Elements stripe={stripePromise}>
    <div>
      <Navbar />
      <div className="payment-container">
        <h2>Payment Information</h2>
        
            <div className="form-group">
              <label htmlFor="card-number">Card Number:</label>
              <input type="text" id="card-number" name="card-number" placeholder="Enter card number" required />
            </div>
            <div className="form-group">
              <label htmlFor="card-holder">Card Holder:</label>
              <input type="text" id="card-holder" name="card-holder" placeholder="Enter card holder name" required />
            </div>
            <div className="form-group">
              <label htmlFor="expiry-date">Expiry Date:</label>
              <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" required />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV:</label>
              <input type="text" id="cvv" name="cvv" placeholder="Enter CVV" required />
            </div>
            <a href='/thankyou'><button type="submit" className="submit-button">Submit Payment</button></a>
      </div>
      <Footer />
    </div>
    </Elements>
  );
}

export default PaymentPage; 

/*

import React, { useState } from "react";
import stripe from "stripe";
import "./PaymentPage.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Card from './Card'

const stripePromise = loadStripe(process.env.YOUR_STRIPE_API_KEY, {
  stripeAccount: "acct_1MZdNJKUTBXK2X6Y",
});

function PaymentPage() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const cardElement = Elements.getElement("card");
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      const response = await fetch("/charge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: 100,
          currency: "usd",
          description: "Test payment",
          source: paymentMethod.id,
        }),
      });
      const data = await response.json();
      console.log(data);
      window.location.href = "/thankyou";
    }
  };

  return (
    <Elements stripe={stripePromise}>
      <div>
        <Navbar />
        <div className="payment-container">
          <h2>Payment Information</h2>
          <form onSubmit={handleSubmit}>
            <Card />
            <a href='/thankyou'><button type="submit" className="submit-button">Submit Payment</button></a>
          </form>
        </div>
        <Footer />
      </div>
    </Elements>
  );
}

export default PaymentPage;
*/ 