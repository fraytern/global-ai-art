/*const express = require('express');
const app = express();

app.get('/secret', async (req, res) => {
  const intent = // ... Fetch or create the PaymentIntent
  res.json({client_secret: intent.client_secret});
});

app.listen(3000, () => {
  console.log('Running on port 3000');
}); */

const express = require('express');
const app = express();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.get('/secret', async (req, res) => {
  try {
    const intent = await stripe.paymentIntents.create({
      amount: 1000, // $10 in cents
      currency: 'USD',
    });
    res.json({client_secret: intent.client_secret});
  } catch (err) {
    console.log(err);
    res.status(500).send('Error fetching PaymentIntent');
  }
});

app.listen(3000, () => {
  console.log('Running on port 3000');
});
