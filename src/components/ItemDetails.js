import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { items } from './Shop';
import { cart } from './Cart';

function ItemDetails({match, updateItemCount}) {
  const item = items[match.params.id];
  const [quantity, setQuantity] = useState(1);

  function handleChange(e) {
    setQuantity(e.target.value);
  };

  function addToCart() {
    let match = cart.findIndex((cartItem) => cartItem.name === item.name);
    if (match !== -1) {
      cart[match].quantity += quantity;
    } else {
      cart.push({...item, quantity:quantity});
    }
  };

  return (
    <div className="itemDetails">
      <div className="image">
        <img src={item.src} alt="Cardboard Box"></img>
      </div>
      <div className="details">
        <h2>{item.name}</h2>
        <p>{`$${item.price}`}</p>
        <div className="quantityInput">
          <button onClick={() => {if (quantity >= 2) setQuantity(quantity - 1)}}>-</button>
          <input type="number" value={quantity} onChange={handleChange}></input>
          <button onClick={() => {if (quantity <= 9) setQuantity(quantity + 1)}}>+</button>
        </div>
        <button className="addButton" onClick={()=> {addToCart(); updateItemCount(quantity);}}>ADD</button>
        <Link to="/shop">
          <button className="backButton">⇦ BACK</button>
        </Link>
      </div>
    </div>
  );
}

export default ItemDetails;