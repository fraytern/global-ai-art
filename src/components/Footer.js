import React from "react";
import instagram from "../ig.png";

const linkedin = require('../linkedin.png');

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <p className="footer-text">
        &copy; {new Date().getFullYear()} The Global AI Project
      </p>
      <nav className="footer-nav">
        <a href="/shop">Shop</a>
        <a href="/contactpage">Contact</a>
      </nav>
      <div className="footer-social">
        <a href="https://www.linkedin.com/in/nicholasfrayter/">
          <img src={linkedin} width={40} height={40} />
        </a>
        <a href="https://www.instagram.com/the.global.ai.project/">
          <img src={instagram} width={40} height={40} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
