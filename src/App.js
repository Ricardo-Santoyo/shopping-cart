import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import ItemDetails from './components/ItemDetails';
import Cart from './components/Cart';

function App() {
  const [itemCount, setItemCount] = useState(0);

  function handleItemCountUpdate(itemValue) {
    setItemCount(itemCount + itemValue);
  };

  return (
    <BrowserRouter>
      <Navbar itemCount={itemCount}/>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route
          path="/shop/:id"
          render={(props) => 
            <ItemDetails {...props} updateItemCount={handleItemCountUpdate}/>
          }
        />
        <Route
          path="/cart"
          render={(props) => 
            <Cart {...props} updateItemCount={handleItemCountUpdate}/>
          }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
