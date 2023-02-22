import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <Link className="navbar-brand" to="/">The Global AI Project</Link>
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/shop">Shop</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contactpage">Contact</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;

