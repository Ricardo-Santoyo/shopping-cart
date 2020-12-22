import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div id="home">
      <h1>Shopping Cart</h1>
      <Link to="/shop">
        <button>View Catalog</button>
      </Link>
    </div>
  );
}

export default Home;