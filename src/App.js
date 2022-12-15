import './App.css';
import { useState } from 'react';
import MyJson from './etsy.json';
import Item from "./Item.js"


function App() {
  return (
    <div className="item-list">
      {
        MyJson.map(el =>
          <Item
            key={el["listing_id"]} 
            url={el["url"]} 
            img={el["MainImage"]?el["MainImage"]["url_570xN"]:(null)}
            title={el["title"]}
            currency_code={el["currency_code"]}
            price={el["price"]}
            quantity={el["quantity"]}/>)
        }

    
    </div>
  );
}

export default App;
