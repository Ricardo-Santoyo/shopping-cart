import React, { useState } from 'react';
import { items } from './Shop';
import { cart } from './Cart';

function ItemDetails({match}) {
  const item = items[match.params.id];
  const [quantity, setQuantity] = useState(1);

  function handleChange(e) {
    setQuantity(e.target.value);
  };

  function addToCart() {
    cart.push({...item, quantity:quantity});
  }

  return (
    <div className="itemDetails">
      <div className="image">
        <img src={item.src} alt="Cardboard Box"></img>
      </div>
      <div className="details">
        <h2>{item.name}</h2>
        <p>{item.price}</p>
        <button onClick={() => {if (quantity >= 2) setQuantity(quantity - 1)}}>-</button>
        <input type="number" value={quantity} onChange={handleChange}></input>
        <button onClick={() => {if (quantity <= 9) setQuantity(quantity + 1)}}>+</button>
        <button onClick={addToCart}>ADD</button>
      </div>
    </div>
  );
}

export default ItemDetails;