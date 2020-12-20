import React, { useState } from 'react';

let cart = [];

function Cart() {
  const [cartArray, setCartArray] = useState(cart);

  function calculateTotal() {
    if (cart.length > 0) {
      const total = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
      return `$${total}`;
    }
  };

  function displayTotal() {
    if (cart.length > 0) {
      return <h2>Total: {calculateTotal()}</h2>
    } else {
      return <h1>- YOUR CART IS EMPTY -</h1>
    }
  };

  function removeCartItem(e) {
    cart.splice(e.target.dataset.id, 1);
    setCartArray([...cart]);
  };

  return (
    <div id="cart">
    {cartArray.map((item, id) => (
      <div className="cartItem" key={id}>
        <div className="cart-image">
          <img src={item.src} alt="Cardboard Box"></img>
        </div>
        <div className="cartItemDetails">
          <div>
            <p>{item.name}</p>
            <p className="quantity">Quantity: {item.quantity}</p>
            <p className="removeItem" data-id={id} onClick={removeCartItem}>Remove</p>
          </div>
          <p className="price">${item.price}</p>
        </div>
      </div>
    ))}
      {displayTotal()}
  </div>
  );
}

export default Cart;
export {cart};