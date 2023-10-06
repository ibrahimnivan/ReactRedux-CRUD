import React from 'react';
import AddProduct from './components/AddProduct';
import ShowProduct from './components/ShowProduct';

function App() {
  return (
    <div className="container">
      <div className="columns">
        <div className="column">
         <AddProduct />
        </div>
        <div className="column">
         <ShowProduct />
        </div>
      </div>
    </div>
  );
}

export default App;
