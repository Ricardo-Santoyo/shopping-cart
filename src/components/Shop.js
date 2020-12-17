import React from 'react';
import { Link } from 'react-router-dom'
import Item from './Item';
import Box from './cardboardbox.jpg'

const items = [
  {src:Box, name:'Cardboard Box', price:'$350'},{src:Box, name:'Cardboard Box', price:'$350'},
  {src:Box, name:'Cardboard Box', price:'$350'},{src:Box, name:'Cardboard Box', price:'$350'},
  {src:Box, name:'Cardboard Box', price:'$350'},{src:Box, name:'Cardboard Box', price:'$350'},
  {src:Box, name:'Cardboard Box', price:'$350'},{src:Box, name:'Cardboard Box', price:'$350'},
  {src:Box, name:'Cardboard Box', price:'$350'},{src:Box, name:'Cardboard Box', price:'$350'}
];

function Shop() {

  return (
    <div id="catalog">
      {items.map((item, id) => (
        <Link key={id} to={`/shop/${id}`}>
          <Item src={item.src} name={item.name} price={item.price} />
        </Link>
      ))}
    </div>
  );
}

export default Shop;