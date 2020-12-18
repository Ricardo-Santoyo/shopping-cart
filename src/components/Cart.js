import React from 'react';

let cart = [];

function Cart() {
  return (
    <div id="cart">
    {cart.map((item, id) => (
      <div className=".cartItem" key={id}>
        <p>{item.name}</p>
        <p>{item.quantity}</p>
      </div>
    ))}

      <h2>Total:</h2>
  </div>
  );
}

export default Cart;
export {cart};