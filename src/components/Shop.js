import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
import Box from './images/cardboardbox.jpg';
import Chair from './images/cardboardchair.jpg';
import RoundTable from './images/cardboardroundtable.jpg';
import Bench from './images/cardboardbench.jpg';
import Sofa from './images/cardboardsofa.png';
import BookShelf from './images/cardboardbookshelf.jpg';
import Shoes from './images/cardboardshoes.jpeg';
import Bag from './images/cardboardbag.jpeg';
import Guitar from './images/cardboardguitar.jpg';
import ClothesHanger from './images/cardboardclotheshanger.jpg';

const items = [
  {src:Box, name:'Cardboard Box', price:350},{src:Chair, name:'Cardboard Chair', price:500},
  {src:RoundTable, name:'Cardboard Round Table', price:600},{src:Bench, name:'Cardboard Bench', price:1250},
  {src:Sofa, name:'Cardboard Sofa', price:2000},{src:BookShelf, name:'Cardboard Book Self', price:700},
  {src:Shoes, name:'Cardboard Shoes', price:200},{src:Bag, name:'Cardboard Bag', price:50},
  {src:Guitar, name:'Cardboard Guitar', price:800},{src:ClothesHanger, name:'Cardboard Clothes Hanger', price:40}
];

function Shop() {

  return (
    <div id="catalog">
      {items.map((item, id) => (
        <Link key={id} to={`/shop/${id}`}>
          <Item src={item.src} name={item.name} price={`$${item.price}`} />
        </Link>
      ))}
    </div>
  );
}

export default Shop;
export { items };