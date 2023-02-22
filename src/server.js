require("dotenv").config();
const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/charge", async (req, res) => {
  try {
    const { amount, currency, description, source } = req.body;
    const charge = await stripe.charges.create({
      amount,
      currency,
      description,
      source,
    });
    res.status(200).json({
      message: "Payment successful",
      charge,
    });
  } catch (error) {
    res.status(500).json({
      message: "Payment failed",
      error: error.message,
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
