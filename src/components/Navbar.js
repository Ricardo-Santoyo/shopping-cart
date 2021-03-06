import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as BoxIcon } from './box-icon.svg';
import { ReactComponent as CartIcon } from './shopping-cart.svg';

function Navbar(props) {
  return (
    <nav>
      <ul className="navlinks">
        <Link to="/">
          <li id="boxIcon"><BoxIcon /></li>
        </Link>

        <Link to="/shop">
          <li>Shop</li>
        </Link>

        <Link to="/cart">
          <li id="cartIcon"><CartIcon />
            <span id="cartNumber">{props.itemCount}</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;