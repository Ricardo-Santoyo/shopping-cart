import React from 'react';

function ItemDetails(props) {
  return (
    <div className="item">
      <img src={props.src} alt="Cardboard Box"></img>
      <p>{props.name}</p>
      <p>{props.price}</p>
    </div>
  );
}

export default ItemDetails;