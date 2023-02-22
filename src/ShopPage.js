import React, { useState, useEffect } from "react";
import createClient from "@sanity/client";
import { client } from "./client";
import "./ShopPage.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PaymentPage from "./PaymentPage";

function ShopPage() {
  const [products, setProducts] = useState([]);
  const [showPaymentPage, setShowPaymentPage] = useState(false);

  useEffect(() => {
    client.fetch(`*[_type == "author"]{
      name,
      price,
      details,
      image{
        asset->{
          _id,
          url
        },
        alt
      }
    }`).then((products) => {
      setProducts(products);
    }).catch(console.error);
  }, []);

  const handleBuyNowClick = () => {
    setShowPaymentPage(true);
  }

  return (
    <div>
      <Navbar />
      <div className="product-list-container">
        <h2 className="product-list-header">Products</h2>
        <ul className="product-list">
          {products.map((product) => (
            <li className="product-list-item" key={product._id}>
              {product.image && (
                <div className="product-image-container">
                  <img src={product.image.asset.url} alt={product.name} className="product-image" />
                </div>
              )}
  
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.details}</p>
                <p className="product-price">${product.price}</p>
                <div className="product-buttons">
                  <a href="/payment"><button className="buy-now-button">Buy Now</button></a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* Conditionally render the PaymentPage component */}
      {showPaymentPage && <PaymentPage />}
      
      <Footer />
    </div>
  );
}

export default ShopPage;

