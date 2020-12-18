import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CartIcon } from './shopping-cart.svg';

function Navbar() {
  return (
    <nav>
      <h3>Logo</h3>

      <ul className="navlinks">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>

        <Link to="/cart">
          <li id="cartIcon"><CartIcon /></li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;