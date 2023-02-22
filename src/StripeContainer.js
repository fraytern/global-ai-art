import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentPage from "./PaymentPage";

const stripePromise = loadStripe(process.env.YOUR_STRIPE_API_KEY);

export default function StripeContainer() {
    return (
        <Elements stripe={stripePromise}>
            <PaymentPage />
        </Elements>
    )
}

