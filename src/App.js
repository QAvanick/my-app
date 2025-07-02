import React from 'react';
import Banner from './components/Banner';
import Cart from './components/Cart'; // ou juste './Cart' si Cart.js est dans src/

function App() {
  return (
    <div className="App">
      <Banner />
      <Cart />
    </div>
  );
}

export default App;


