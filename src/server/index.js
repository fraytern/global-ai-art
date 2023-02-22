/*const express = require('express')
const app = express()
require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

app.post ('/payment', cors(), async (req, res) => {
    let { amount, id } = req.body
    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: 'USD',
            description: 'Ai Art',
            payment_method: id,
            confirm: true
        })
        res.send({
            clientSecret: payment.client_secret
        })
    } catch (error) {
        res.send(error.message)
    }
})

app.listen(process.env.PORT || 4000, () => {
    console.log("Server listening on Port 4000...")
}) 

const express = require("express");
const app = express();
const path = require("path");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const YOUR_DOMAIN = "http://localhost:4000";

// static files
app.use(express.static(path.join(__dirname, "views")));

// middleware
app.use(express.json());

// routes
app.post("/payment", async (req, res) => {
    const { product } = req.body;
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
            {
                price_data: {
                    currency: "inr",
                    product_data: {
                        name: product.name,
                        images: [product.image],
                    },
                    unit_amount: product.amount * 100,
                },
                quantity: product.quantity,
            },
        ],
        mode: "payment",
        success_url: `${YOUR_DOMAIN}/success.html`,
        cancel_url: `${YOUR_DOMAIN}/cancel.html`,
    });

    res.json({ id: session.id });
});

// listening...
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));


const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const paymentIntent = await stripe.paymentIntents.create({
  amount: 500,
  currency: "usd",
  automatic_payment_methods: {enabled: true},
}, {
    stripeAccount: 'acct_1MZdNJKUTBXK2X6Y',

})
*/

const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/charge', async (req, res) => {
  const { amount, currency, description, source } = req.body;

  try {
    const charge = await stripe.charges.create({
      amount,
      currency,
      description,
      source,
    });

    res.status(200).json({
      message: 'Payment successful',
      charge,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Payment failed',
      error: error.message,
    });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
