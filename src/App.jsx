import './App.css';
import { useState } from 'react';
import GroceryForm from './groceryForm';

function App() {

  const [items,setItems] = useState([]);

  return (
    <div>
      <h1>Grocery Bud</h1>
      <GroceryForm/>
    </div>
  );
}


export default App;
